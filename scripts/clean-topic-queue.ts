import * as fs from 'fs';
import * as path from 'path';

const topicQueuePath = path.join(process.cwd(), 'content', 'topic-queue.json');
const topicQueue = JSON.parse(fs.readFileSync(topicQueuePath, 'utf-8'));

const pagesDir = path.join(process.cwd(), 'src', 'content', 'pages');
const existingFiles = new Set(fs.readdirSync(pagesDir).map(f => f.replace(/\.ts$/, '')));

const seenKeys = new Set<string>();
const cleanLive: any[] = [];

for (const item of topicQueue.sections.live) {
  const k = item.key || item.slug;
  if (!k) continue;
  if (!existingFiles.has(k)) continue;
  if (seenKeys.has(k)) continue;

  seenKeys.add(k);
  item.key = k;
  delete item.slug;
  cleanLive.push(item);
}

// Re-index n
cleanLive.forEach((item, idx) => {
  item.n = idx + 1;
});

topicQueue.sections.live = cleanLive;
topicQueue.summary = {
  total_live: cleanLive.length,
  total_next_batch: 0,
  total_backlog: 0
};

fs.writeFileSync(topicQueuePath, JSON.stringify(topicQueue, null, 2), 'utf-8');
console.log(`[Clean Topic Queue] Cleaned to exactly ${cleanLive.length} unique live pages`);
