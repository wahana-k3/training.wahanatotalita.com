import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'content', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

let updatedCount = 0;
for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes("from '../types'")) {
    content = content.replace(/from '\.\.\/types'/g, "from '@/lib/types'");
    fs.writeFileSync(filePath, content, 'utf-8');
    updatedCount++;
  }
}

console.log(`[Import Fixer] Updated ${updatedCount} files to use @/lib/types`);
