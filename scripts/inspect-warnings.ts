import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';

const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');

function inspectWarnings() {
  const queue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));

  console.log('--- TITLE WARNINGS (<35 or >75 chars) ---');
  queue.sections.live.forEach((p) => {
    if (p.title.length < 35 || p.title.length > 75) {
      console.log(`[${p.key}] (${p.title.length} chars): "${p.title}"`);
    }
  });

  console.log('\n--- META DESCRIPTION WARNINGS (<90 or >185 chars) ---');
  queue.sections.live.forEach((p) => {
    if (p.meta.length < 90 || p.meta.length > 185) {
      console.log(`[${p.key}] (${p.meta.length} chars): "${p.meta}"`);
    }
  });
}

inspectWarnings();
