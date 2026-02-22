import { chromium } from 'playwright';
import { createCursor } from 'ghost-cursor';

(async () => {
    console.log('Starting Playwright...');
    const browser = await chromium.launch({
        headless: true,
        args: [
            '--window-size=1920,1080',
            '--force-device-scale-factor=1',
            '--hide-scrollbars'
        ],
    });

    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        deviceScaleFactor: 1,
        recordVideo: {
            dir: 'videos/',
            size: { width: 1920, height: 1080 },
        }
    });

    const page = await context.newPage();
    page.browser = () => context.browser();

    const cursor = createCursor(page);

    console.log('Navigating to Home...');
    await page.goto('http://localhost:3000', { waitUntil: 'load' });

    console.log('Waiting for Preloader...');
    await page.waitForTimeout(2500); // Shorter preloader wait

    const smoothScroll = async (distancePx, durationMs) => {
        await page.evaluate(async ({ distancePx, durationMs }) => {
            await new Promise((resolve) => {
                let start = null;
                const initialScrollY = window.scrollY;

                const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    const percent = Math.min(progress / durationMs, 1);
                    const easedPercent = easeInOutQuad(percent);

                    window.scrollTo(0, initialScrollY + (distancePx * easedPercent));

                    if (progress < durationMs) {
                        window.requestAnimationFrame(step);
                    } else {
                        resolve();
                    }
                };
                window.requestAnimationFrame(step);
            });
        }, { distancePx, durationMs });
    };

    // Hero Section
    await cursor.moveTo({ x: 960, y: 300 });
    await page.waitForTimeout(300);
    await cursor.moveTo({ x: 1200, y: 150 });

    // Quick scroll down home page
    await smoothScroll(1200, 1500);
    await page.waitForTimeout(300);
    await cursor.moveTo({ x: 500, y: 500 });
    await smoothScroll(1200, 1500);
    await page.waitForTimeout(300);
    await cursor.moveTo({ x: 1400, y: 600 });

    // Projects Page
    console.log('Navigating to Projects...');
    await page.goto('http://localhost:3000/projects', { waitUntil: 'load' });
    await page.waitForTimeout(800);
    await cursor.moveTo({ x: 400, y: 300 });
    await smoothScroll(1500, 2000);
    await page.waitForTimeout(300);
    await cursor.moveTo({ x: 1000, y: 500 });
    await smoothScroll(-1500, 1500); // scroll back up
    await page.waitForTimeout(300);

    // Studio Page 
    console.log('Navigating to Studio...');
    await page.goto('http://localhost:3000/studio', { waitUntil: 'load' });
    await page.waitForTimeout(800);
    await cursor.moveTo({ x: 800, y: 400 });
    await smoothScroll(1000, 1500);
    await page.waitForTimeout(300);

    // Skills
    console.log('Navigating to Skills...');
    await page.goto('http://localhost:3000/skills', { waitUntil: 'load' });
    await page.waitForTimeout(800);
    await cursor.moveTo({ x: 600, y: 300 });
    await smoothScroll(800, 1200);
    await page.waitForTimeout(300);

    // About
    console.log('Navigating to About...');
    await page.goto('http://localhost:3000/about', { waitUntil: 'load' });
    await page.waitForTimeout(800);
    await cursor.moveTo({ x: 1200, y: 300 });
    await smoothScroll(800, 1200);
    await page.waitForTimeout(300);

    // Back to Home Responsive
    console.log('Navigating back to Home...');
    await page.goto('http://localhost:3000/', { waitUntil: 'load' });
    await page.waitForTimeout(800);

    console.log('Tablet View...');
    await page.setViewportSize({ width: 768, height: 1024 });
    await cursor.moveTo({ x: 384, y: 512 });
    await page.waitForTimeout(500);
    await smoothScroll(1500, 1500);

    console.log('Mobile View...');
    await page.setViewportSize({ width: 375, height: 812 });
    await cursor.moveTo({ x: 187, y: 406 });
    await page.waitForTimeout(500);
    await smoothScroll(-1500, 1500);

    console.log('Desktop Final Shot...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => window.scrollTo(0, 0));
    await cursor.moveTo({ x: 960, y: 540 });
    await page.waitForTimeout(1000);

    await browser.close();
    console.log('Recording complete. Video saved to videos/ directory.');
})();
