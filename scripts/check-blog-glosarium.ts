import * as fs from 'fs';
import * as path from 'path';

const audit = JSON.parse(fs.readFileSync('content/audit-report-data.json', 'utf8'));
const blog = audit.results.find((p: any) => p.key === 'blog');
const glosarium = audit.results.find((p: any) => p.key === 'glosarium');

console.log('Blog Audit:', blog);
console.log('\nGlosarium Audit:', glosarium);
