import styles from './SideModalBase.module.scss';

interface SideModalBaseProps {
	children: React.ReactNode;
	isModalVisible: boolean;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SideModalBase({ children, isModalVisible, setIsModalVisible }: SideModalBaseProps) {
	return (
		<div className={`${styles.modalContainer} ${isModalVisible ? styles.active : null}`}>
			<span className={styles.overlay} onClick={() => setIsModalVisible(false)}></span>

			<div className={styles.modalOpened}>{children}</div>
		</div>
	);
}
