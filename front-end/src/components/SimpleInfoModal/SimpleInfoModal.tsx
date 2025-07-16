import styles from './SimpleInfoModal.module.scss';

import { LargeCloseButton } from '../../ui/buttons/LargeCloseButton/LargeCloseButton';

interface SimpleInfoModalProps {
	isModalOpen: boolean;
	setIsModalOpen: (value: boolean) => void;
	modalText: string;
}

export function SimpleInfoModal({ isModalOpen, setIsModalOpen, modalText }: SimpleInfoModalProps) {
	return (
		<div
			className={`${styles.modalContainer} ${isModalOpen ? styles.active : null}`}
			onClick={() => setIsModalOpen(false)}>
			<span className={styles.overlay}></span>

			<div className={styles.modalOpened}>
				<p className={styles.modalText}>{modalText}</p>

				<LargeCloseButton onClick={() => setIsModalOpen(false)} />
			</div>
		</div>
	);
}
