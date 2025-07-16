import styles from './SideNavItemButton.module.scss';

import { SideNavLink } from '../SideNavLink/SideNavLink';
import { usePathname } from 'next/navigation';
import { SideNavItemButtonProps } from '../../types/types';
import { BASE_ROUTE } from '../../constants/routing';

export function SideNavItemButton({
	itemPath,
	icon: Icon,
	children,
	onClick,
	className,
	isRowForced,
}: SideNavItemButtonProps) {
	const pathname = usePathname();
	const baseHref = `/${BASE_ROUTE}/${itemPath}`;
	const isActive = pathname.startsWith(baseHref);

	return (
		<div onClick={onClick} className={className}>
			<SideNavLink href={baseHref} isRowForced={isRowForced}>
				<Icon isActive={isActive} />
				<span
					className={`${styles.linkText} ${isActive ? styles.linkTextActive : null} ${
						isRowForced ? styles.rowForced : null
					}`}>
					{children}
				</span>
			</SideNavLink>
		</div>
	);
}
