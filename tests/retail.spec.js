import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {

  await page.goto("https://shakawear.com/");

  await page.click('svg[class="icon-theme icon-theme-stroke icon-set-classic-search"]');

  await page.getByRole('searchbox', { name: 'Search our store' }).fill('shirt');
  await page.click('button:has-text("Search for “shirt”")');

  await page.click('a:has-text("7.5 oz Max Heavyweight Tie Dye T-Shirt")');

  await page.click('label:has-text("M")');
  await page.click('label:has-text("Classic Rainbow")');

  await page.click('button:text("Add to Cart")');
  await page.click('button:text("Check Out")');

  await page.click('a:has-text("Log in")');
  await page.fill('input[placeholder="Email"]', "shakira.d@ksolves.com");
  await page.fill('input[placeholder="Password"]', "1234567890");
  await page.click('button:text("Sign in")');
  await page.click('a[class="header__logo__link"]')

});
