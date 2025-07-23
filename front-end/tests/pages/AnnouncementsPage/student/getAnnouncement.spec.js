// import { test, expect } from '@playwright/test';

// const studentEmail = process.env.NEXT_PUBLIC_TESTS_STUDENT_EMAIL;
// const studentPassword = process.env.NEXT_PUBLIC_TESTS_STUDENT_PASSWORD;

// test('should display specific announcements', async ({ page }) => {
// 	await page.goto('http://localhost:5173/login');
// 	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).click();

// 	await page.getByRole('textbox', { name: 'ethanmiller@xjournal.com' }).fill(studentEmail);
// 	await page.getByRole('textbox', { name: '123ethan456' }).click();
// 	await page.getByRole('textbox', { name: '123ethan456' }).fill(studentPassword);

// 	await page.getByRole('button', { name: 'Log in' }).click();

// 	await expect(
// 		page
// 			.getByRole('main')
// 			.locator('div')
// 			.filter({ hasText: 'Jason CarterPrincipal05/19/2025Dear Students and Parents, We are delighted to' })
// 			.first(),
// 	).toBeVisible();
// });
