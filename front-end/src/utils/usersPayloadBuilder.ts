import type { User, UserType } from '../types/principalPanelProps';

interface UsersPayloadBuilderProps {
	formValues: any;
	userType: UserType;
	selectedUser: User | null;
	selectedSubject: string;
	selectedClass: string;
}

export function usersPayloadBuilder({
	formValues,
	userType,
	selectedUser,
	selectedSubject,
	selectedClass,
}: UsersPayloadBuilderProps) {
	switch (userType) {
		case 'teacher':
			// create & edit teacher
			return buildTeacher();
		case 'parent':
			//  parent editing only
			return buildParent();
		case 'student':
			// student editing only
			return buildStudent();
		case 'parentAndStudent':
			// create parent&student only
			return buildParentAndStudent();
	}

	function buildTeacher() {
		const base = {
			firstName: formValues.teacherFirstName,
			lastName: formValues.teacherLastName,
			email: formValues.teacherEmail,
			phoneNumber: formValues.teacherPhone,
			password: formValues.teacherPassword,
		};
		return selectedUser
			? // editing existing teacher
			  { ...base, profile: { subject: selectedSubject }, role: 'teacher' }
			: // creating new teacher
			  { ...base, subject: selectedSubject, role: 'teacher' };
	}

	function buildParent() {
		return {
			firstName: formValues.parentFirstName,
			lastName: formValues.parentLastName,
			email: formValues.parentEmail,
			phoneNumber: formValues.parentPhone,
			password: formValues.parentPassword,
		};
	}

	function buildStudent() {
		const base = {
			firstName: formValues.studentFirstName,
			lastName: formValues.studentLastName,
			email: formValues.studentEmail,
			phoneNumber: formValues.studentPhone,
			password: formValues.studentPassword,
		};
		return selectedUser
			? // editing existing student
			  { ...base, profile: { class: selectedClass }, role: 'student' }
			: // creating new student
			  { ...base, class: selectedClass };
	}

	function buildParentAndStudent() {
		const parent = {
			firstName: formValues.parentFirstName,
			lastName: formValues.parentLastName,
			email: formValues.parentEmail,
			phoneNumber: formValues.parentPhone,
			password: formValues.parentPassword,
		};
		const student = {
			firstName: formValues.studentFirstName,
			lastName: formValues.studentLastName,
			email: formValues.studentEmail,
			phoneNumber: formValues.studentPhone,
			password: formValues.studentPassword,
		};
		return selectedUser
			? // creating new parent
			  { parent, student: { profile: { class: selectedClass } } }
			: // editing existing parent
			  { parent, student: { ...student, class: selectedClass } };
	}
}
