'use client';

import styles from './LoginForm.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { useActionState } from 'react';

import { EmailIcon } from '../../icons/EmailIcon';
import { LockIcon } from '../../icons/LockIcon';
import { LoginSubmitButton } from '../../ui/buttons/LoginSubmitButton/LoginSubmitButton';
import { SimpleInfoModal } from '../SimpleInfoModal/SimpleInfoModal';
import { PasswordInput } from '../../ui/input/PasswordInput/PasswordInput';
import { EmailInput } from '../../ui/input/EmailInput/EmailInput';
import LogoBig from '../../icons/logo-big.svg';
import { loginUser } from '../../api/loginApi';
import { modalForgotPassword, modalSignUp } from '../../constants/constans';
import { SecondaryLoginButton } from '../../ui/buttons/SecondaryLoginButton/SecondaryLoginButton';
import { BASE_ROUTE } from '../../constants/routing';
import { DevModeInfo } from '../DevModeInfo/DevModeInfo';
import { CreatorInfo } from '../CreatorInfo/CreatorInfo';
import { LoginHelperButtonsContainer } from '../LoginHelperButtonsContainer/LoginHelperButtonsContainer';
import { LoginFormState } from '../../types/loginProps';

export function LoginForm({ children }: { children: React.ReactNode }) {
	const [state, formAction] = useActionState(handleSubmit, { email: '', password: '' });
	const isForgotOrSignUp = useRef('');
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [formData, setFormData] = useState({
		email: state.email || '',
		password: state.password || '',
	});

	const [, setIsSelectedRoleHelper] = useState<string | null>(null);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};

	const isFormValid = !!formData.email && !!formData.password;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const router = useRouter();

	function handleSubmit(
		_previousState: LoginFormState,
		formData: FormData,
	): LoginFormState | Promise<LoginFormState> {
		const state: LoginFormState = {
			email: formData.get('email') as string,
			password: formData.get('password') as string,
		};

		if (state.email.length === 0) {
			state.emailError = true;
		}

		if (state.password.length === 0) {
			state.passwordError = true;
		}

		if (state.emailError || state.passwordError) {
			return state;
		}
		return loginUser(formData)
			.then(() => {
				router.push(`/${BASE_ROUTE}/announcements`);
				return state;
			})
			.catch(() => {
				state.formError = true;
				return state;
			});
	}

	const toggleModal = (modalType: string) => {
		setIsModalOpen((prevState) => !prevState);
		isForgotOrSignUp.current = modalType;
	};

	const handleForgotPasswordBtn = () => toggleModal(modalForgotPassword);
	const handleSignUpBtn = () => toggleModal(modalSignUp);

	return (
		<section className={styles.loginForm}>
			<SimpleInfoModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				modalText={isForgotOrSignUp.current}
			/>
			{children}
			<form action={formAction} className={styles.form}>
				<Image src={LogoBig} alt='XJournal Logo' />

				<h2 className={`${styles.headingDesktop} hiddenOnMobile`}>Welcome back!</h2>
				<h3 className={`${styles.infoNoAccount} hiddenOnMobile`}>
					Don’t have an account yet?
					<SecondaryLoginButton variant='signUpDesktop' onClick={handleSignUpBtn}>
						Sign up
					</SecondaryLoginButton>
				</h3>

				<h2 className={`${styles.headingMobile} hiddenOnDesktop`}>
					Your Gateway to Smarter Education Management
				</h2>

				<DevModeInfo />
				<LoginHelperButtonsContainer
					setIsSelectedRoleHelper={setIsSelectedRoleHelper}
					setFormData={setFormData}
				/>

				{state.formError && <p className={styles.error}>Please provide valid form data.</p>}

				<div className={styles.required}>
					<label htmlFor='email-input'>Email</label>
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor='email-input' className={styles.iconContainer}>
						<EmailIcon className={styles.inputIcon} />
					</label>
					<EmailInput
						name='email'
						defaultValue={formData.email}
						onChange={handleInputChange}
						placeholder='ethanmiller@xjournal.com'
					/>
				</div>

				<div className={styles.required}>
					{state.emailError && <p className={styles.error}>Please, provide valid email to continue.</p>}
				</div>

				<div className={styles.required}>
					<label htmlFor='password-input'>Password</label>
				</div>

				<div className={styles.inputContainer}>
					<label htmlFor='password-input' className={styles.iconContainer}>
						<LockIcon className={styles.inputIcon} />
					</label>

					<PasswordInput
						name='password'
						type={isPasswordVisible ? 'text' : 'password'}
						defaultValue={formData.password}
						onChange={handleInputChange}
						placeholder='123ethan456'
					/>

					<span
						className={styles.toggleVisibility}
						aria-label={isPasswordVisible ? 'hide password' : 'show password'}
						tabIndex={0}
						onClick={togglePasswordVisibility}>
						{isPasswordVisible ? '🔓' : '🔒'}
					</span>
				</div>

				<div className={styles.required}>
					{state.passwordError && <p className={styles.error}>Please, provide valid password to continue.</p>}
				</div>

				<div className={styles.buttonContainer}>
					<SecondaryLoginButton variant='forgotPassword' onClick={handleForgotPasswordBtn}>
						Forgot your password
					</SecondaryLoginButton>

					<LoginSubmitButton isFormValid={isFormValid} />

					<SecondaryLoginButton variant='signUpMobile' onClick={handleSignUpBtn}>
						sign up
					</SecondaryLoginButton>
				</div>

				<CreatorInfo />
			</form>
		</section>
	);
}
