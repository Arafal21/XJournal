'use client'

import styles from './ResponsiveModalBase.module.scss';

import { useEffect } from 'react';

interface ResponsiveModalBaseProps {
	children: React.ReactNode;
	isModalVisible: boolean;
}

export function ResponsiveModalBase({ children, isModalVisible }: ResponsiveModalBaseProps) {
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