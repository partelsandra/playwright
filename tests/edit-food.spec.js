const { test, expect } = require('@playwright/test');

test('Uuenda toitaine nime test', async ({ page }) => {
  // Assume the page is already opened and contains some food items

  // Wait for the total calories to be present
  await page.waitForSelector('.total-calories');

  // Get the initial total calories
  const initialTotalCalories = await page.textContent('.total-calories');

  // Get the initial nutrient name of the first food item
  await page.waitForSelector('.collection-item:first-child strong');
  const initialNutrientName = await page.textContent('.collection-item:first-child strong');

  // Update the nutrient name of the first food item
  await page.fill('#item-name', 'New Nutrient Name');
  await page.click('.update-btn');

  // Wait for the update to take effect
  await page.waitForTimeout(1000); // Adjust the timeout as needed

  // Get the updated nutrient name of the first food item
  await page.waitForSelector('.collection-item:first-child strong');
  const updatedNutrientName = await page.textContent('.collection-item:first-child strong');

  // Check if the total calories and the first item's nutrient name have been updated
  await page.waitForSelector('.total-calories');
  const updatedTotalCalories = await page.textContent('.total-calories');
  expect(updatedTotalCalories).toBe(initialTotalCalories); // Assuming the total calories don't change
  expect(updatedNutrientName).toBe('New Nutrient Name');
});
