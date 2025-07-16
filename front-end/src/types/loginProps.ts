export interface LoginFormState {
	email: string;
	password: string;
	emailError?: boolean;
	passwordError?: boolean;
	formError?: boolean;
}