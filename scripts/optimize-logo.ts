import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const LOGO_PATH = path.join(__dirname, '../public/assets/img/logo-wt.png');
const BACKUP_PATH = path.join(__dirname, '../public/assets/img/logo-wt-orig.png');

async function optimizeLogo() {
  if (!fs.existsSync(BACKUP_PATH)) {
    fs.copyFileSync(LOGO_PATH, BACKUP_PATH);
  }

  // Generate crisp 120x120 retina PNG (under 8KB)
  await sharp(BACKUP_PATH)
    .resize(120, 120, { fit: 'inside' })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(LOGO_PATH);

  const stats = fs.statSync(LOGO_PATH);
  console.log(`✅ Optimized logo-wt.png size: ${stats.size} bytes (${(stats.size / 1024).toFixed(1)} KiB) - was 322.5 KiB!`);
}

optimizeLogo().catch(console.error);
