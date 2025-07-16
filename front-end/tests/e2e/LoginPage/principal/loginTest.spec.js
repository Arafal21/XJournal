import { test, expect } from '@playwright/test';

const principalEmail = process.env.TESTS_PRINCIPAL_EMAIL;
const principalPassword = process.env.TESTS_PRINCIPAL_PASSWORD;

test('should login a principal', async ({ page }) => {
	await page.goto('http://localhost:5173/login');
	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).click();

	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).fill(principalEmail);
	await page.getByRole('textbox', { name: '123ethan456' }).click();
	await page.getByRole('textbox', { name: '123ethan456' }).fill(principalPassword);

	await page.getByRole('button', { name: 'Log in' }).click();
	await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});
