import { test, expect, chromium } from '@playwright/test';
import { Guid } from 'guid-typescript';

enum usingConstants {
  EMAIL_1 = 'pwpw81908@gmail.com',
  PASSWORD_1 = 'playWtest12q',
  NAME_1 = 'pw pw',
  EMAIL_2 = 'pwpw4554@gmail.com',
  PASSWORD_2 = 'aA234aA123',
  MAINGMAIL = 'https://www.google.com/intl/en/gmail/about/',
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

test('send email to other acc', async () => {
  const browser = await chromium.launch({ headless: false, channel: 'msedge' });

  const login = async (page, email, password) => {
    await page.goto(usingConstants.MAINGMAIL);
    await page.locator('a:text("Sign in")').click();
    await page.waitForSelector('input[type = "email"]');
    await page.locator('input[type = "email"]').fill(email);
    const nextBtn = await page.locator(':text("Next")');
    await nextBtn.click();
    await page.waitForSelector('input[type = "password"]');
    await page.locator('input[type = "password"]').fill(password);
    await nextBtn.click();
    await page_1.waitForSelector(':text("Compose")');
  };

  const context_1 = await browser.newContext();
  const page_1 = await context_1.newPage();

  await login(page_1, usingConstants.EMAIL_1, usingConstants.PASSWORD_1);

  await page_1.getByText('Compose').click();

  const msg = Guid.create().toString().slice(0, 16);
  const title = Guid.create().toString().slice(0, 16);

  await page_1.waitForSelector(':text("New Message")');
  await page_1.keyboard.type(usingConstants.EMAIL_2);
  await page_1.keyboard.press('Enter');
  await page_1.keyboard.press('Tab');
  await page_1.keyboard.type(`${title.toString()}`);
  await page_1.keyboard.press('Tab');
  await page_1.keyboard.type(`${msg.toString()}`);
  await page_1.keyboard.press('Control+Enter');

  const context_2 = await browser.newContext();
  const page_2 = await context_2.newPage();

  await login(page_2, usingConstants.EMAIL_2, usingConstants.PASSWORD_2);

  const titleWithMsg = `:text("${title.toString()} - ${msg.toString()}")`;
  // page_2.getByText(titleWithMsg);
  await page_2.click(titleWithMsg);

  const message = await page_2.getByText(msg.toString(), { exact: true });
  await page_2.screenshot({ path: 'screenshots/screenshot1.png' });
  await expect(message).toBeVisible();
});
