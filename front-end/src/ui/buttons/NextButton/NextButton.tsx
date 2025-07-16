'use client';

import styles from './NextButton.module.scss';

import Image from 'next/image';
import RightIcon from '../../../icons/right-icon.svg';

interface NextButtonProps {
	onClick: () => void;
}

export function NextButton({ onClick }: NextButtonProps) {
	return (
		<button type='button' className={styles.nextBtn} onClick={onClick}>
			<Image src={RightIcon} alt='Next button' width={24} height={24} />
		</button>
	);
}
