import Parser from 'rss-parser';

export type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
};

function toDateLabel(pubDate?: string) {
  if (!pubDate) return '';
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
}

function normalizeItems(items: any[]): FeedItem[] {
  return (items || [])
    .map((it) => ({
      title: String(it?.title ?? '').trim(),
      link: String(it?.link ?? '').trim(),
      pubDate: toDateLabel(it?.pubDate),
    }))
    .filter((it) => it.title && it.link);
}

async function tryParse(url: string): Promise<FeedItem[] | null> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(url);
    return normalizeItems(feed.items as any);
  } catch {
    return null;
  }
}

/**
 * Fetch posts from Substack.
 *
 * Provide either:
 * - publicationUrl: https://yourpub.substack.com
 * - handle: moreblood (from https://substack.com/@moreblood)
 */
export async function fetchSubstackPosts(params: {
  publicationUrl?: string;
  handle?: string;
  limit?: number;
}) {
  const limit = params.limit ?? 12;
  const candidates: string[] = [];

  if (params.publicationUrl) {
    candidates.push(params.publicationUrl.replace(/\/$/, '') + '/feed');
  }

  if (params.handle) {
    // Some Substack profiles aren’t real RSS feeds, but we’ll try common patterns.
    candidates.push(`https://${params.handle}.substack.com/feed`);
    candidates.push(`https://substack.com/@${params.handle}/feed`);
    candidates.push(`https://substack.com/@${params.handle}/rss`);
  }

  for (const url of candidates) {
    const items = await tryParse(url);
    if (items && items.length) return items.slice(0, limit);
  }

  return [] as FeedItem[];
}
