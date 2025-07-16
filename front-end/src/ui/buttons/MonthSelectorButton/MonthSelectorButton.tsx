'use client'
import styles from './MonthSelectorButton.module.scss';

interface MonthSelectorButtonProps {
	months: string[];
	activeMonth: number;
	setActiveMonth: (index: number) => void;
}

export function MonthSelectorButton({ months, activeMonth, setActiveMonth }: MonthSelectorButtonProps) {
	return (
		<div className={styles.months}>
			{months.map((month, index) => (
				<button
					key={month}
					className={`${styles.monthSelectingBtn} ${index === activeMonth ? styles.active : null}`}
					onClick={() => setActiveMonth(index)} 
				>
					{month}
				</button>
			))}
		</div>
	);
}

