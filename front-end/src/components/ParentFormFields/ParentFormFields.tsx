import styles from './ParentFormFields.module.scss';
import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { PeopleIcon } from '../../icons/PeopleIcon';
import { PhoneIcon } from '../../icons/PhoneIcon';
import { ParentAndStudentFormFieldsProps } from '../../types/principalPanelProps';
import { EmailInput } from '../../ui/input/EmailInput/EmailInput';

import { PasswordInput } from '../../ui/input/PasswordInput/PasswordInput';
import { TextInput } from '../../ui/input/TextInput/TextInput';

export function ParentFormFields({
	formValues,
	handleInputChange,
	isPasswordVisible,
	togglePasswordVisibility,
	state,
}: ParentAndStudentFormFieldsProps) {
	return (
		<>
			<h2 className={styles.sectionTitle}>Parent data</h2>

			<div className={styles.required}>
				<label htmlFor='parentFirstName'>Name</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentFirstName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='parentFirstName'
					name='parentFirstName'
					placeholder='ex. John'
					defaultValue={formValues.parentFirstName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.parentFirstNameError && (
					<p className={styles.error}>Please, provide valid parent&apos;s first name to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='parentLastName'>LastName</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentLastName' className={styles.iconContainer}>
					<PeopleIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='parentLastName'
					name='parentLastName'
					placeholder='ex. Doe'
					defaultValue={formValues.parentLastName}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.parentLastNameError && (
					<p className={styles.error}>Please, provide valid parent&apos;s last name to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='parentEmail'>E-mail</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentEmail' className={styles.iconContainer}>
					<EmailIcon className={styles.inputIcon} />
				</label>
				<EmailInput
					id='parentEmail'
					name='parentEmail'
					placeholder='ex. parent@xjournal.com'
					defaultValue={formValues.parentEmail}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.parentEmailError && (
					<p className={styles.error}>Please, provide valid parent&apos;s e-mail to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='parentPhone'>Phone number</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentPhone' className={styles.iconContainer}>
					<PhoneIcon className={styles.inputIcon} />
				</label>
				<TextInput
					id='parentPhone'
					name='parentPhone'
					placeholder='ex. +1 123456789'
					defaultValue={formValues.parentPhone}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.parentPhoneError && (
					<p className={styles.error}>Please, provide valid parent&apos;s phone number to continue.</p>
				)}
			</div>

			<div className={styles.required}>
				<label htmlFor='parentPassword'>Password</label>
			</div>
			<div className={styles.inputContainer}>
				<label htmlFor='parentPassword' className={styles.iconContainer}>
					<LockIcon className={styles.inputIcon} />
				</label>
				<PasswordInput
					id='parentPassword'
					name='parentPassword'
					placeholder='Set parent password'
					defaultValue={formValues.parentPassword}
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
				{state.parentPasswordError && (
					<p className={styles.error}>Please, provide valid parent&apos;s password to continue.</p>
				)}
			</div>
		</>
	);
}
