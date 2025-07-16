import styles from './PreviousButton.module.scss';

import Image from 'next/image';
import leftIcon from '../../../icons/left-icon.svg';

interface PreviousButtonProps {
	onClick: () => void;
}

export function PreviousButton({ onClick }: PreviousButtonProps) {
	return (
		<button type='button' className={styles.previousBtn} onClick={onClick}>
			<Image src={leftIcon} alt='Previous button' width={24} height={24} />
		</button>
	);
}
