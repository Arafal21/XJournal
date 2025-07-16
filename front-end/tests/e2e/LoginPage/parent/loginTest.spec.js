import { test, expect } from '@playwright/test';

const parentEmail = process.env.TESTS_PARENT_EMAIL
const parentPassword = process.env.TESTS_PARENT_PASSWORD

test('should login a parent', async ({ page }) => {
	await page.goto('http://localhost:5173/login');
	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).click();

	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).fill(parentEmail);
	await page.getByRole('textbox', { name: '123ethan456' }).click();
	await page.getByRole('textbox', { name: '123ethan456' }).fill(parentPassword);
	
	await page.getByRole('button', { name: 'Log in' }).click();
	await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});