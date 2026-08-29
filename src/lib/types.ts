export type PageType = 'money' | 'hub' | 'article' | 'utility';
export type PageStatus = 'live' | 'next_batch' | 'backlog';

export interface HowToStep {
  name: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TocItem {
  id: string;
  text: string;
  level?: number;
}

export interface PageMeta {
  key: string;
  n?: number;
  path: string;
  published?: string | null;
  title: string;
  h1: string;
  meta: string;
  hub: string;
  type: PageType;
  prev?: string;
  next?: string;
  related?: string[];
  money?: string;
  img_alt?: string;
  howto?: HowToStep[];
  status: PageStatus;
  batch?: string;
}

export interface TopicQueue {
  metadata: {
    title: string;
    description: string;
    version: string;
    last_updated: string;
    instructions: string;
  };
  summary: {
    total_live: number;
    total_next_batch: number;
    total_backlog: number;
  };
  sections: {
    live: PageMeta[];
    next_batch: PageMeta[];
    backlog: PageMeta[];
  };
}

export interface PageContentData {
  key?: string;
  title?: string;
  description?: string;
  updated?: string | null;
  faq?: FaqItem[];
  headings?: TocItem[];
  html: string;
  [key: string]: any;
}
