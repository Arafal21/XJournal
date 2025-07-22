import { test, expect } from '@playwright/test';

const principalEmail = process.env.NEXT_PUBLIC_TESTS_PRINCIPAL_EMAIL;
const principalPassword = process.env.NEXT_PUBLIC_TESTS_PRINCIPAL_PASSWORD;

test('should create, edit and delete announcements', async ({ page }) => {
	await page.goto('http://localhost:5173/login');
	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).click();

	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).fill(principalEmail);
	await page.getByRole('textbox', { name: '123ethan456' }).click();
	await page.getByRole('textbox', { name: '123ethan456' }).fill(principalPassword);

	await page.getByRole('button', { name: 'Log in' }).click();

	await page.getByRole('button', { name: 'Add new announcement button' }).click();
	await page.getByRole('textbox', { name: 'What would you like to post?' }).nth(2).click();
	await page.getByRole('textbox', { name: 'What would you like to post?' }).nth(2).fill('new announcement');
	await page.getByRole('button', { name: 'POST' }).nth(4).click();
	await expect(page.getByText('new announcement')).toBeVisible();
	await page.getByRole('button', { name: 'Edit a post' }).nth(2).click();
	await page.locator('textarea').filter({ hasText: 'new announcement' }).click();
	await page.locator('textarea').filter({ hasText: 'new announcement' }).fill('edited announcement!!');
	await page.getByRole('button', { name: 'SAVE' }).click();
	await expect(page.getByText('edited announcement!!')).toBeVisible();
	await page.getByRole('button', { name: 'Delete button' }).nth(2).click();
});
