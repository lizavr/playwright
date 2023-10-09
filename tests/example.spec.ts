import { test, expect, chromium, firefox, Browser, Page } from '@playwright/test';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import { Guid } from 'guid-typescript';
import ssim from "ssim.js";

enum usingConstants {
  EMAIL_1 = 'pwpw81908@gmail.com',
  PASSWORD_1 = 'playWtest12q',
  NAME_1 = 'pw pw',
  EMAIL_2 = 'pwpw4554@gmail.com',
  PASSWORD_2 = 'aA234aA123',
  MAINGMAIL = 'https://www.google.com/intl/en/gmail/about/',
  STORE = 'https://rus-buket.ru/cvety',
}

// test('send email flow', async ({ page }) => {
//   await page.goto(usingConstants.MAINGMAIL);

//   await page.locator('a:text("Sign in")').click();

//   await page.waitForSelector('input[type = "email"]');
//   await page.locator('input[type = "email"]').fill(usingConstants.EMAIL);

//   const nextBtn = await page.locator(':text("Next")');
//   await nextBtn.click();

//   await page.waitForSelector('input[type = "password"]');
//   await page.locator('input[type = "password"]').fill(usingConstants.PASSWORD);

//   await nextBtn.click();

//   await page.waitForSelector(':text("Compose")');
//   await page.getByText('Compose').click();

//   const msg = Guid.create().toString().slice(0, 16);
//   const title = Guid.create().toString().slice(0, 16);

//   await page.waitForSelector(':text("New Message")');
//   await page.keyboard.type(usingConstants.EMAIL);
//   await page.keyboard.press('Enter');
//   await page.keyboard.press('Tab');
//   await page.keyboard.type(`${title.toString()}`);
//   await page.keyboard.press('Tab');
//   await page.keyboard.type(`${msg.toString()}`);
//   await page.keyboard.press('Control+Enter');

//   const titleWithMsg = `:text("${title.toString()} - ${msg.toString()}")`;
//   page.getByText(titleWithMsg);
//   await page.click(titleWithMsg);

//   const message = await page.getByText(msg.toString(), { exact: true });
//   await page.screenshot({ path: 'screenshots/screenshot1.png' });
//   await expect(message).toBeVisible();
// });

// test('send email to other acc', async () => {
//   const browser = await chromium.launch({ headless: false, channel: 'msedge' });

//   const login = async (page, email, password) => {
//     await page.goto(usingConstants.MAINGMAIL);
//     await page.locator('a:text("Sign in")').click();
//     await page.waitForSelector('input[type = "email"]');
//     await page_1.waitForTimeout(500);
//     await page.locator('input[type = "email"]').fill(email);
//     await page_1.waitForTimeout(500);
//     const nextBtn = await page.locator(':text("Next")');
//     await nextBtn.click();
//     await page.waitForSelector('input[type = "password"]');
//     await page_1.waitForTimeout(500);
//     await page.locator('input[type = "password"]').fill(password);
//     await page_1.waitForTimeout(500);
//     await nextBtn.click();
//     await page_1.waitForSelector(':text("Compose")');
//   };

//   const context_1 = await browser.newContext();
//   const page_1 = await context_1.newPage();

//   await login(page_1, usingConstants.EMAIL_1, usingConstants.PASSWORD_1);

//   await page_1.getByText('Compose').click();

//   const msg = Guid.create().toString().slice(0, 16);
//   const title = Guid.create().toString().slice(0, 16);

//   await page_1.waitForSelector(':text("New Message")');
//   await page_1.waitForTimeout(500);
//   await page_1.keyboard.type(usingConstants.EMAIL_2);
//   await page_1.keyboard.press('Enter');
//   await page_1.keyboard.press('Tab');
//   await page_1.keyboard.type(`${title.toString()}`);
//   await page_1.keyboard.press('Tab');
//   await page_1.keyboard.type(`${msg.toString()}`);
//   await page_1.keyboard.press('Control+Enter');

//   const context_2 = await browser.newContext();
//   const page_2 = await context_2.newPage();

//   await login(page_2, usingConstants.EMAIL_2, usingConstants.PASSWORD_2);
//   const titleWithMsg = `:text("${title.toString()} - ${msg.toString()}")`;

//   await page_2.getByText(titleWithMsg);

//   await page_2.reload();

//   await page_2.click(titleWithMsg);

//   const message = await page_2.getByText(msg.toString(), { exact: true });
//   await page_2.screenshot({ path: 'screenshots/screenshot1.png' });
//   await expect(message).toBeVisible();
// });

// test('swiper test', async () => {
//   const browser = await chromium.launch({
//     headless: false,
//     channel: 'chrome',
//     timeout: 50000,
//   });

//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto(usingConstants.STORE);
//   await page.waitForLoadState('load');

//   const rangeEl = await page.locator('.noUi-base');
//   const boundingBoxEl = await rangeEl.boundingBox();
//   if (!boundingBoxEl) {
//     return;
//   }
//   await rangeEl.dragTo(rangeEl, {
//     force: true,
//     targetPosition: { x: boundingBoxEl.width * 0.5, y: boundingBoxEl.y },
//   });

//   const inputFrom = await page.locator('#js_rb-filter__price-from');
//   const inputValue = await inputFrom.inputValue();

//   await expect(inputValue).toEqual('10000');
// });

// test('dark scheme', async () => {
//   const browser = await chromium.launch({
//     headless: false,
//     channel: 'chrome',
//     timeout: 50000,
//   });

//   const context = await browser.newContext({
//     colorScheme: 'dark',
//   });

//   const page = await context.newPage();

//   await page.goto('https://playwright.dev/docs/intro');

//   const logo = await page.locator('.navbar__brand');
//   await page.waitForTimeout(5000);
//   await expect(logo).toHaveCSS('display', 'flex');
// });

// test('compare screen', async () => {
//   const browser = await chromium.launch({
//     headless: false,
//     channel: 'chrome',
//     timeout: 50000,
//   });

//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://playwright.dev/docs/intro');
//   const screen1 = await page.screenshot({
//     path: 'screenshots/screenshot1.png',
//   });

//   expect(screen1).toMatchSnapshot('111.png');
// });


test('compare screen', async () => {
  const browser = await firefox.launch({
    headless: false,
    channel: 'firefox',
    timeout: 50000,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://learn.javascript.ru/');
  const screen1 = await page.screenshot({
    path: 'screenshots/screenshot1.png',
  });

  expect(screen1).toMatchSnapshot('test3.png', {maxDiffPixels: 12});
});

// test('compare screen 2', async () => {
//   const browser = await firefox.launch({
//     headless: false,
//     channel: 'firefox',
//     timeout: 50000,
//   });

//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://learn.javascript.ru/');
  
//   const jestState = {
//     testPath: "some-path-to-your-test-file.ts", // This is used to determine where the snapshot file should be saved.
//     currentTestName: "Your Test Name",
//     isNot: false,
//     snapshotState: {
//       _counters: new Map(),
//       _updateSnapshot: 'new', // "none" for no updates, "all" for forced update, "new" for adding only new snapshots
//       updated: undefined,
//       added: true,
//       match: undefined,
//       key: undefined
//     },
//   };
  
//   // Extend expect:
//   expect.extend({ toMatchImageSnapshot: toMatchImageSnapshot.bind(null, jestState) });

//   const screen1 = await page.screenshot();

//   const screenshotBuffer = await page.screenshot({ encoding: 'binary' });

//   // Assuming img2 is your reference image as Uint8Array or Uint8ClampedArray
//   const { mssim, performance } = ssim(new Uint8ClampedArray(screenshotBuffer.buffer), img2);
//   //await expect(screen1).toMatchImageSnapshot({maxDiffPixels: 12});
// });

// test('compare screen', async () => {

// let browser: Browser;
// let page: Page;

// beforeAll(async () => {
//   browser = await chromium.launch();
//   page = await browser.newPage();
// });

// afterAll(async () => {
//   await browser.close();
// });

// it('сравнивает скриншоты', async () => {
//   await page.goto('https://yourwebsite.com');
//   const screenshot = await page.screenshot();

//   expect(screenshot).toMatchImageSnapshot({
//     customSnapshotsDir: './path-to-reference-screenshots',
//     customDiffDir: './path-to-diffs',
//   });
// });
// });