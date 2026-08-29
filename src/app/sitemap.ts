import { MetadataRoute } from 'next';
import { SITE, allLivePages, fullPageUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return allLivePages.map((page) => {
    let priority = 0.6;
    if (page.type === 'money') {
      priority = page.n === 1 ? 1.0 : 0.9;
    } else if (page.type === 'hub') {
      priority = 0.8;
    } else if (page.type === 'utility') {
      priority = 0.4;
    }

    const changeFrequency: 'weekly' | 'monthly' =
      page.path === 'blog/' ? 'weekly' : 'monthly';

    const entry: MetadataRoute.Sitemap[number] = {
      url: fullPageUrl(page.key),
      lastModified: page.published ? new Date(page.published) : undefined,
      changeFrequency,
      priority,
    };

    return entry;
  });
}
