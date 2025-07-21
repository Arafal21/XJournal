'use client';

import styles from './ModalActionButton.module.scss';

import { useFormStatus } from 'react-dom';

interface ModalActionButtonProps {
	isFormValid: boolean | number | null;
	children: React.ReactNode;
	onClick?: () => void;
}

export function ModalActionButton({ isFormValid, children, onClick }: ModalActionButtonProps) {
	const { pending } = useFormStatus();

	return (
		<button
			className={`${isFormValid ? styles.buttonReady : styles.buttonNoReady} ${
				pending ? styles.buttonNoReady : null
			}`}
			onClick={onClick}
			disabled={pending}>
			{pending ? 'saving...' : children}
		</button>
	);
}