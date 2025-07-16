import styles from './MainContent.module.scss';

export function MainContent({ children }: { children: React.ReactNode }) {
	return <div className={styles.mainContent}>{children}</div>;
}
