import { test, expect } from '@playwright/test';

test('has button sign in', async ({ page }) => {
  await page.goto('https://www.google.com/intl/en/gmail/about/');
  const signInBtn = await page.locator('a:text("Sign in")');
  await page.screenshot({ path: 'screenshots/screenshot1.png' });

  // Expect a button "Sign in" exist.
  await expect(signInBtn).toBeVisible();
});
