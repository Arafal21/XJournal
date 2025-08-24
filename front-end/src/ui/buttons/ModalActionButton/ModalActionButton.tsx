'use client';

import styles from './ModalActionButton.module.scss';

import { useFormStatus } from 'react-dom';

interface ModalActionButtonProps {
	isFormValid: boolean | number | null;
	children: React.ReactNode;
	onClick?: () => void;
	isSubmitting?: boolean;
}

export function ModalActionButton({ isFormValid, children, onClick, isSubmitting = false }: ModalActionButtonProps) {
	const { pending: formPending } = useFormStatus();
	const pending = isSubmitting || formPending;

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
