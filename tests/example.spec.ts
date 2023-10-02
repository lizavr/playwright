import { test, expect } from '@playwright/test';
import { Guid } from 'guid-typescript';

const EMAIL = 'pwpw81908@gmail.com';
const PASSWORD = 'playWtest12q';
const MAINGMAIL = 'https://www.google.com/intl/en/gmail/about/';

test('send email flow', async ({ page }) => {
  await page.goto(MAINGMAIL);

  const signInBtn = await page.locator('a:text("Sign in")');
  await signInBtn.click();

  await page.waitForSelector('input[type = "email"]');
  const emailInput = await page.locator('input[type = "email"]');

  await emailInput.focus();
  await emailInput.fill(EMAIL);

  const nextBtn = await page.locator(':text("Next")');
  await nextBtn.click();

  await page.waitForSelector('input[type = "password"]');
  const passwordInput = await page.locator('input[type = "password"]');

  await passwordInput.focus();
  await passwordInput.fill(PASSWORD);

  await nextBtn.click();
  await page.waitForSelector(':text("Compose")');
  await page.getByText('Compose').click();

  const msg = Guid.create();
  const title = Guid.create();

  await page.waitForSelector(':text("New Message")');
  await page.keyboard.type(EMAIL);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Tab');
  await page.keyboard.type(`${title.toString()}`);
  await page.keyboard.press('Tab');
  await page.keyboard.type(`${msg.toString()}`);
  await page.keyboard.press('Control+Enter');

  const titleWithMsg = `:text("${title.toString()} - ${msg.toString()}")`;
  await page.waitForSelector(titleWithMsg);
  await page.click(titleWithMsg);

  const message = await page.getByText(msg.toString(), {exact: true});
  await page.screenshot({ path: 'screenshots/screenshot1.png' });
  await expect(message).toBeVisible();
});
