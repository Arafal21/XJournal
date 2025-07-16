'use client';

import Image from 'next/image';
import styles from './AddNewUserButton.module.scss';
import PlusIcon from '../../../icons/plus-icon.svg';

interface AddNewUserButtonProps {
	onClick: () => void;
}

export function AddNewUserButton({ onClick }: AddNewUserButtonProps) {
	return (
		<button className={styles.addNewUserButton} onClick={onClick}>
			add new user
			<Image src={PlusIcon} alt='plus icon' className={styles.plusImg} />
		</button>
	);
}
