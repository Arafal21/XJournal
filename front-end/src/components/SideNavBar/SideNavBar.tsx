'use client';

import styles from './SideNavBar.module.scss';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import LogoMedium from '../../icons/logo-medium.svg';

import { HomeIcon } from '../../icons/HomeIcon';
import { CalendarIcon } from '../../icons/CalendarIcon';
import { ScheduleIcon } from '../../icons/ScheduleIcon';
import { PresenceIcon } from '../../icons/PresenceIcon';
import { GradesIcon } from '../../icons/GradesIcon';
import { AdminIcon } from '../../icons/AdminIcon';
import { ProfileIcon } from '../../icons/ProfileIcon';

import { performLogout } from '../../api/logoutApi';

import { SideModalMobile } from '../SideModalMobile/SideModalMobile';
import { SideNavBarMobileExtendedItems } from '../ExtendedItemsMobileSideNavBar/SideNavBarMobileExtendedItems';
import { LogoutButton } from '../../ui/buttons/LogoutButton/LogoutButton';
import { useLoggedPrincipal } from '../../contexts/LoggedPrincipalContext';
import { MobileExtendButton } from '../../ui/buttons/MobileExtendButton/MobileExtendButton';
import { SideNavItemButton } from '../SideNavItem/SideNavItemButton';
import { BASE_ROUTE } from '../../constants/routing';

export function SideNavBar({ children }: { children: React.ReactNode }) {
	const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
	const isPrincipal = useLoggedPrincipal();

	const router = useRouter();

	function hideMobileMenu() {
		setIsMobileMoreOpen(false);
	}

	async function handleLogout() {
		await performLogout(router);
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.primaryItems}>
				<div className={styles.navHeading}>
					<Link href={`/${BASE_ROUTE}/announcements`}>
						<Image src={LogoMedium} width='148' height='40' alt='XJournal Logo' className={styles.logo} />
					</Link>
					<div className={styles.personalInfo}>{children}</div>
				</div>

				<SideNavItemButton icon={HomeIcon} itemPath='announcements' onClick={hideMobileMenu}>
					Home
				</SideNavItemButton>

				<SideNavItemButton icon={CalendarIcon} itemPath='calendar' onClick={hideMobileMenu}>
					Calendar
				</SideNavItemButton>

				<SideNavItemButton icon={ScheduleIcon} itemPath='lesson-schedule' onClick={hideMobileMenu}>
					Schedule
				</SideNavItemButton>

				<SideNavItemButton icon={PresenceIcon} itemPath='presence' onClick={hideMobileMenu}>
					Presence
				</SideNavItemButton>

				<MobileExtendButton onClick={() => setIsMobileMoreOpen((prevState) => !prevState)} />

				<SideNavItemButton icon={GradesIcon} itemPath='grades' className='hiddenOnMobile'>
					Grades
				</SideNavItemButton>

				{isPrincipal && (
					<SideNavItemButton icon={AdminIcon} itemPath='principal-panel' className='hiddenOnMobile'>
						Admin
					</SideNavItemButton>
				)}
			</div>

			<SideModalMobile isModalVisible={isMobileMoreOpen} setIsMobileMoreOpen={setIsMobileMoreOpen}>
				<SideNavBarMobileExtendedItems
					hideMobileMenu={hideMobileMenu}
					isRowForced={true}
					handleLogout={handleLogout}
				/>
			</SideModalMobile>

			<div className={`${styles.lowerDesktopItems} hiddenOnMobile`}>
				<SideNavItemButton icon={ProfileIcon} itemPath='profile'>
					Profile
				</SideNavItemButton>

				<LogoutButton onClick={handleLogout} />
			</div>
		</nav>
	);
}
