export const defaultTeacherValues = {
	teacherFirstName: '',
	teacherLastName: '',
	teacherEmail: '',
	teacherPhone: '',
	teacherPassword: '',
};

export const defaultParentValues = {
	parentFirstName: '',
	parentLastName: '',
	parentEmail: '',
	parentPhone: '',
	parentPassword: '',
};

export const defaultStudentValues = {
	studentFirstName: '',
	studentLastName: '',
	studentEmail: '',
	studentPhone: '',
	studentPassword: '',
};

export const defaultUsersFormValues = {
	...defaultTeacherValues,
	...defaultParentValues,
	...defaultStudentValues,
};

export const initialFormErrors = {
	formError: false,
	teacherFirstNameError: false,
	teacherLastNameError: false,
	teacherEmailError: false,
	teacherPhoneError: false,
	teacherPasswordError: false,
	parentFirstNameError: false,
	parentLastNameError: false,
	parentEmailError: false,
	parentPhoneError: false,
	parentPasswordError: false,
	studentFirstNameError: false,
	studentLastNameError: false,
	studentEmailError: false,
	studentPhoneError: false,
	studentPasswordError: false,
};
