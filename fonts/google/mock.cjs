// Google Fonts CSS + files vendored from fonts.googleapis.com (same User-Agent next/font uses), fed to next/font via
// NEXT_FONT_GOOGLE_MOCKED_RESPONSES so builds don't depend on what Google answers Vercel's build machines.
const fs = require('node:fs');
const path = require('node:path');
const map = require('./responses.json');
// next/font reads a mocked font file from disk only when its URL starts with '/'; any other URL becomes the
// file's literal bytes. A Windows dir ("F:\...") doesn't, so drop the drive letter and use forward slashes —
// Node resolves "/Rig Wire/..." against the current drive, which is the repo's own.
const fontDir = process.platform === 'win32' ? __dirname.replace(/^[A-Za-z]:/, '').replaceAll('\\', '/') : __dirname;
module.exports = Object.fromEntries(Object.entries(map).map(([url, file]) => [
  url,
  fs.readFileSync(path.join(__dirname, file), 'utf8').replaceAll('url(./', `url(${fontDir}/`),
]));
