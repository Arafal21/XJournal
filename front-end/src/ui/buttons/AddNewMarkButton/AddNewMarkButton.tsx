import styles from './AddNewMarkButton.module.scss';

import Image from 'next/image';
import PlusIcon from '../../../icons/plus-icon.svg';

interface AddNewMarkButtonProps {
	onClick: () => void;
}

export function AddNewMarkButton({ onClick }: AddNewMarkButtonProps) {
	return (
		<button type="button" className={styles.addMarkBtn} onClick={onClick}>
			<Image src={PlusIcon} alt='add grade icon' />
		</button>
	);
}
