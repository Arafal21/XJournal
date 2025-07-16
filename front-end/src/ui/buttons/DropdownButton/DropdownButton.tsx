import styles from './DropdownButton.module.scss';

import Image from 'next/image';

import DropDownIcon from '../../../icons/dropDown-icon.svg';
import { DropdownButtonProps } from '../../../types/types';

export function DropdownButton({ isOpen, className }: DropdownButtonProps) {
	return (
		<Image
			src={DropDownIcon}
			alt='Drop down menu'
			style={{ width: 'auto' }}
			className={`${styles.caret} ${isOpen ? styles.caretRotate : null} ${className}`}
			aria-label='Drop down button'
		/>
	);
}
