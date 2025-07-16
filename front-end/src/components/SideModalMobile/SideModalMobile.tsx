'use client';

import styles from './SideModalMobile.module.scss';

export interface SideModalMobileProps {
	children: React.ReactNode;
	isModalVisible: boolean;
	setIsMobileMoreOpen: (open: boolean) => void;
}

export function SideModalMobile({ children, isModalVisible, setIsMobileMoreOpen }: SideModalMobileProps) {
	return (
		<div className={`${styles.modalContainer} ${isModalVisible ? styles.active : null}`}>
			<span className={styles.overlay} onClick={() => setIsMobileMoreOpen(false)}></span>

			<div className={styles.modalOpened}>{children}</div>
		</div>
	);
}
