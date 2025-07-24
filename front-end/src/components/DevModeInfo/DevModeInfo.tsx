import styles from './DevModeInfo.module.scss';

export function DevModeInfo() {
	return (
		<p className={styles.info}>All changes occur in “developer mode,” so any edits—announcements, data tweaks, etc.—will automatically reset to the original state after 20 minutes.</p>
	);
}
