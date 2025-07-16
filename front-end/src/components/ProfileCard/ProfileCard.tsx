'use server';

import styles from './ProfileCard.module.scss';

import { LastActivity } from '../LastActivity/LastActivity';
import { SubjectsList } from '../SubjectsList/SubjectsList';
import { ProfileHeader } from '../ProfileHeader/ProfileHeader';
import { availableSubjects } from '../../constants/subjects';
import { fetchUserProfile } from '../../api/profileDataApi';

export async function ProfileCard() {
	try {
		const loggedUserData = await fetchUserProfile();

		return (
			<>
				<section className={styles.profileCard}>
					<ProfileHeader loggedUserData={loggedUserData} />
				</section>

				<section className={styles.yourSubjects}>
					<SubjectsList subjects={availableSubjects} />
				</section>

				<section className={styles.lastActivity}>
					<LastActivity loggedUserData={loggedUserData} />
				</section>
			</>
		);
	} catch {
		return <p>Unfortunately, the profile data could not be fetched.</p>;
	}
}
