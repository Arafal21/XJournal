import styles from './SideNavLink.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkTypes } from '../../types/types';

export function SideNavLink({ href, children, onClick, isRowForced }: NavLinkTypes) {
	const pathname = usePathname();
	const isActive = pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={`${styles.singleLink} ${isActive ? styles.active : null} ${isRowForced ? styles.rowForced : null}`}
			onClick={onClick}>
			{children}
		</Link>
	);
}
