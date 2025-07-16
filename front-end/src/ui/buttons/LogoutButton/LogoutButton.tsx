import styles from './LogoutButton.module.scss';
import Image from 'next/image';
import LogoutIcon from '../../../icons/nav-icons/logout-icon.svg';

export interface LogoutButtonProps {
	onClick: () => void;
}

export function LogoutButton({ onClick }: LogoutButtonProps) {
	return (
		<button onClick={onClick} className={`${styles.logoutBtn} `}>
			<Image src={LogoutIcon} alt='Logout button' />
			<span className={styles.linkText}>Logout</span>
		</button>
	);
}
