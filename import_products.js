// Script to download product images and create product data
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://khemz-ipec.com.ua';
const products = [
  // Gas Separators
  {
    name: 'Gas Separator-Disperser GS5-200',
    category: 'gas-separators',
    imageUrl: 'bd/products/gazoseparator-dispergator/photo/20240617125527/20240717100620530.png',
    description: 'Gas separator-disperser for oil and gas production wells'
  },
  {
    name: 'Gas Separator GS5-200',
    category: 'gas-separators',
    imageUrl: 'bd/products/gazoseparator/photo/20240617085730/20240717100412476.png',
    description: 'Gas separator for oil and gas production'
  },
  
  // Hermetic Dosing Pump Units
  {
    name: 'Hermetic Dosing Pump Unit DNP 2500/10',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132308/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 2500/10 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 1600/16',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132140/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 1600/16 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 1000/25',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132007/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 1000/25 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 630/40',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131823/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 630/40 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 400/63',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131652/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 400/63 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 40/400',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131341/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 40/400 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 160/160',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131136/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 160/160 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 100/250',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131016/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 100/250 (3.0 - 4.0 kW)'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(`${baseUrl}/${url}`, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
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

  for (const product of products) {
    const filename = product.imageUrl.split('/').pop();
    const filepath = path.join(imagesDir, filename);
    console.log(`Downloading ${product.name}...`);
    try {
      await downloadImage(product.imageUrl, filepath);
      console.log(`✓ Downloaded ${filename}`);
    } catch (err) {
      console.error(`✗ Failed to download ${product.name}:`, err.message);
    }
  }
  
  console.log('\nAll downloads complete!');
}

downloadAll();


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://khemz-ipec.com.ua';
const products = [
  // Gas Separators
  {
    name: 'Gas Separator-Disperser GS5-200',
    category: 'gas-separators',
    imageUrl: 'bd/products/gazoseparator-dispergator/photo/20240617125527/20240717100620530.png',
    description: 'Gas separator-disperser for oil and gas production wells'
  },
  {
    name: 'Gas Separator GS5-200',
    category: 'gas-separators',
    imageUrl: 'bd/products/gazoseparator/photo/20240617085730/20240717100412476.png',
    description: 'Gas separator for oil and gas production'
  },
  
  // Hermetic Dosing Pump Units
  {
    name: 'Hermetic Dosing Pump Unit DNP 2500/10',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132308/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 2500/10 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 1600/16',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132140/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 1600/16 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 1000/25',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106132007/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 1000/25 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 630/40',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131823/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 630/40 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 400/63',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131652/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 400/63 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 40/400',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131341/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 40/400 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 160/160',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131136/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 160/160 (3.0 - 4.0 kW)'
  },
  {
    name: 'Hermetic Dosing Pump Unit DNP 100/250',
    category: 'dosing-pumps',
    imageUrl: 'bd/products/germetichnyie_doziruyuschie_nasosnyie_agregatyi/photo/20210106131016/20201223154426695.png',
    description: 'Hermetic dosing plunger pump unit 100/250 (3.0 - 4.0 kW)'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(`${baseUrl}/${url}`, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
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

  for (const product of products) {
    const filename = product.imageUrl.split('/').pop();
    const filepath = path.join(imagesDir, filename);
    console.log(`Downloading ${product.name}...`);
    try {
      await downloadImage(product.imageUrl, filepath);
      console.log(`✓ Downloaded ${filename}`);
    } catch (err) {
      console.error(`✗ Failed to download ${product.name}:`, err.message);
    }
  }
  
  console.log('\nAll downloads complete!');
}

downloadAll();

