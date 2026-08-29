import fs from 'fs';
import path from 'path';
import { PageMeta, TopicQueue } from '../src/lib/types';
import { getPageContent } from '../src/content';

const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');

interface PageAuditResult {
  key: string;
  path: string;
  hub: string;
  title: string;
  titleLength: number;
  titleStatus: 'OK' | 'SHORT' | 'LONG';
  metaLength: number;
  metaStatus: 'OK' | 'SHORT' | 'LONG';
  hasH1: boolean;
  h1: string;
  wordCount: number;
  h2Count: number;
  h3Count: number;
  faqCount: number;
  tableCount: number;
  imgAlt: string;
  hasImgAlt: boolean;
  outboundLinksCount: number;
  inboundLinksCount: number;
  issues: string[];
}

async function runFullSiteAudit() {
  console.log('====================================================');
  console.log('🔍 RUNNING COMPREHENSIVE FULL-SITE SEO & CONTENT AUDIT');
  console.log('====================================================\n');

  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));
  const allPages: PageMeta[] = topicQueue.sections.live;

  const results: PageAuditResult[] = [];
  const linkGraph: Record<string, Set<string>> = {};
  const inboundGraph: Record<string, Set<string>> = {};

  allPages.forEach((p) => {
    linkGraph[p.key] = new Set();
    inboundGraph[p.key] = new Set();
  });

  // First pass: extract outbound links (both in-body HTML and dynamic Related/ChainNav cards)
  for (const page of allPages) {
    const content = await getPageContent(page.key);
    if (content && content.html) {
      const hrefMatches = content.html.match(/href="([^"]+)"/g) || [];
      hrefMatches.forEach((m) => {
        const href = m.replace('href="', '').replace('"', '');
        if (href.startsWith('/') && !href.startsWith('//')) {
          const targetKey = href.replace(/^\/|\/$/g, '').split('/').pop() || '';
          if (targetKey && linkGraph[page.key]) {
            linkGraph[page.key].add(targetKey);
            if (inboundGraph[targetKey]) {
              inboundGraph[targetKey].add(page.key);
            }
          }
        }
      });
    }

    // Dynamic RelatedSection links
    (page.related || []).forEach((relKey) => {
      if (linkGraph[page.key]) {
        linkGraph[page.key].add(relKey);
      }
      if (inboundGraph[relKey]) {
        inboundGraph[relKey].add(page.key);
      }
    });

    // Dynamic ChainNav links (Prev / Next)
    if (page.prev) {
      linkGraph[page.key]?.add(page.prev);
      inboundGraph[page.prev]?.add(page.key);
    }
    if (page.next) {
      linkGraph[page.key]?.add(page.next);
      inboundGraph[page.next]?.add(page.key);
    }
  }

  // Second pass: full content and metadata analysis
  let totalWords = 0;
  let thinPagesCount = 0;
  let totalFaqs = 0;
  let totalTables = 0;
  let titleIssues = 0;
  let metaIssues = 0;
  let linkIssues = 0;

  for (const page of allPages) {
    const issues: string[] = [];
    const content = await getPageContent(page.key);

    // Title Tag Audit (Ideal: 40 - 70 chars)
    const titleLength = page.title ? page.title.length : 0;
    let titleStatus: 'OK' | 'SHORT' | 'LONG' = 'OK';
    if (titleLength < 35) {
      titleStatus = 'SHORT';
      issues.push(`Title tag too short (${titleLength} chars, recommended >= 35)`);
      titleIssues++;
    } else if (titleLength > 75) {
      titleStatus = 'LONG';
      issues.push(`Title tag too long (${titleLength} chars, recommended <= 75)`);
      titleIssues++;
    }

    // Meta Description Audit (Ideal: 110 - 165 chars)
    const metaLength = page.meta ? page.meta.length : 0;
    let metaStatus: 'OK' | 'SHORT' | 'LONG' = 'OK';
    if (metaLength < 90) {
      metaStatus = 'SHORT';
      issues.push(`Meta description too short (${metaLength} chars, recommended >= 90)`);
      metaIssues++;
    } else if (metaLength > 185) {
      metaStatus = 'LONG';
      issues.push(`Meta description too long (${metaLength} chars, recommended <= 185)`);
      metaIssues++;
    }

    // H1 Check
    const hasH1 = !!page.h1 && page.h1.trim().length > 0;
    if (!hasH1) {
      issues.push('Missing H1 heading');
    }

    // Image Alt Check
    const hasImgAlt = !!page.img_alt && page.img_alt.trim().length > 5;
    if (!hasImgAlt) {
      issues.push('Missing or too short image alt description');
    }

    // Body Content & HTML Structure
    let wordCount = 0;
    let h2Count = 0;
    let h3Count = 0;
    let tableCount = 0;
    let faqCount = 0;

    if (content) {
      const textOnly = (content.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      wordCount = textOnly ? textOnly.split(' ').length : 0;
      totalWords += wordCount;

      h2Count = (content.html.match(/<h2/g) || []).length;
      h3Count = (content.html.match(/<h3/g) || []).length;
      tableCount = (content.html.match(/<table/g) || []).length;
      faqCount = content.faq ? content.faq.length : 0;
      totalFaqs += faqCount;
      totalTables += tableCount;

      if (wordCount < 400 && page.type === 'article') {
        thinPagesCount++;
        issues.push(`Thin content detected (${wordCount} words, recommended >= 500)`);
      }
    } else {
      issues.push('Missing page content file');
    }

    // Link equity
    const outboundLinksCount = linkGraph[page.key]?.size || 0;
    const inboundLinksCount = inboundGraph[page.key]?.size || 0;

    if (inboundLinksCount === 0 && page.type === 'article') {
      issues.push('Orphan page detected (0 internal inbound links)');
      linkIssues++;
    }

    results.push({
      key: page.key,
      path: page.path,
      hub: page.hub,
      title: page.title,
      titleLength,
      titleStatus,
      metaLength,
      metaStatus,
      hasH1,
      h1: page.h1,
      wordCount,
      h2Count,
      h3Count,
      faqCount,
      tableCount,
      imgAlt: page.img_alt || '',
      hasImgAlt,
      outboundLinksCount,
      inboundLinksCount,
      issues,
    });
  }

  const avgWordCount = Math.round(totalWords / allPages.length);

  // Group pages by hub
  const hubBreakdown: Record<string, { count: number; totalWords: number; avgWords: number }> = {};
  allPages.forEach((p) => {
    const hub = p.hub || 'other';
    if (!hubBreakdown[hub]) {
      hubBreakdown[hub] = { count: 0, totalWords: 0, avgWords: 0 };
    }
    hubBreakdown[hub].count++;
    const res = results.find((r) => r.key === p.key);
    if (res) {
      hubBreakdown[hub].totalWords += res.wordCount;
    }
  });

  Object.keys(hubBreakdown).forEach((k) => {
    hubBreakdown[k].avgWords = Math.round(hubBreakdown[k].totalWords / hubBreakdown[k].count);
  });

  const summary = {
    total_pages_audited: allPages.length,
    total_words: totalWords,
    average_words_per_page: avgWordCount,
    total_faqs_indexed: totalFaqs,
    total_data_tables: totalTables,
    thin_pages_count: thinPagesCount,
    title_issues_count: titleIssues,
    meta_desc_issues_count: metaIssues,
    orphan_pages_count: linkIssues,
    hub_breakdown: hubBreakdown,
  };

  const outputFilePath = path.join(__dirname, '../content/audit-report-data.json');
  fs.writeFileSync(
    outputFilePath,
    JSON.stringify({ summary, results }, null, 2),
    'utf8'
  );

  console.log('📊 AUDIT SUMMARY METRICS:');
  console.log('----------------------------------------------------');
  console.log(`Total Pages Audited:         ${summary.total_pages_audited}`);
  console.log(`Total Word Count:            ${summary.total_words.toLocaleString()} words`);
  console.log(`Average Word Count / Page:   ${summary.average_words_per_page} words`);
  console.log(`Total FAQs Indexed:          ${summary.total_faqs_indexed} FAQs`);
  console.log(`Total Data Tables Matrix:    ${summary.total_data_tables} tables`);
  console.log(`Thin Content (<400 words):   ${summary.thin_pages_count} pages`);
  console.log(`Title Tag Warnings:          ${summary.title_issues_count}`);
  console.log(`Meta Description Warnings:   ${summary.meta_desc_issues_count}`);
  console.log(`Orphan Pages (0 Inbound):    ${summary.orphan_pages_count}`);
  console.log('----------------------------------------------------\n');
  console.log('Hub Distribution:');
  console.table(hubBreakdown);
}

runFullSiteAudit().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
