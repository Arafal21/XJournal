import styles from './CreatorInfo.module.scss';

import Link from 'next/link';

export function CreatorInfo() {
	return (

			<p className={styles.text}>
				Made by{' '}
				<Link target='_blank' rel='noopener' href='https://github.com/Arafal21' className={styles.link}>
					github.com/Arafal21
				</Link>{' '}
				😃
			</p>

	);
}
