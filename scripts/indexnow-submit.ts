import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';

const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');
const HOST = 'training.wahanatotalita.com';
const KEY = '9f8e7d6c5b4a3210e7a1b2c3d4e5f6a7';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitIndexNow() {
  console.log('====================================================');
  console.log('⚡ SUBMITTING ALL LIVE URLS VIA INDEXNOW PROTOCOL');
  console.log('====================================================\n');

  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  const urlList = topicQueue.sections.live.map((p) => {
    if (p.key === 'home') return `https://${HOST}/`;
    return `https://${HOST}/${p.path}`;
  });

  console.log(`Prepared ${urlList.length} URLs for IndexNow submission.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://yandex.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Sending ping to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`👉 Response status from ${endpoint}: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✅ SUCCESS: Submitted ${urlList.length} URLs to ${endpoint}`);
      } else {
        const text = await response.text();
        console.log(`ℹ️ Response detail: ${text || 'Submitted'}`);
      }
    } catch (err: any) {
      console.warn(`⚠️ Warning connecting to ${endpoint}: ${err.message}`);
    }
  }

  console.log('\n🎉 IndexNow submission completed successfully!');
}

submitIndexNow().catch((err) => {
  console.error('IndexNow failed:', err);
});
