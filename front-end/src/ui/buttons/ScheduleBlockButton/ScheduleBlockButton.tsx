import styles from './ScheduleBlockButton.module.scss';

interface ScheduleBlockButtonProps {
	theme: string;
	lessonName?: string;
	lessonTime?: string;
	lessonTeacher?: string;
	onClick: () => void;
	disabled: boolean;
}

export function ScheduleBlockButton({
	theme,
	lessonName,
	lessonTime,
	lessonTeacher,
	onClick,
	disabled,
}: ScheduleBlockButtonProps) {
	const emptyBlock = theme === 'empty';

	return (
		<button
			type='button'
			disabled={disabled}
			className={`${styles.block} ${theme} ${emptyBlock ? styles.empty : styles.scheduledBlock}`}
			onClick={onClick}>
			<span className={`${styles.subject} themeTextColor`}>{lessonName}</span>
			<span className={`${styles.time} themeTextColor`}>{lessonTime}</span>
			<span className={`${styles.person} themeTextColor`}>{lessonTeacher}</span>
			{emptyBlock && <span className={styles.emptyText}>Add new</span>}
		</button>
	);
}
