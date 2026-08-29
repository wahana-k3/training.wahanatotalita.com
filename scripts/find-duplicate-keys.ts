import * as fs from 'fs';

const queue = JSON.parse(fs.readFileSync('content/topic-queue.json', 'utf8')).sections.live;
const seen = new Map<string, number>();
const duplicates: string[] = [];

queue.forEach((item: any) => {
  const k = item.key || item.slug;
  const count = (seen.get(k) || 0) + 1;
  seen.set(k, count);
  if (count === 2) {
    duplicates.push(k);
  }
});

console.log('Duplicate keys count:', duplicates.length);
console.log('Duplicate keys:', duplicates);
