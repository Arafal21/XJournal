'use client';

import styles from './AdminModalForm.module.scss';

import { UserTypeRadioGroup } from '../UserTypeRadioGroup/UserTypeRadioGroup';
import { TeacherFormFields } from '../TeacherFormFields/TeacherFormFields';
import { ParentFormFields } from '../ParentFormFields/ParentFormFields';
import { StudentFormFields } from '../StudentFormFields/StudentFormFields';
import { ModalActionButton } from '../../ui/buttons/ModalActionButton/ModalActionButton';
import type { AdminFormErrors, UserType } from '../../types/principalPanelProps';

interface AdminModalFormProps {
	selectedUser: any;
	userType: UserType;
	formValues: any;
	state: AdminFormErrors;
	formAction: any;
	isPasswordVisible: boolean;
	isFormValid: boolean;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	togglePassword: () => void;
	setUserType: (v: UserType) => void;
}

export function AdminModalForm({
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
}: AdminModalFormProps) {
	return (
		<form action={formAction} className={styles.form}>
			{!selectedUser && (
				<UserTypeRadioGroup userType={userType} onChange={(e) => setUserType(e.target.value as UserType)} />
			)}

			{state.formError && <p className={styles.error}>Please provide valid form data.</p>}

			{userType === 'teacher' && (
				<TeacherFormFields
					formValues={formValues}
					handleInputChange={handleChange}
					isPasswordVisible={isPasswordVisible}
					togglePasswordVisibility={togglePassword}
					state={state}
				/>
			)}

			{userType === 'parentAndStudent' && (
				<div className={styles.parentAndStudentContainer}>
					<ParentFormFields
						formValues={formValues}
						handleInputChange={handleChange}
						isPasswordVisible={isPasswordVisible}
						togglePasswordVisibility={togglePassword}
						state={state}
					/>
					<StudentFormFields
						formValues={formValues}
						handleInputChange={handleChange}
						isPasswordVisible={isPasswordVisible}
						togglePasswordVisibility={togglePassword}
						state={state}
					/>
				</div>
			)}

			{userType === 'parent' && (
				<ParentFormFields
					formValues={formValues}
					handleInputChange={handleChange}
					isPasswordVisible={isPasswordVisible}
					togglePasswordVisibility={togglePassword}
					state={state}
				/>
			)}

			{userType === 'student' && (
				<StudentFormFields
					formValues={formValues}
					handleInputChange={handleChange}
					isPasswordVisible={isPasswordVisible}
					togglePasswordVisibility={togglePassword}
					state={state}
				/>
			)}

			<div className={styles.btnContainer}>
				<ModalActionButton isFormValid={isFormValid}>{selectedUser ? 'SAVE' : 'POST'}</ModalActionButton>
			</div>
		</form>
	);
}
