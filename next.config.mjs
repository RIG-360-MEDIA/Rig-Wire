import { fileURLToPath } from 'node:url';

// Fonts are vendored in fonts/google so builds never depend on a live Google Fonts fetch.
// fileURLToPath, not URL.pathname: on Windows .pathname gives "/F:/Rig%20Wire/..." which require() can't open.
process.env.NEXT_FONT_GOOGLE_MOCKED_RESPONSES ??= fileURLToPath(new URL('./fonts/google/mock.cjs', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'loremflickr.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
