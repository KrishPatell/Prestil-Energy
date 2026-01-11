#!/usr/bin/env node

/**
 * Script to add SEO props to all blog posts
 * This ensures all blog posts have proper SEO configuration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogMetadataPath = path.join(__dirname, '../client/src/pages/blog/blog-metadata.ts');
const blogDir = path.join(__dirname, '../client/src/pages/blog');

// Read metadata
const metadataContent = fs.readFileSync(blogMetadataPath, 'utf-8');
const metadataMatch = metadataContent.match(/export const blogPostsMetadata: BlogPostMetadata\[\] = \[([\s\S]*?)\];/);
if (!metadataMatch) {
  console.error('Could not find blog metadata');
  process.exit(1);
}

// Extract metadata entries (simplified - in production, use proper parser)
const metadataEntries = [];
const entryRegex = /slug:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = entryRegex.exec(metadataContent)) !== null) {
  metadataEntries.push(match[1]);
}

console.log(`Found ${metadataEntries.length} blog posts in metadata`);

// Function to add SEO props to a blog post file
function addSEOToBlogPost(filePath, slug) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if SEO is already present
  if (content.includes('seo={{')) {
    console.log(`✓ ${slug} already has SEO`);
    return;
  }
  
  // Find BlogLayout component usage
  const layoutMatch = content.match(/<BlogLayout\s*([^>]*)>/);
  if (!layoutMatch) {
    console.log(`⚠ ${slug} - BlogLayout not found`);
    return;
  }
  
  // Find metadata for this slug
  const slugRegex = new RegExp(`slug:\\s*['"]${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'i');
  const metadataBlock = metadataContent.match(new RegExp(`slug:\\s*['"]${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"][\\s\\S]*?},`, 'i'));
  
  if (!metadataBlock) {
    console.log(`⚠ ${slug} - Metadata not found`);
    return;
  }
  
  // Extract metadata fields
  const titleMatch = metadataBlock[0].match(/title:\s*['"]([^'"]+)['"]/);
  const metaTitleMatch = metadataBlock[0].match(/metaTitle:\s*['"]([^'"]+)['"]/);
  const metaDescMatch = metadataBlock[0].match(/metaDescription:\s*['"]([^'"]+)['"]/);
  const keywordsMatch = metadataBlock[0].match(/keywords:\s*\[([^\]]+)\]/);
  const heroImageMatch = metadataBlock[0].match(/heroImage:\s*['"]([^'"]+)['"]/);
  const dateMatch = metadataBlock[0].match(/date:\s*['"]([^'"]+)['"]/);
  const authorMatch = metadataBlock[0].match(/author:\s*['"]([^'"]+)['"]/);
  
  const title = metaTitleMatch ? metaTitleMatch[1] : (titleMatch ? titleMatch[1] : '');
  const description = metaDescMatch ? metaDescMatch[1] : '';
  const keywords = keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim().replace(/['"]/g, '')) : [];
  const image = heroImageMatch ? heroImageMatch[1] : '/images/3d_technical_render_of_submersible_pump.png';
  const date = dateMatch ? dateMatch[1] : 'January 11, 2026';
  const author = authorMatch ? authorMatch[1] : 'Prestil Energy India';
  
  // Convert date to ISO format
  const isoDate = new Date(date).toISOString();
  
  // Create SEO props string
  const seoProps = `        seo={{
          title: "${title}",
          description: "${description.replace(/"/g, '\\"')}",
          keywords: ${JSON.stringify(keywords)},
          image: "${image}",
          url: "/blog/${slug}",
          author: "${author}",
          publishedTime: "${isoDate}",
          modifiedTime: "${isoDate}",
        }}`;
  
  // Insert SEO props after BlogLayout opening tag
  const newContent = content.replace(
    /(<BlogLayout\s*)([^>]*>)/,
    `$1${seoProps}\n$2`
  );
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`✓ Added SEO to ${slug}`);
}

// Process all blog posts
const categories = ['category-1-pumps', 'category-2-motors', 'category-3-gas-separation', 'category-4-integrated-solutions', 'category-5-maintenance'];

for (const category of categories) {
  const categoryDir = path.join(blogDir, category);
  if (!fs.existsSync(categoryDir)) {
    console.log(`⚠ Category directory not found: ${category}`);
    continue;
  }
  
  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.tsx'));
  for (const file of files) {
    const filePath = path.join(categoryDir, file);
    const slug = file.replace('.tsx', '');
    addSEOToBlogPost(filePath, slug);
  }
}

console.log('\n✅ SEO props added to all blog posts!');
