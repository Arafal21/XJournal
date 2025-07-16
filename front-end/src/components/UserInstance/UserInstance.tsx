import styles from './UserInstance.module.scss';
import Image from 'next/image';
import Avatar from '../../icons/avatar.svg';
import { getRoleLabel } from '../../utils/getRoleLabel';
import { UserInstanceProps } from '../../types/principalPanelProps';
import { useSelectedUserAdmin } from '../../contexts/SelectedUserAdminContext';

export function UserInstance({ user }: UserInstanceProps) {
	const { setSelectedUser, openModal } = useSelectedUserAdmin();
	const fullName = `${user.firstName} ${user.lastName}`;

	const handleOpenModal = () => {
		if (user.role.toLowerCase() !== 'principal') {
			setSelectedUser(user);
			openModal();
		}
	};

	return (
		<div className={styles.userRow} onClick={handleOpenModal}>
			<div className={styles.userContainer}>
				<Image src={Avatar} alt={`${fullName}'s avatar`} />
				<div className={styles.column}>
					<p className={styles.name}>{fullName}</p>
					<p className={styles.email}>{user.email}</p>
				</div>
			</div>
			<div className={styles.groupContainer}>
				<p className={styles.text}>{getRoleLabel(user.role)}</p>
			</div>
			<div className={styles.contactNumberContainer}>
				<p className={styles.text}>{user.phoneNumber}</p>
			</div>
		</div>
	);
}
