// edit-food.spec.js
const { test, expect } = require('@playwright/test');

test('Uuenda kaloreid test', async ({ page }) => {
  // Assume the page is already opened and contains some food items

  // Wait for the total calories to be present
  await page.waitForSelector('.total-calories');

  // Get the initial total calories
  const initialTotalCalories = await page.textContent('.total-calories');

  // Get the initial calories of the first food item
  await page.waitForSelector('.collection-item:first-child em');
  const initialCalories = await page.textContent('.collection-item:first-child em');

  // Update the calories of the first food item
  await page.fill('#item-calories', '250');
  await page.click('.update-btn');

  // Wait for the update to take effect
  await page.waitForTimeout(1000); // Adjust the timeout as needed

  // Get the updated calories of the first food item
  await page.waitForSelector('.collection-item:first-child em');
  const updatedCalories = await page.textContent('.collection-item:first-child em');

  // Check if the total calories and the first item's calories have been updated
  await page.waitForSelector('.total-calories');
  const updatedTotalCalories = await page.textContent('.total-calories');
  expect(updatedTotalCalories).toBe(initialTotalCalories); // Assuming the total calories don't change
  expect(updatedCalories).toBe('250 Calories');
});
