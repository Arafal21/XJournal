import Link from 'next/link';
import styles from './AdminRoleFilterButton.module.scss';

interface AdminFilterRoleButtonProps {
	children: React.ReactNode;
	active: boolean;
	href: string;
}

export function AdminRoleFilterButton({ children, active, href }: AdminFilterRoleButtonProps) {
	return (
		<Link className={`${styles.adminFilterBtn} ${active ? styles.activeBtn : null}`} href={href}>
			{children}
		</Link>
	);
}
