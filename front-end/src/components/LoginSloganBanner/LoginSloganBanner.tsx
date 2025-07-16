import styles from './LoginSloganBanner.module.scss';

import Image from 'next/image';
import sloganBgImg from '../../icons/background-for-slogan.svg';

export function LoginSloganBanner() {
	return (
		<div className={`${styles.sloganBanner} hiddenOnMobile`}>
			<Image src={sloganBgImg} alt='Slogan banner' fill className={styles.bgImg} />
			<div className={styles.heroText}>
				<h2 className={styles.slogan}>Your Gateway to Smarter Education Management</h2>
			</div>
		</div>
	);
}
