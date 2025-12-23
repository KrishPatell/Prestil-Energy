// Complete script to download ALL product images from KHEMZ-IPEC
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://khemz-ipec.com.ua';

// Comprehensive list of ALL products with their image URLs
const allProducts = [
  // Gas Separators
  { name: 'gas-separator-disperser-gs5-200', url: 'bd/products/gazoseparator-dispergator/photo/20240617125527/20240717100620530.png', category: 'gas-separators' },
  { name: 'gas-separator-gs5-200', url: 'bd/products/gazoseparator/photo/20240617085730/20240717100412476.png', category: 'gas-separators' },
  
  // Hermetic Dosing Pumps
  { name: 'dosing-pump-dnp-2500-10', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132308/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-1600-16', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132140/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-1000-25', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132007/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-630-40', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131823/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-400-63', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131652/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-40-400', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131341/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-160-160', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131136/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-100-250', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131016/20201223154426695.png', category: 'dosing-pumps' },
  
  // Centrifugal Pumps - 25 m³/day
  { name: 'centrifugal-pump-25-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082305/20190131141000893.png', category: 'pumps' },
  { name: 'centrifugal-pump-25-2', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082153/20190131141000893.png', category: 'pumps' },
  { name: 'centrifugal-pump-25-3', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082018/20190131141000893.png', category: 'pumps' },
  
  // Centrifugal Pumps - 30 m³/day
  { name: 'centrifugal-pump-30-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_30/photo/20190219120547/20190219101753139.png', category: 'pumps' },
  
  // Centrifugal Pumps - 50 m³/day
  { name: 'centrifugal-pump-50-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_50/photo/20190219155046/20190219121141161.png', category: 'pumps' },
  
  // Centrifugal Pumps - 80 m³/day
  { name: 'centrifugal-pump-80-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_80/photo/20190220085936/20190219155518654.png', category: 'pumps' },
  
  // Centrifugal Pumps - 125 m³/day
  { name: 'centrifugal-pump-125-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_125/photo/20190220102434/20190220090655320.png', category: 'pumps' },
  
  // Centrifugal Pumps - 200 m³/day
  { name: 'centrifugal-pump-200-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_200/photo/20190220135810/20190220140144232.png', category: 'pumps' },
  
  // Electric Motors - Single Section 103mm
  { name: 'motor-single-section-103-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161844/20240717101005921.png', category: 'motors' },
  { name: 'motor-single-section-103-2', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161642/20240717101005921.png', category: 'motors' },
  { name: 'motor-single-section-103-3', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161254/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Single Section 117mm
  { name: 'motor-single-section-117-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_117/photo/20180216105628/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Single Section 123mm
  { name: 'motor-single-section-123-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_123/photo/20180216150817/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Two Section 103mm
  { name: 'motor-two-section-103-1', url: 'bd/products/pogrujnyie_dvuhsektsionnyie_elektrodvigateli_103/photo/20180210131159/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Two Section 117mm
  { name: 'motor-two-section-117-1', url: 'bd/products/pogrujnyie_dvuhsektsionnyie_elektrodvigateli_117/photo/20180216130750/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Two Section 123mm
  { name: 'motor-two-section-123-1', url: 'bd/products/pogrujnyie_dvuhsektsionnyie_elektrodvigateli_123/photo/20180216134046/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Three Section 103mm
  { name: 'motor-three-section-103-1', url: 'bd/products/pogrujnyie_trehsektsionnyie_elektrodvigateli_103/photo/20180210132520/20240717101005921.png', category: 'motors' },
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}/${url}`;
    const file = fs.createWriteStream(filename);
    
    https.get(fullUrl, { followRedirect: true }, (response) => {
      if (response.statusCode === 200 || response.statusCode === 302) {
        if (response.statusCode === 302) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            file.close();
            fs.unlink(filename, () => {});
            return downloadImage(redirectUrl, filename).then(resolve).catch(reject);
          }
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode >= 300 && response.statusCode < 400) {
        // Redirect
        const redirectUrl = response.headers.location;
        file.close();
        fs.unlink(filename, () => {});
        if (redirectUrl) {
          return downloadImage(redirectUrl, filename).then(resolve).catch(reject);
        }
        reject(new Error(`HTTP ${response.statusCode} - No redirect location`));
      } else {
        file.close();
        fs.unlink(filename, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  const imagesDir = path.join(__dirname, 'client/public/images/products');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log(`Downloading ${allProducts.length} product images...\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const product of allProducts) {
    const originalFilename = product.url.split('/').pop();
    const extension = path.extname(originalFilename);
    const filename = `${product.name}${extension}`;
    const filepath = path.join(imagesDir, filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭ Skipping ${product.name} (already exists)`);
      continue;
    }
    
    console.log(`Downloading ${product.name}...`);
    try {
      await downloadImage(product.url, filepath);
      console.log(`✓ Saved as ${filename}\n`);
      successCount++;
    } catch (err) {
      console.error(`✗ Failed: ${err.message}\n`);
      failCount++;
    }
  }
  
  console.log(`\nDownload complete! Success: ${successCount}, Failed: ${failCount}`);
}

downloadAll();


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://khemz-ipec.com.ua';

// Comprehensive list of ALL products with their image URLs
const allProducts = [
  // Gas Separators
  { name: 'gas-separator-disperser-gs5-200', url: 'bd/products/gazoseparator-dispergator/photo/20240617125527/20240717100620530.png', category: 'gas-separators' },
  { name: 'gas-separator-gs5-200', url: 'bd/products/gazoseparator/photo/20240617085730/20240717100412476.png', category: 'gas-separators' },
  
  // Hermetic Dosing Pumps
  { name: 'dosing-pump-dnp-2500-10', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132308/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-1600-16', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132140/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-1000-25', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132007/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-630-40', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131823/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-400-63', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131652/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-40-400', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131341/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-160-160', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131136/20201223154426695.png', category: 'dosing-pumps' },
  { name: 'dosing-pump-dnp-100-250', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131016/20201223154426695.png', category: 'dosing-pumps' },
  
  // Centrifugal Pumps - 25 m³/day
  { name: 'centrifugal-pump-25-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082305/20190131141000893.png', category: 'pumps' },
  { name: 'centrifugal-pump-25-2', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082153/20190131141000893.png', category: 'pumps' },
  { name: 'centrifugal-pump-25-3', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082018/20190131141000893.png', category: 'pumps' },
  
  // Centrifugal Pumps - 30 m³/day
  { name: 'centrifugal-pump-30-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_30/photo/20190219120547/20190219101753139.png', category: 'pumps' },
  
  // Centrifugal Pumps - 50 m³/day
  { name: 'centrifugal-pump-50-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_50/photo/20190219155046/20190219121141161.png', category: 'pumps' },
  
  // Centrifugal Pumps - 80 m³/day
  { name: 'centrifugal-pump-80-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_80/photo/20190220085936/20190219155518654.png', category: 'pumps' },
  
  // Centrifugal Pumps - 125 m³/day
  { name: 'centrifugal-pump-125-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_125/photo/20190220102434/20190220090655320.png', category: 'pumps' },
  
  // Centrifugal Pumps - 200 m³/day
  { name: 'centrifugal-pump-200-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_200/photo/20190220135810/20190220140144232.png', category: 'pumps' },
  
  // Electric Motors - Single Section 103mm
  { name: 'motor-single-section-103-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161844/20240717101005921.png', category: 'motors' },
  { name: 'motor-single-section-103-2', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161642/20240717101005921.png', category: 'motors' },
  { name: 'motor-single-section-103-3', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161254/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Single Section 117mm
  { name: 'motor-single-section-117-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_117/photo/20180216105628/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Single Section 123mm
  { name: 'motor-single-section-123-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_123/photo/20180216150817/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Two Section 103mm
  { name: 'motor-two-section-103-1', url: 'bd/products/pogrujnyie_dvuhsektsionnyie_elektrodvigateli_103/photo/20180210131159/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Two Section 117mm
  { name: 'motor-two-section-117-1', url: 'bd/products/pogrujnyie_dvuhsektsionnyie_elektrodvigateli_117/photo/20180216130750/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Two Section 123mm
  { name: 'motor-two-section-123-1', url: 'bd/products/pogrujnyie_dvuhsektsionnyie_elektrodvigateli_123/photo/20180216134046/20240717101005921.png', category: 'motors' },
  
  // Electric Motors - Three Section 103mm
  { name: 'motor-three-section-103-1', url: 'bd/products/pogrujnyie_trehsektsionnyie_elektrodvigateli_103/photo/20180210132520/20240717101005921.png', category: 'motors' },
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}/${url}`;
    const file = fs.createWriteStream(filename);
    
    https.get(fullUrl, { followRedirect: true }, (response) => {
      if (response.statusCode === 200 || response.statusCode === 302) {
        if (response.statusCode === 302) {
          // Handle redirect
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            file.close();
            fs.unlink(filename, () => {});
            return downloadImage(redirectUrl, filename).then(resolve).catch(reject);
          }
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode >= 300 && response.statusCode < 400) {
        // Redirect
        const redirectUrl = response.headers.location;
        file.close();
        fs.unlink(filename, () => {});
        if (redirectUrl) {
          return downloadImage(redirectUrl, filename).then(resolve).catch(reject);
        }
        reject(new Error(`HTTP ${response.statusCode} - No redirect location`));
      } else {
        file.close();
        fs.unlink(filename, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  const imagesDir = path.join(__dirname, 'client/public/images/products');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  console.log(`Downloading ${allProducts.length} product images...\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const product of allProducts) {
    const originalFilename = product.url.split('/').pop();
    const extension = path.extname(originalFilename);
    const filename = `${product.name}${extension}`;
    const filepath = path.join(imagesDir, filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭ Skipping ${product.name} (already exists)`);
      continue;
    }
    
    console.log(`Downloading ${product.name}...`);
    try {
      await downloadImage(product.url, filepath);
      console.log(`✓ Saved as ${filename}\n`);
      successCount++;
    } catch (err) {
      console.error(`✗ Failed: ${err.message}\n`);
      failCount++;
    }
  }
  
  console.log(`\nDownload complete! Success: ${successCount}, Failed: ${failCount}`);
}

downloadAll();

