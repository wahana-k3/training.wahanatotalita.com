import * as fs from 'fs';

const queue = JSON.parse(fs.readFileSync('content/topic-queue.json', 'utf8')).sections.live;
const map = new Map<string, string>();

queue.forEach((item: any) => {
  map.set(item.key, item.path);
});

console.log('Total items:', map.size);

// Print keys containing specific terms
const searchTerms = ['balikpapan', 'surabaya', 'batam', 'pasuruan', 'kendal', 'solo', 'lampung', 'bali', 'manado', 'excavator', 'traktor', 'smk3', 'p2k3', 'csms', 'emergency', 'apar', 'smkp', 'matriks', 'dumai', 'cileungsi', 'subang', 'batang', 'ciwandan', 'tanjung-pinang', 'tarakan', 'banjarbaru', 'padang', 'kendari', 'luwuk', 'bitung', 'lingkungan'];

for (const term of searchTerms) {
  const matches = [...map.entries()].filter(([k]) => k.includes(term));
  console.log(`\nMatches for "${term}":`);
  matches.forEach(([k, p]) => console.log(`  key: ${k} -> path: /${p}`));
}
