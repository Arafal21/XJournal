'use client';

import styles from './SideNavBarMobileExtendedItems.module.scss';
import Image from 'next/image';

import { useLoggedUser } from '../../contexts/LoggedUserContext';

import Logo from '../../icons/logo-mini.svg';
import { GradesIcon } from '../../icons/GradesIcon';
import { AdminIcon } from '../../icons/AdminIcon';
import { ProfileIcon } from '../../icons/ProfileIcon';

import { UserBadgeHorizontal } from '../UserBadgeHorizontal/UserBadgeHorizontal';
import { LogoutButton } from '../../ui/buttons/LogoutButton/LogoutButton';
import { useLoggedPrincipal } from '../../contexts/LoggedPrincipalContext';
import { SideNavItemButton } from '../SideNavItem/SideNavItemButton';
import { getRoleLabel } from '../../utils/getRoleLabel';

interface SideNavBarMobileExtendedItemsProps {
	hideMobileMenu: () => void;
	handleLogout: () => void;
	isRowForced: boolean;
}

export function SideNavBarMobileExtendedItems({
	hideMobileMenu,
	handleLogout,
	isRowForced,
}: SideNavBarMobileExtendedItemsProps) {
	const isPrincipal = useLoggedPrincipal();
	const { firstName, lastName, role } = useLoggedUser();

	return (
		<div className={styles.modalContent}>
			<div className={styles.mobileOptions}>
				<Image src={Logo} alt='XJournal Logo' />
				<div className={styles.userBadgeContainer}>
					<UserBadgeHorizontal
						firstName={firstName}
						lastName={lastName}
						role={getRoleLabel(role || 'undefined')}
					/>
				</div>

				<div className={styles.option} onClick={hideMobileMenu}>
					<SideNavItemButton icon={GradesIcon} itemPath='grades' isRowForced={isRowForced}>
						Grades
					</SideNavItemButton>
				</div>

				{isPrincipal && (
					<div className={styles.option} onClick={hideMobileMenu}>
						<SideNavItemButton icon={AdminIcon} itemPath='principal-panel' isRowForced={isRowForced}>
							Admin
						</SideNavItemButton>
					</div>
				)}

				<div className={styles.option} onClick={hideMobileMenu}>
					<SideNavItemButton icon={ProfileIcon} itemPath='profile' isRowForced={isRowForced}>
						Profile
					</SideNavItemButton>
				</div>

				<div className={styles.option} onClick={hideMobileMenu}>
					<LogoutButton onClick={handleLogout} />
				</div>
			</div>
		</div>
	);
}
