const { test, expect } = require('@playwright/test');

test('Uuenda kaloreid test', async ({ page }) => {
  // Navigate to the page
  await page.goto('http://127.0.0.1:5500/calorytracker/index.html');

  // Wait for the DOM content to be loaded
  await page.waitForLoadState('domcontentloaded');

  // Get the initial total calories
  const initialTotalCalories = await page.textContent('.total-calories');

  // Click the edit button of the first food item
  await page.click('.edit-item');

  // Wait for the form to be visible
  await page.waitForSelector('#item-calories');

  // Update calories to 250
  await page.fill('#item-calories', '250');

  // Click the update button
  await page.click('.update-btn');

  // Wait for the item to be updated
  await page.waitForSelector('.collection-item em:has-text("250 Calories")');

  // Get the updated total calories
  const updatedTotalCalories = await page.textContent('.total-calories');

  // Check if the total calories have been updated correctly
  expect(updatedTotalCalories).toBe(initialTotalCalories);
});
