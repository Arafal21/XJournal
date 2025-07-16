import styles from './LastActivity.module.scss';

import { formatDateWithToday } from '../../utils/formatDateWithToday';
import { type DetailedUserData } from '../../types/sessionTypes';

interface LastActivityProps {
	loggedUserData: DetailedUserData;
}

export function LastActivity({ loggedUserData }: LastActivityProps) {
	return (
		<>
			<h2 className={styles.activityTitle}>Your Activity</h2>
			<time className={styles.lastLoginInfo}>Last login: {formatDateWithToday(loggedUserData.lastLogin)}</time>
		</>
	);
}
