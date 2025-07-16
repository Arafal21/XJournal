import styles from './FullModalHeader.module.scss';

import { CloseButton } from '../../buttons/CloseButton/CloseButton';
import { DeleteButton } from '../../buttons/DeleteButton/DeleteButton';

interface FullModalHeaderProps {
	onDelete: () => void;
	onClose: () => void;
	children: React.ReactNode;
	hasSelected: boolean;
}

export function FullModalHeader({ onDelete, onClose, children, hasSelected }: FullModalHeaderProps) {
	return (
		<>
			<div className={styles.actionMenu}>
				{hasSelected ? <DeleteButton onClick={onDelete} /> : <span className={styles.blank} />}
				<p className={styles.heading}>{children}</p>

				<CloseButton onClick={onClose} />
			</div>
			<div className={styles.marginBottom}></div>
		</>
	);
}
