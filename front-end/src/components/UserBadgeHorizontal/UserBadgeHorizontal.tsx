import styles from './UserBadgeHorizontal.module.scss';
import Image from 'next/image';
import Avatar from '../../icons/avatar.svg';

interface UserBadgeHorizontalProps {
	firstName: string,
	lastName: string,
	role: string
}

export function UserBadgeHorizontal({firstName, lastName, role}: UserBadgeHorizontalProps) {

	return (
		<div className={styles.user}>
			<Image src={Avatar} alt='Your Avatar' />

			<div className={styles.nameAndRole}>
				<p className={styles.name}>{firstName} {lastName}</p>
				<p className={styles.role}>{role}</p>
			</div>
			
		</div>
	);
}
