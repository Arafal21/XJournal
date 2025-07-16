'use client';

import styles from './DropdownTriggerButton.module.scss';
import { DropdownButton } from '../DropdownButton/DropdownButton';

interface DropdownTriggerButtonProps {
	currentlyDisplaying: string;
	option: React.ReactNode;
	isOpen?: boolean;
	staticInput?: boolean;
	onToggle: () => void;
}

export function DropdownTriggerButton({
	currentlyDisplaying,
	option,
	isOpen = false,
	staticInput = false,
	onToggle,
}: DropdownTriggerButtonProps) {
	return (
		<button
			type='button'
			className={`${styles.select} ${isOpen ? styles.selectClicked : null} ${
				isOpen ? styles.activeBorder : null
			}`}
			disabled={staticInput}
			onClick={!staticInput ? onToggle : undefined}
			aria-label={isOpen ? 'Close dropdown menu' : 'Open dropdown menu'}>
			<span className={styles.selected}>
				<span className={styles.icon}>{option}</span>
				{currentlyDisplaying}
			</span>

			{!staticInput && <DropdownButton isOpen={isOpen} />}
		</button>
	);
}
