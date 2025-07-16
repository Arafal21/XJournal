import Link from 'next/link';
import styles from './Footer.module.scss';

export function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<p className={styles.text}>
					Made by{' '}
					<Link target='_blank' rel='noopener' href='https://github.com/Arafal21' className={styles.link}>
						github.com/Arafal21
					</Link>{' '}
					😃
				</p>
			</footer>
		</>
	);
}
