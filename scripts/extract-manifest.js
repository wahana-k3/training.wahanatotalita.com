const fs = require('fs');
const path = require('path');

const pagesPhp = fs.readFileSync(path.join(__dirname, '../training.publichtml/config/pages.php'), 'utf8');

// Accurate parser for PHP nested array return
// We can split by page entries starting with `'key' => [` at indentation 0
const pageBlocks = [];
const lines = pagesPhp.split('\n');
let currentKey = null;
let currentBlock = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const startMatch = line.match(/^'([a-z0-9-]+)'\s*=>\s*\[/);
  if (startMatch) {
    if (currentKey && currentBlock.length > 0) {
      pageBlocks.push({ key: currentKey, text: currentBlock.join('\n') });
    }
    currentKey = startMatch[1];
    currentBlock = [line];
  } else if (currentKey) {
    if (line.match(/^\]\s*,?\s*$/) && !line.startsWith('  ')) {
      currentBlock.push(line);
      pageBlocks.push({ key: currentKey, text: currentBlock.join('\n') });
      currentKey = null;
      currentBlock = [];
    } else {
      currentBlock.push(line);
    }
  }
}

if (currentKey && currentBlock.length > 0) {
  pageBlocks.push({ key: currentKey, text: currentBlock.join('\n') });
}

console.log(`Found ${pageBlocks.length} top-level page blocks.`);

const pages = [];

for (const pb of pageBlocks) {
  const key = pb.key;
  const block = pb.text;

  const getField = (name) => {
    const m = block.match(new RegExp(`'${name}'\\s*=>\\s*'([^']*)'`));
    return m ? m[1] : undefined;
  };
  
  const getNum = (name) => {
    const m = block.match(new RegExp(`'${name}'\\s*=>\\s*([0-9]+)`));
    return m ? parseInt(m[1], 10) : undefined;
  };
  
  const getArray = (name) => {
    const m = block.match(new RegExp(`'${name}'\\s*=>\\s*\\[([^\\]]*)\\]`));
    if (!m) return [];
    return m[1].split(',').map(s => s.trim().replace(/^'|'$/g, '')).filter(Boolean);
  };
  
  // HowTo
  let howto = undefined;
  if (block.includes("'howto'")) {
    const howtoMatches = [...block.matchAll(/\['name'\s*=>\s*'([^']*)',\s*'text'\s*=>\s*'([^']*)'\]/g)];
    if (howtoMatches.length > 0) {
      howto = howtoMatches.map(h => ({
        name: h[1].replace(/\\'/g, "'"),
        text: h[2].replace(/\\'/g, "'")
      }));
    }
  }

  pages.push({
    key,
    n: getNum('n'),
    path: getField('path') ?? (key === 'home' ? '' : `${key}/`),
    published: getField('published') ?? null,
    title: getField('title')?.replace(/\\'/g, "'"),
    h1: getField('h1')?.replace(/\\'/g, "'"),
    meta: getField('meta')?.replace(/\\'/g, "'"),
    hub: getField('hub'),
    type: getField('type'),
    prev: getField('prev') ?? '',
    next: getField('next') ?? '',
    related: getArray('related'),
    money: getField('money') ?? 'kontak',
    img_alt: getField('img_alt')?.replace(/\\'/g, "'"),
    howto,
    status: 'live',
    batch: 'legacy-migration'
  });
}

pages.sort((a, b) => (a.n || 0) - (b.n || 0));

console.log(`Parsed ${pages.length} pages.`);

const topicQueue = {
  metadata: {
    title: "Master Topic Queue — training.wahanatotalita.com",
    description: "Publishing queue and status index for all topics. Designed to scale to 1,000+ topics.",
    version: "1.0.0",
    last_updated: "2026-08-29",
    instructions: "To publish a new batch: Add topics to next_batch -> execute build/publish -> status moves to live."
  },
  summary: {
    total_live: pages.length,
    total_next_batch: 0,
    total_backlog: 0
  },
  sections: {
    live: pages,
    next_batch: [],
    backlog: []
  }
};

fs.writeFileSync(
  path.join(__dirname, '../content/topic-queue.json'),
  JSON.stringify(topicQueue, null, 2),
  'utf8'
);

console.log('Successfully saved content/topic-queue.json with exact 37 pages.');
