export interface Brand {
  key: 'rigwire';
  name: string;
  tagline: string;
  description: string;
  byline: string;
  siteUrl: string;
}

export const BRAND: Brand = {
  key: 'rigwire',
  name: 'Rig Wire',
  tagline: 'Six ways to read the world',
  description:
    'Rig Wire synthesises 247 newsrooms into six reading formats — from a sixty-second pulse to a fourteen-minute report. Same world. Pick your length.',
  byline: 'Rig Wire',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
};
