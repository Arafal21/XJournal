export interface User {
	_id: string;
	email: string;
	firstName: string;
	lastName: string;
	username?: string | null;
	role: string;
	lastLogin: string;
	phoneNumber: string;
}

export interface UserInstanceProps {
	user: User;
}

export interface UsersListProps {
	users: User[];
}

export type UserType = 'teacher' | 'parentAndStudent' | 'parent' | 'student';

export interface TeacherFormFields {
	teacherFirstName: string;
	teacherLastName: string;
	teacherEmail: string;
	teacherPhone: string;
	teacherPassword: string;
}

export interface ParentFormFields {
	parentFirstName: string;
	parentLastName: string;
	parentEmail: string;
	parentPhone: string;
	parentPassword: string;
}

export interface StudentFormFields {
	studentFirstName: string;
	studentLastName: string;
	studentEmail: string;
	studentPhone: string;
	studentPassword: string;
}
export interface FormState {
	userType: UserType;
	teacherFirstName: string;
	teacherLastName: string;
	teacherEmail: string;
	teacherPhone: string;
	teacherPassword: string;
	parentFirstName: string;
	parentLastName: string;
	parentEmail: string;
	parentPhone: string;
	parentPassword: string;
	studentFirstName: string;
	studentLastName: string;
	studentEmail: string;
	studentPhone: string;
	studentPassword: string;
}
export interface TeacherFormFieldsProps {
	formValues: TeacherFormFields;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isPasswordVisible: boolean;
	togglePasswordVisibility: () => void;
	state: any;
}

export interface ParentAndStudentFormFieldsProps {
	formValues: ParentFormFields & StudentFormFields;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isPasswordVisible: boolean;
	togglePasswordVisibility: () => void;
	state: any;
}

export interface TeacherData {
	subject: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
}

export interface ParentAndStudentData {
	userType: 'parentAndStudent';
	parent: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		password: string;
	};
	student: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		password: string;
		class: string;
	};
}

export interface Pagination {
	page: number;
	resultsCount: number;
}

export interface AdminUsersData {
	all: User[];
	teachers: User[];
	studentsAndParents: User[];
}

export interface FetchAllUsersResponse {
	data: AdminUsersData;
	pagination: Pagination;
}

export interface ModalAddNewUserAdminProps {
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AdminFormErrors {
	teacherFirstNameError: boolean;
	teacherLastNameError: boolean;
	teacherEmailError: boolean;
	teacherPhoneError: boolean;
	teacherPasswordError: boolean;
	parentFirstNameError: boolean;
	parentLastNameError: boolean;
	parentEmailError: boolean;
	parentPhoneError: boolean;
	parentPasswordError: boolean;
	studentFirstNameError: boolean;
	studentLastNameError: boolean;
	studentEmailError: boolean;
	studentPhoneError: boolean;
	studentPasswordError: boolean;
	formError: boolean;
}
