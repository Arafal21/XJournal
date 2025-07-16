'use client';

import styles from './AdminActionModal.module.scss';

import { FullModalHeader } from '../../modalHeader/FullModalHeader/FullModalHeader';
import { useAdminModal } from '../../../hooks/useAdminModal';
import { AdminModalForm } from '../../../components/AdminModalForm/AdminModalForm';

interface AdminActionModalProps {
	setIsModalVisible: (v: boolean) => void;
}

export function AdminActionModal({ setIsModalVisible }: AdminActionModalProps) {
	const {
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
	} = useAdminModal(setIsModalVisible);

	return (
		<div className={styles.modalContent}>
			<FullModalHeader onClose={onClose} onDelete={onDelete} hasSelected={!!selectedUser}>
				{selectedUser ? 'Edit User' : 'New user'}
			</FullModalHeader>

			<AdminModalForm
				selectedUser={selectedUser}
				userType={userType}
				formValues={formValues}
				state={state}
				formAction={formAction}
				isPasswordVisible={isPasswordVisible}
				isFormValid={isFormValid}
				handleChange={handleChange}
				togglePassword={togglePassword}
				setUserType={setUserType}
			/>
		</div>
	);
}
