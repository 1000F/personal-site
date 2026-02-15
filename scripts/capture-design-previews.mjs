import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const outDir = path.resolve('design-previews');
await fs.mkdir(outDir, { recursive: true });

const baseURL = process.env.BASE_URL || 'http://localhost:4321';

const shots = [
  { route: '/drive', file: 'drive.jpg' },
  { route: '/brutal', file: 'brutal.jpg' },
  { route: '/miami', file: 'miami.jpg' },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

for (const s of shots) {
  const url = baseURL + s.route;
  await page.goto(url, { waitUntil: 'networkidle' });
  // Slight delay to allow fonts/rendering.
  await page.waitForTimeout(250);
  await page.screenshot({
    path: path.join(outDir, s.file),
    fullPage: true,
    type: 'jpeg',
    quality: 86,
  });
  // eslint-disable-next-line no-console
  console.log('wrote', path.join(outDir, s.file));
}

await browser.close();
