import styles from './ProfileHeader.module.scss';

import Image from 'next/image';
import Avatar from '../../icons/avatar.svg';
import { getRoleLabel } from '../../utils/getRoleLabel';
import { rolesAllowedToViewClasses } from '../../constants/permissions';
import { type DetailedUserData } from '../../types/sessionTypes';
import { getStudentClass, getUserRole } from '../../api/profileDataApi';

interface ProfileHeaderProps {
	loggedUserData: DetailedUserData;
}

export async function ProfileHeader({ loggedUserData }: ProfileHeaderProps) {
	const userRole = await getUserRole();
	const studentsClass = userRole === 'student' ? await getStudentClass('name') : null;

	return (
		<>
			<Image src={Avatar} alt='Your avatar' width={70} height={70} />

			<div className={styles.roleAndClass}>
				<h2 className={styles.profileName}>
					{loggedUserData.firstName} {loggedUserData.lastName}
				</h2>

				<h3 className={styles.profileRole}>{getRoleLabel(loggedUserData.role)}</h3>

				{rolesAllowedToViewClasses.includes(userRole) && (
					<h3 className={styles.profileClass}>{studentsClass}</h3>
				)}
			</div>
		</>
	);
}
