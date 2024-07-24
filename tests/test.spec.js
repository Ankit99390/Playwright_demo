import { test, expect } from "@playwright/test";
test("test", async ({ page }) => {

  await page.goto("https://shakawear-staging-wt-validate-cron-14252838.dev.odoo.com/web/login");

  await page.fill('input[placeholder="Email"]', "anthony@shakawear.com");
  await page.fill('input[placeholder="Password"]', "123");
  await page.click('button:text("Log in")');

  await page.click('a[data-menu-xmlid="sale.sale_menu_root"]');
  await page.click('button:text("Create")');

  await page.fill('input[class="o_input ui-autocomplete-input"]',"ALPHABRODER");
  await page.click('text="ALPHABRODER"');

  await page.click('a:has-text("Add a product")');
  await page.fill('div[name="product_id"] input[type="text"]', "302001XL");
  await page.click('text="[302001XL] Classic Deep V-Neck White Xl"');

await page.getByRole('button', { name: 'Save' }).click();
await page.getByRole('button', { name: 'Confirm' }).click();

});