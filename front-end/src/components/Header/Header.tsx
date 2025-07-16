'use server';

import styles from './Header.module.scss';

import { DropdownMenuSelectClass } from '../../ui/dropdownMenus/DropdownMenuSelectClass/DropdownMenuSelectClass';
import { schoolName } from '../../constants/constans';

interface TopBarDesktop {
	isFullHeader: boolean;
	isMobileHeaderShowed?: boolean;
}

export async function Header({ isFullHeader, isMobileHeaderShowed }: TopBarDesktop) {
	return (
		<header className={`${styles.header} ${!isMobileHeaderShowed ? 'hiddenOnMobile' : null}`}>
			<div className={styles.container}>
				<div className={`${styles.wrapper} ${isFullHeader ? styles.menuVisible : styles.mobileHidden}`}>
					<h2 className={styles.schoolOrClass}>{schoolName}</h2>
					{isFullHeader && <DropdownMenuSelectClass />}
				</div>
			</div>
		</header>
	);
}
