import { test, expect } from '@playwright/test';

const teacherEmail = process.env.TESTS_TEACHER_EMAIL;
const teacherPassword = process.env.TESTS_TEACHER_PASSWORD;

test('should login a teacher', async ({ page }) => {
	await page.goto('http://localhost:5173/login');
	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).click();

	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).fill(teacherEmail);
	await page.getByRole('textbox', { name: '123ethan456' }).click();
	await page.getByRole('textbox', { name: '123ethan456' }).fill(teacherPassword);
	
	await page.getByRole('button', { name: 'Log in' }).click();
	await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});