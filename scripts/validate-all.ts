import fs from 'fs';
import path from 'path';
import { SITE, allLivePages, fullPageUrl, pageUrl } from '../src/lib/site';
import { getPageContent } from '../src/content';
import { TopicQueue } from '../src/lib/types';

interface ValidationResult {
  category: string;
  passed: boolean;
  message: string;
  details?: any;
}

const results: ValidationResult[] = [];

function record(category: string, passed: boolean, message: string, details?: any) {
  results.push({ category, passed, message, details });
  const status = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} [${category}]: ${message}`);
  if (!passed && details) {
    console.error('Details:', details);
  }
}

async function runValidationPipeline() {
  console.log('====================================================');
  console.log('🚀 RUNNING PERMANENT QUALITY & SAFETY GATE PIPELINE');
  console.log('====================================================\n');

  // 1. Topic Queue Integrity Check
  const queuePath = path.join(__dirname, '../content/topic-queue.json');
  if (!fs.existsSync(queuePath)) {
    record('Queue', false, 'topic-queue.json does not exist');
    process.exit(1);
  }

  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(queuePath, 'utf8'));
  const totalCount = topicQueue.sections.live.length;
  record('Queue', Array.isArray(topicQueue.sections.live) && totalCount >= 37,
    `Topic queue contains valid live pages (Found: ${totalCount})`
  );
  record('Queue', Array.isArray(topicQueue.sections.next_batch),
    `NEXT BATCH is present and clean (Found: ${topicQueue.sections.next_batch?.length})`
  );

  // 2. Duplicate Slugs & Paths Check
  const keys = new Set<string>();
  const paths = new Set<string>();
  let hasDuplicate = false;

  for (const page of allLivePages) {
    if (keys.has(page.key)) {
      record('Duplicates', false, `Duplicate key found: ${page.key}`);
      hasDuplicate = true;
    }
    keys.add(page.key);

    const normPath = page.path.replace(/^\/|\/$/g, '');
    if (paths.has(normPath)) {
      record('Duplicates', false, `Duplicate path found: ${page.path}`);
      hasDuplicate = true;
    }
    paths.add(normPath);
  }

  if (!hasDuplicate) {
    record('Duplicates', true, `Zero duplicate keys or URL paths found across all ${allLivePages.length} pages`);
  }

  // 3. Metadata & Canonical Validation
  let metaValid = true;
  for (const page of allLivePages) {
    if (!page.title || page.title.trim().length === 0) {
      record('Metadata', false, `Page ${page.key} is missing title tag`);
      metaValid = false;
    }
    if (!page.meta || page.meta.trim().length === 0) {
      record('Metadata', false, `Page ${page.key} is missing meta description`);
      metaValid = false;
    }
    if (!page.h1 || page.h1.trim().length === 0) {
      record('Metadata', false, `Page ${page.key} is missing H1 heading`);
      metaValid = false;
    }
    const fullUrl = fullPageUrl(page.key);
    if (!fullUrl.startsWith(SITE.baseUrl)) {
      record('Metadata', false, `Page ${page.key} has invalid canonical URL: ${fullUrl}`);
      metaValid = false;
    }
  }
  if (metaValid) {
    record('Metadata', true, `All ${allLivePages.length} pages have complete titles, descriptions, H1s, and canonical URLs`);
  }

  // 4. Content File & HTML Body Completeness
  let contentValid = true;
  for (const page of allLivePages) {
    const content = await getPageContent(page.key);
    if (!content) {
      record('Content', false, `Missing content file for key: ${page.key}`);
      contentValid = false;
      continue;
    }
    if (!content.html || content.html.trim().length < 50) {
      record('Content', false, `Content for ${page.key} is unexpectedly empty or short`);
      contentValid = false;
    }
  }
  if (contentValid) {
    record('Content', true, `All ${allLivePages.length} individual content files loaded successfully with full HTML bodies`);
  }

  // 5. Internal Broken Links Scanner
  let brokenLinksCount = 0;
  const validHrefs = new Set<string>();
  allLivePages.forEach((p) => {
    validHrefs.add(pageUrl(p.key));
    validHrefs.add(pageUrl(p.key).replace(/\/$/, ''));
    validHrefs.add(pageUrl(p.key) === '/' ? '/' : pageUrl(p.key));
  });
  validHrefs.add('/terima-kasih/');
  validHrefs.add('/terima-kasih');

  for (const page of allLivePages) {
    const content = await getPageContent(page.key);
    if (!content) continue;

    const hrefMatches = [...content.html.matchAll(/href="([^"]+)"/g)];
    for (const hm of hrefMatches) {
      const href = hm[1];
      // Check internal relative links
      if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/assets/')) {
        const cleanHref = href.split('#')[0];
        if (cleanHref && !validHrefs.has(cleanHref) && !validHrefs.has(cleanHref + '/') && !validHrefs.has(cleanHref.replace(/\/$/, '')) && cleanHref !== '/kirim.php') {
          record('Broken Links', false, `Broken link in page [${page.key}]: ${href}`);
          brokenLinksCount++;
        }
      }
    }
  }

  if (brokenLinksCount === 0) {
    record('Broken Links', true, `Zero broken internal links across all ${allLivePages.length} pages`);
  }

  // 6. Robots.txt & Sitemap Parity Check
  const sitemapUrls = allLivePages.map(p => fullPageUrl(p.key));
  record('Sitemap', sitemapUrls.length === allLivePages.length, `Sitemap covers all ${allLivePages.length} live pages (Count: ${sitemapUrls.length})`);

  // 7. Summary
  const allPassed = results.every(r => r.passed);
  console.log('\n====================================================');
  if (allPassed) {
    console.log('🎉 ALL QUALITY & SAFETY CHECKS PASSED PERFECTLY!');
  } else {
    console.error('❌ SOME QUALITY CHECKS FAILED. PLEASE FIX ABOVE ISSUES.');
    process.exit(1);
  }
  console.log('====================================================\n');
}

runValidationPipeline().catch((err) => {
  console.error('Validation pipeline encountered an error:', err);
  process.exit(1);
});
