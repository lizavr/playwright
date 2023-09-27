import { test, expect } from '@playwright/test';

const EMAIL = 'pwpw81908@gmail.com';
const PASSWORD = 'playWtest12q';

test('login flow', async ({ page }) => {
  await page.goto('https://www.google.com/intl/en/gmail/about/');

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

  await page.screenshot({ path: 'screenshots/screenshot1.png' });

  await expect(nextBtn).toBeVisible();
});
