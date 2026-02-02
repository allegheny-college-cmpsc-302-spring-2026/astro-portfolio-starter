import { test, expect } from '@playwright/test';

if(!process.env.BASE_URL) {
  // When not running on Github Actions, use localhost
  process.env.BASE_URL = "http://localhost:4321"
}

test('has title', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await expect(page).not.toHaveTitle(/Astro/);
});

test('has h1', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  await expect(page.getByRole('heading', { name: 'Astro', level: 1 })).not.toBeVisible();
});

test('has nav', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
});

test('has and follows links', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  await page.getByRole('link', { name: /home/i}).click();
  await page.getByRole('link', { name: /about/i}).click();
});

test('has footer', async ({page}) => {
  await page.goto(process.env.BASE_URL);
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
});