import styles from './UserBadge.module.scss';
import Image from 'next/image';
import Avatar from '../../icons/avatar.svg';
import { getRoleLabel } from '../../utils/getRoleLabel';

interface UserBadgeProps {
	isRoleRequired: boolean;
	isFullWidth: boolean;

	firstName?: string;
	lastName?: string;
	role?: string;
}

export function UserBadge({ isRoleRequired, isFullWidth, firstName, lastName, role }: UserBadgeProps) {
	return (
		<div className={`${styles.user} ${isFullWidth ? null : styles.limitedWidth}`}>
			<Image src={Avatar} alt='Avatar' />
			<div className={styles.nameAndRole}>
				<p className={styles.name}>
					{firstName} {lastName}
				</p>
				{isRoleRequired && <p className={styles.role}>{getRoleLabel(role || 'undefined')}</p>}
			</div>
		</div>
	);
}
