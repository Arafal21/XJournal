import styles from './BackgroundMainContentDesktop.module.scss';

interface BackgroundMainContentDesktopProps {
	children: React.ReactNode;
	padding: boolean;
}

export function BackgroundMainContentDesktop({ children, padding }: BackgroundMainContentDesktopProps) {
	return <div className={`${styles.backgroundMainContentDesktop} ${padding ? styles.padding : null}`}>{children}</div>;
}
