import styles from './BackgroundMainContentMobile.module.scss';

export function BackgroundMainContentMobile({ children }: { children: React.ReactNode }) {
	return <div className={styles.backgroundMainContentMobile}>{children}</div>;
}
