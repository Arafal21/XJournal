export const envMapping: Record<string, { email: string; password: string }> = {
	principal: {
		email: process.env.NEXT_PUBLIC_TESTS_PRINCIPAL_EMAIL ?? '',
		password: process.env.NEXT_PUBLIC_TESTS_PRINCIPAL_PASSWORD ?? '',
	},
	teacher: {
		email: process.env.NEXT_PUBLIC_TESTS_TEACHER_EMAIL ?? '',
		password: process.env.NEXT_PUBLIC_TESTS_TEACHER_PASSWORD ?? '',
	},
	parent: {
		email: process.env.NEXT_PUBLIC_TESTS_PARENT_EMAIL ?? '',
		password: process.env.NEXT_PUBLIC_TESTS_PARENT_PASSWORD ?? '',
	},
	student: {
		email: process.env.NEXT_PUBLIC_TESTS_STUDENT_EMAIL ?? '',
		password: process.env.NEXT_PUBLIC_TESTS_STUDENT_PASSWORD ?? '',
	},
}