import Link from 'next/link';
import styles from './AdminAllUsersFilterButton.module.scss';

interface AdminAllUsersFilterButtonProps {
	active: boolean;
	children: React.ReactNode;
	href: string;
	userAmount: number | string;
}

export function AdminAllUsersFilterButton({ active, children, href, userAmount }: AdminAllUsersFilterButtonProps) {0;

	return (
		<Link className={`${styles.allUsersBtn} ${active ? styles.active : null}`} href={href}>
			{children}
			<div className={styles.line}></div>
			<span>{userAmount} members</span>
		</Link>
	);
}
