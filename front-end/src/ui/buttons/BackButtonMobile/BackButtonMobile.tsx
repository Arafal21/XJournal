import styles from './BackButtonMobile.module.scss';

import Image from 'next/image';

import leftIcon from '../../../icons/left-icon.svg';

export function BackButtonMobile({ onClick }: { onClick: () => void }) {
	return (
		<button className={`${styles.backBtnMobile} hiddenOnDesktop`} onClick={onClick} type="button">
			<Image src={leftIcon} alt='left icon' />
			<span className={styles.backBtnText}>back</span>
		</button>
	);
}
