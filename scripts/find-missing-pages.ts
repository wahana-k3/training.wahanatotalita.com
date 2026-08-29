import * as fs from 'fs';
import * as path from 'path';

const queue = JSON.parse(fs.readFileSync('content/topic-queue.json', 'utf8')).sections.live;
const files = new Set(fs.readdirSync('src/content/pages').map(f => f.replace('.ts', '')));
const missing = queue.filter((q: any) => !files.has(q.key || q.slug));

console.log('Total live in queue:', queue.length);
console.log('Total files in src/content/pages:', files.size);
console.log('Missing count:', missing.length);
console.log('Missing items:', missing.map((m: any) => ({ key: m.key || m.slug, title: m.title, hub: m.hub })));
