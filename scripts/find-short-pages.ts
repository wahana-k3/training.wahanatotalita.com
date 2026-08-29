import fs from 'fs';
import path from 'path';
import { getPageContent } from '../src/content';
import { TopicQueue } from '../src/lib/types';

async function listShortPages() {
  const topicQueue: TopicQueue = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../content/topic-queue.json'), 'utf8')
  );

  const shortList: { key: string; words: number }[] = [];

  for (const page of topicQueue.sections.live) {
    const content = await getPageContent(page.key);
    if (content) {
      const textOnly = (content.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const words = textOnly ? textOnly.split(' ').length : 0;
      if (words < 450) {
        shortList.push({ key: page.key, words });
      }
    }
  }

  console.log(`Found ${shortList.length} pages under 450 words:`);
  console.table(shortList);
}

listShortPages();
