import type { MetadataRoute } from 'next';

import { BRAND } from '@/lib/brand';

const PATHS = ['/', '/today', '/minute', '/digest', '/all-sides', '/long-view', '/queue'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${BRAND.siteUrl}${p}` }));
}
