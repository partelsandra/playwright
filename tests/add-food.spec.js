// add-food.spec.js
const { test, expect } = require('@playwright/test');

test('Lisage toidu test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/calorytracker/index.html');

  // Sisesta toidu andmed vormi
  await page.fill('#item-name', 'Avokaado');
  await page.fill('#item-calories', '200');
  await page.click('.add-btn');

  // Oodake, et esimene toit lisatakse nimega "Avokaado"
  const addedItemName = await page.textContent('.collection-item:first-child strong');
  expect(addedItemName).toBe('Avokaado');
});