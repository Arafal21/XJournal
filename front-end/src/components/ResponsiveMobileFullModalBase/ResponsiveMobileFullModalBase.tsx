import styles from './ResponsiveMobileFullModalBase.module.scss';

import { useEffect } from 'react';

interface ResponsiveMobileFullModalBaseProps {
	children: React.ReactNode;
	isModalVisible: boolean;
}

export function ResponsiveMobileFullModalBase({ children, isModalVisible }: ResponsiveMobileFullModalBaseProps) {
	useEffect(() => {
		const body = document.body;
		const originalOverflow = body.style.overflow;
		if (isModalVisible) {
			body.style.overflow = 'hidden';
		} else {
			body.style.overflow = originalOverflow;
		}
		return () => {
			body.style.overflow = originalOverflow;
		};
	}, [isModalVisible]);

	return (
		<div className={`${styles.modalContainer} ${isModalVisible ? styles.active : null}`}>
			<span className={styles.overlay}></span>

			<div className={styles.modalOpened}>{children}</div>
		</div>
	);
}
