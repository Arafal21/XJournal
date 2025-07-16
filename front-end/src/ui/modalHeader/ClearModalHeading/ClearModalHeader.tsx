import styles from './ClearModalHeader.module.scss';

interface ClearModalHeaderProps {
	children: React.ReactNode;
}

export function ClearModalHeader({ children }: ClearModalHeaderProps) {
	return <h2 className={styles.heading}>{children}</h2>;
}
