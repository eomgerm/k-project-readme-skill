import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { chromium } from "playwright";

const output = resolve(process.argv[2] ?? "recordings/weather-badge-demo.webm");
await mkdir(dirname(output), { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: { dir: dirname(output), size: { width: 1280, height: 720 } },
});
const page = await context.newPage();

await page.goto("https://weather-badge.vercel.app/", { waitUntil: "domcontentloaded" });
await page.getByPlaceholder("Seoul (Default)").waitFor();
// ponytail: headless referrer rejects the legacy Maps key; remove this line when the key allows automation.
await page.addStyleTag({ content: "main .h-80 { display: none !important; }" });
await page.waitForTimeout(1200);

const city = page.getByPlaceholder("Seoul (Default)");
await city.pressSequentially("Busan", { delay: 110 });
await page.locator("li").first().waitFor();
await page.waitForTimeout(500);
await page.locator("li").first().click();
await page.waitForTimeout(800);

const size = page.getByPlaceholder("150 (Default)");
await size.fill("220");
await page.waitForTimeout(900);

const copy = page.getByText("Copy!", { exact: true });
await copy.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await copy.click();
await page.getByText("SVG URL", { exact: true }).waitFor();
await page.waitForTimeout(1600);

const video = page.video();
await context.close();
if (video) await video.saveAs(output);
await browser.close();

console.log(`Saved ${output}`);
