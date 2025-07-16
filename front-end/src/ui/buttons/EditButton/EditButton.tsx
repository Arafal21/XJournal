import Image from 'next/image';

import styles from './EditButton.module.scss';

import EditIcon from '../../../icons/edit-icon.svg';

interface EditButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function EditButton({ onClick }: EditButtonProps) {
	return (
		<button onClick={onClick} className={styles.editBtn}>
			<Image src={EditIcon} alt='Edit icon' aria-label='Edit a post' />
		</button>
	);
}
