import { AdminFormErrors, UserType } from '../types/principalPanelProps';
import { initialFormErrors } from '../constants/adminFormConstans';

export function adminFormValidation(values: Record<string, string>, userType: UserType): AdminFormErrors {
	const errors: AdminFormErrors = {
		...initialFormErrors,
		formError: false,
	};

	const min = (field: string, len: number, errorKey: keyof AdminFormErrors) => {
		if ((values[field] || '').trim().length < len) {
			errors[errorKey] = true;
			errors.formError = true;
		}
	};

	if (userType === 'teacher') {
		min('teacherFirstName', 2, 'teacherFirstNameError');
		min('teacherLastName', 2, 'teacherLastNameError');
		min('teacherEmail', 8, 'teacherEmailError');
		min('teacherPhone', 8, 'teacherPhoneError');
		min('teacherPassword', 8, 'teacherPasswordError');
	}

	if (userType === 'parent' || userType === 'parentAndStudent') {
		min('parentFirstName', 2, 'parentFirstNameError');
		min('parentLastName', 2, 'parentLastNameError');
		min('parentEmail', 8, 'parentEmailError');
		min('parentPhone', 8, 'parentPhoneError');
		min('parentPassword', 8, 'parentPasswordError');
	}

	if (userType === 'student' || userType === 'parentAndStudent') {
		min('studentFirstName', 2, 'studentFirstNameError');
		min('studentLastName', 2, 'studentLastNameError');
		min('studentEmail', 8, 'studentEmailError');
		min('studentPhone', 8, 'studentPhoneError');
		min('studentPassword', 8, 'studentPasswordError');
	}

	return errors;
}
