import styles from './ExpandButton.module.scss';

import { DropdownButton } from '../DropdownButton/DropdownButton';

interface ExpandButtonProps {
	onClick: () => void;
	isOpen: boolean;
}

export function ExpandButton({ onClick, isOpen }: ExpandButtonProps) {
	return (
		<button
			onClick={onClick}
			className={styles.dropDownButtonContainer}
			aria-label='Expand/collapse the content of the announcement'>
			<DropdownButton className={styles.extendBtn} isOpen={isOpen} />
		</button>
	);
}
