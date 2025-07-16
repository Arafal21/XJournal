'use client';

import { use, useState, useEffect, useActionState } from 'react';

import { useSelectedUserAdmin } from '../contexts/SelectedUserAdminContext';
import { SelectedSubjectContext } from '../contexts/SelectedSubjectContext';
import { SelectedClassContext } from '../contexts/SelectedClassContext';
import { createUser, updateUser, deleteUser } from '../api/principalPanelApi';
import { defaultUsersFormValues, initialFormErrors } from '../constants/adminFormConstans';
import { adminFormValidation } from '../utils/adminFormValidation';
import { usersPayloadBuilder } from '../utils/usersPayloadBuilder';
import type { AdminFormErrors, UserType } from '../types/principalPanelProps';

export function useAdminModal(setIsModalVisible: (v: boolean) => void) {
	const { selectedSubject, setSelectedSubject } = use(SelectedSubjectContext);
	const { selectedClass, setSelectedClass } = use(SelectedClassContext);

	const { selectedUser, setSelectedUser } = useSelectedUserAdmin();

	const initialRole: UserType = 'teacher';
	const [userType, setUserType] = useState<UserType>(initialRole);
	const [formValues, setFormValues] = useState({ ...defaultUsersFormValues });
	const [state, formAction] = useActionState(handleSubmit, initialFormErrors);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	useEffect(() => {
		if (!selectedUser) return;
		const role = selectedUser.role.toLowerCase() as UserType;
		setUserType(role);
		const base = { ...defaultUsersFormValues, userType: role };

		switch (role) {
			case 'teacher':
				setFormValues({
					...base,
					teacherFirstName: selectedUser.firstName,
					teacherLastName: selectedUser.lastName,
					teacherEmail: selectedUser.email,
					teacherPhone: selectedUser.phoneNumber,
				});
				break;
			case 'student':
				setFormValues({
					...base,
					studentFirstName: selectedUser.firstName,
					studentLastName: selectedUser.lastName,
					studentEmail: selectedUser.email,
					studentPhone: selectedUser.phoneNumber,
				});
				break;
			case 'parent':
				setFormValues({
					...base,
					parentFirstName: selectedUser.firstName,
					parentLastName: selectedUser.lastName,
					parentEmail: selectedUser.email,
					parentPhone: selectedUser.phoneNumber,
				});
				break;
			case 'parentAndStudent':
				setFormValues(base);
				break;
		}

		if (role === 'teacher' && selectedUser.profile?.subject) {
			setSelectedSubject(selectedUser.profile.subject);
		}

		if ((role === 'student' || role === 'parentAndStudent') && selectedUser.profile?.class) {
			const classId =
				typeof selectedUser.profile.class === 'object' && '_id' in selectedUser.profile.class
					? selectedUser.profile.class._id
					: (selectedUser.profile.class as string);
			setSelectedClass(classId);
		}
	}, [selectedUser, setSelectedSubject, setSelectedClass]);

	function resetForm() {
		setFormValues({ ...defaultUsersFormValues });
		setUserType(initialRole);
		setSelectedUser(null);
	}

	async function handleSubmit(_prev: AdminFormErrors, _fd: FormData): Promise<AdminFormErrors> {
		const next = adminFormValidation(formValues, userType);
		if (next.formError) return next;

		const payload = usersPayloadBuilder({
			formValues,
			userType,
			selectedUser,
			selectedSubject,
			selectedClass,
		});

		try {
			if (selectedUser) {
				await updateUser(payload, selectedUser._id);
			} else {
				await createUser(payload, userType);
			}
			resetForm();
			setIsModalVisible(false);
			return next;
		} catch {
			return { ...next, formError: true };
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

	const onDelete = async () => {
		if (!selectedUser) return;
		try {
			await deleteUser(selectedUser._id);
			setIsModalVisible(false);
			resetForm();
		} catch {
			alert('Deletion failed. Please wait before another operation.');
		}
	};

	const onClose = () => {
		setIsModalVisible(false);
		resetForm();
	};

	const isFormValid = !adminFormValidation(formValues, userType).formError;
	const togglePassword = () => setIsPasswordVisible((v) => !v);

	return {
		selectedUser,
		userType,
		formValues,
		state,
		formAction,
		isPasswordVisible,
		isFormValid,
		handleChange,
		togglePassword,
		setUserType,
		onDelete,
		onClose,
	};
}
