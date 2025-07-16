import styles from './TeacherFormFields.module.scss';

import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { PhoneIcon } from '../../icons/PhoneIcon';
import { DropdownMenuSelectSubject } from '../../ui/dropdownMenus/DropdownMenuSelectSubject/DropdownMenuSelectSubject';

import { PasswordInput } from '../../ui/input/PasswordInput/PasswordInput';
import { TextInput } from '../../ui/input/TextInput/TextInput';
import { TeacherFormFieldsProps } from '../../types/principalPanelProps';
import { EmailInput } from '../../ui/input/EmailInput/EmailInput';

export function TeacherFormFields({
	formValues,
	handleInputChange,
	isPasswordVisible,
	togglePasswordVisibility,
	state,
}: TeacherFormFieldsProps) {
	return (
		<>
			<div className={styles.required}>
				<label htmlFor='teacherFirstName'>Name</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherFirstName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='teacherFirstName'
					name='teacherFirstName'
					placeholder='ex. John'
					defaultValue={formValues.teacherFirstName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.teacherFirstNameError && (
					<p className={styles.error}>Please, provide valid first name to continue (min 2. characters)</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherLastName'>LastName</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherLastName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='teacherLastName'
					name='teacherLastName'
					placeholder='ex. Doe'
					defaultValue={formValues.teacherLastName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.teacherLastNameError && (
					<p className={styles.error}>Please, provide valid lastname to continue (min 2. characters)</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherEmail'>E-mail</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherEmail' className={styles.iconContainer}>
					<EmailIcon className={styles.inputIcon} />
				</label>
				<EmailInput
					id='teacherEmail'
					name='teacherEmail'
					placeholder='ex. johndoe@xjournal.com'
					defaultValue={formValues.teacherEmail}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.teacherEmailError && <p className={styles.error}>Please, provide valid email to continue</p>}
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherPhone'>Phone number</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherPhone' className={styles.iconContainer}>
					<PhoneIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='teacherPhone'
					name='teacherPhone'
					placeholder='ex. +1 123456789'
					defaultValue={formValues.teacherPhone}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.teacherPhoneError && (
					<p className={styles.error}>Please, provide valid phone number to continue</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='teacherPassword'>Password</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='teacherPassword' className={styles.iconContainer}>
					<LockIcon className={styles.inputIcon} />
				</label>
				<PasswordInput
					id='teacherPassword'
					name='teacherPassword'
					placeholder='Set the user password'
					defaultValue={formValues.teacherPassword}
					onChange={handleInputChange}
					type={isPasswordVisible ? 'text' : 'password'}
				/>
				<span
					className={styles.toggleVisibility}
					aria-label='show or hide password button'
					tabIndex={0}
					onClick={togglePasswordVisibility}>
					{isPasswordVisible ? '🔓' : '🔒'}
				</span>
			</div>

			<div className={styles.required}>
				{state.teacherPasswordError && (
					<p className={styles.error}>Please, provide valid password to continue</p>
				)}
			</div>
			<div className={styles.required}>
				<label htmlFor='subject'>Subject</label>
			</div>
			<DropdownMenuSelectSubject />
		</>
	);
}
