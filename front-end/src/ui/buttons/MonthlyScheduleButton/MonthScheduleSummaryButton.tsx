import styles from './MonthScheduleSummaryButton.module.scss';

interface MonthScheduleSummaryButtonProps {
	onClick: () => void;
}

export function MonthScheduleSummaryButton({ onClick }: MonthScheduleSummaryButtonProps) {
	return (
		<button className={styles.monthlyBtn} onClick={onClick} type="button">
			monthly schedule
		</button>
	);
}
