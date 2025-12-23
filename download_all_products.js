// Comprehensive script to download all product images from KHEMZ-IPEC
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://khemz-ipec.com.ua';

// All products with their image URLs
const allProducts = [
  // Gas Separators
  { name: 'gas-separator-disperser-gs5-200', url: 'bd/products/gazoseparator-dispergator/photo/20240617125527/20240717100620530.png' },
  { name: 'gas-separator-gs5-200', url: 'bd/products/gazoseparator/photo/20240617085730/20240717100412476.png' },
  
  // Hermetic Dosing Pumps
  { name: 'dosing-pump-dnp-2500-10', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132308/20201223154426695.png' },
  { name: 'dosing-pump-dnp-1600-16', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132140/20201223154426695.png' },
  { name: 'dosing-pump-dnp-1000-25', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132007/20201223154426695.png' },
  { name: 'dosing-pump-dnp-630-40', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131823/20201223154426695.png' },
  { name: 'dosing-pump-dnp-400-63', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131652/20201223154426695.png' },
  { name: 'dosing-pump-dnp-40-400', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131341/20201223154426695.png' },
  { name: 'dosing-pump-dnp-160-160', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131136/20201223154426695.png' },
  { name: 'dosing-pump-dnp-100-250', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131016/20201223154426695.png' },
  
  // Centrifugal Pumps - 25 m³/day
  { name: 'centrifugal-pump-25-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082305/20190131141000893.png' },
  { name: 'centrifugal-pump-25-2', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082153/20190131141000893.png' },
  
  // Electric Motors - Single Section 103mm
  { name: 'motor-single-section-103-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161844/20240717101005921.png' },
  { name: 'motor-single-section-103-2', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161642/20240717101005921.png' },
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(`${baseUrl}/${url}`, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
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
  
  for (const product of allProducts) {
    const originalFilename = product.url.split('/').pop();
    const extension = path.extname(originalFilename);
    const filename = `${product.name}${extension}`;
    const filepath = path.join(imagesDir, filename);
    
    console.log(`Downloading ${product.name}...`);
    try {
      await downloadImage(product.url, filepath);
      console.log(`✓ Saved as ${filename}\n`);
    } catch (err) {
      console.error(`✗ Failed: ${err.message}\n`);
    }
  }
  
  console.log('All downloads complete!');
}

downloadAll();

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://khemz-ipec.com.ua';

// All products with their image URLs
const allProducts = [
  // Gas Separators
  { name: 'gas-separator-disperser-gs5-200', url: 'bd/products/gazoseparator-dispergator/photo/20240617125527/20240717100620530.png' },
  { name: 'gas-separator-gs5-200', url: 'bd/products/gazoseparator/photo/20240617085730/20240717100412476.png' },
  
  // Hermetic Dosing Pumps
  { name: 'dosing-pump-dnp-2500-10', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132308/20201223154426695.png' },
  { name: 'dosing-pump-dnp-1600-16', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132140/20201223154426695.png' },
  { name: 'dosing-pump-dnp-1000-25', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132007/20201223154426695.png' },
  { name: 'dosing-pump-dnp-630-40', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131823/20201223154426695.png' },
  { name: 'dosing-pump-dnp-400-63', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131652/20201223154426695.png' },
  { name: 'dosing-pump-dnp-40-400', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131341/20201223154426695.png' },
  { name: 'dosing-pump-dnp-160-160', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131136/20201223154426695.png' },
  { name: 'dosing-pump-dnp-100-250', url: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131016/20201223154426695.png' },
  
  // Centrifugal Pumps - 25 m³/day
  { name: 'centrifugal-pump-25-1', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082305/20190131141000893.png' },
  { name: 'centrifugal-pump-25-2', url: 'bd/products/nasosyi_tsentrobejnyie_podachey_25/photo/20190215082153/20190131141000893.png' },
  
  // Electric Motors - Single Section 103mm
  { name: 'motor-single-section-103-1', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161844/20240717101005921.png' },
  { name: 'motor-single-section-103-2', url: 'bd/products/pogrujnyie_odnosektsionnyie_elektrodvigateli_103/photo/20180131161642/20240717101005921.png' },
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(`${baseUrl}/${url}`, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
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
  
  for (const product of allProducts) {
    const originalFilename = product.url.split('/').pop();
    const extension = path.extname(originalFilename);
    const filename = `${product.name}${extension}`;
    const filepath = path.join(imagesDir, filename);
    
    console.log(`Downloading ${product.name}...`);
    try {
      await downloadImage(product.url, filepath);
      console.log(`✓ Saved as ${filename}\n`);
    } catch (err) {
      console.error(`✗ Failed: ${err.message}\n`);
    }
  }
  
  console.log('All downloads complete!');
}

downloadAll();




