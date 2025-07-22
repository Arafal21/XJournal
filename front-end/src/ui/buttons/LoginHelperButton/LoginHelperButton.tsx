import styles from './LoginHelperButton.module.scss';

interface LoginHelperButtonProps {
	onClick: () => void;
	children: React.ReactNode;
}

export function LoginHelperButton({ onClick, children }: LoginHelperButtonProps) {
	return (
		<button className={styles.loginHelperBtn} onClick={onClick} type='button'>
			Fill in as <span className={styles.highlighted}>{children}</span>
		</button>
	);
}
