import styles from './SecondaryLoginButton.module.scss';

import { MouseEventHandler } from 'react';

interface SecondaryLoginButtonProps {
	children: React.ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
	variant: 'signUpMobile' | 'signUpDesktop' | 'forgotPassword';
}

export function SecondaryLoginButton({ children, onClick, variant }: SecondaryLoginButtonProps) {
	const buttonType = styles[variant];

	return (
		<button type='button' className={buttonType} onClick={onClick}>
			{children}
		</button>
	);
}
