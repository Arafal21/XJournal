import styles from './StudentFormFields.module.scss';

import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { PhoneIcon } from '../../icons/PhoneIcon';
import { ParentAndStudentFormFieldsProps } from '../../types/principalPanelProps';
import { DropdownMenuSelectClass } from '../../ui/dropdownMenus/DropdownMenuSelectClass/DropdownMenuSelectClass';
import { EmailInput } from '../../ui/input/EmailInput/EmailInput';
import { PasswordInput } from '../../ui/input/PasswordInput/PasswordInput';
import { TextInput } from '../../ui/input/TextInput/TextInput';

export function StudentFormFields({
	formValues,
	handleInputChange,
	isPasswordVisible,
	togglePasswordVisibility,
	state,
}: ParentAndStudentFormFieldsProps) {
	return (
		<>
			<h2 className={styles.sectionTitle}>Student data</h2>

			<div className={styles.required}>
				<label htmlFor='studentFirstName'>Name</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentFirstName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='studentFirstName'
					name='studentFirstName'
					placeholder='ex. Jack'
					defaultValue={formValues.studentFirstName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.studentFirstNameError && (
					<p className={styles.error}>Please, provide valid student&apos;s first name to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='studentLastName'>LastName</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentLastName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='studentLastName'
					name='studentLastName'
					placeholder='ex. Doe'
					defaultValue={formValues.studentLastName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.studentLastNameError && (
					<p className={styles.error}>Please, provide valid student&apos;s last name to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='studentEmail'>E-mail</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentEmail' className={styles.iconContainer}>
					<EmailIcon className={styles.inputIcon} />
				</label>
				<EmailInput
					id='studentEmail'
					name='studentEmail'
					placeholder='ex. student@xjournal.com'
					defaultValue={formValues.studentEmail}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.studentEmailError && (
					<p className={styles.error}>Please, provide valid student&apos;s email to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='studentPhone'>Phone number</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentPhone' className={styles.iconContainer}>
					<PhoneIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='studentPhone'
					name='studentPhone'
					placeholder='ex. +1 987654321'
					defaultValue={formValues.studentPhone}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.studentPhoneError && (
					<p className={styles.error}>Please, provide valid student&apos;s phone number to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='studentPassword'>Password</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='studentPassword' className={styles.iconContainer}>
					<LockIcon className={styles.inputIcon} />
				</label>
				<PasswordInput
					id='studentPassword'
					name='studentPassword'
					placeholder='Set student password'
					defaultValue={formValues.studentPassword}
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
				{state.studentPasswordError && (
					<p className={styles.error}>Please, provide valid student&apos;s password to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='class'>Class</label>
			</div>
			<DropdownMenuSelectClass />
		</>
	);
}
