import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://shakawear-staging-wt-validate-cron-14252838.dev.odoo.com/web/login"
  );
  await page.getByPlaceholder("Email").click();
  await page.getByPlaceholder("Email").fill("anthony@shakawear.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("123");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.getByRole("option", { name: "Warehouse Transfer" }).click();
  await page.getByRole("button", { name: "Create" }).click();
  await page.click('[title="Edit record"]');
  await page.getByLabel("Operation").click();
  await page.locator("#ui-id-13").click();

  const sourceLocationInput = page.getByLabel("Source Location").nth(0);
  await sourceLocationInput.fill("SHO/Stock/Open/Rack_1/Level_A/Bay_1/Bin_5");
  await page.click('text="SHO/Stock/Open/Rack_1/Level_A/Bay_1/Bin_5"');

  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "Assign To Me" }).click();
  await page.getByRole("button", { name: "Load Products" }).click();
  await page.getByRole("button", { name: "VALIDATE" }).click();
  await page.getByRole("button", { name: "Ok" }).click();
});
