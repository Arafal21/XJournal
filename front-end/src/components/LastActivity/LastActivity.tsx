import styles from './LastActivity.module.scss';

import { type DetailedUserData } from '../../types/sessionTypes';
import { formatUTCToLongDate } from '../../utils/formatUTCToLongDate';

interface LastActivityProps {
	loggedUserData: DetailedUserData;
}

export function LastActivity({ loggedUserData }: LastActivityProps) {
	return (
		<>
			<h2 className={styles.activityTitle}>Your Activity</h2>
			<time className={styles.lastLoginInfo}>Last login: {formatUTCToLongDate(loggedUserData.lastLogin)}</time>
		</>
	);
}
