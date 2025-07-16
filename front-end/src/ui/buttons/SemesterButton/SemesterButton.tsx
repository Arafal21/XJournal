'use client';

import styles from './SemesterButton.module.scss';

interface SemesterButtonProps {
	semester: string;
	currentSemester: string;
	onClick: () => void;
	first?: boolean;
	children: React.ReactNode;
}

export function SemesterButton({ semester, currentSemester, onClick, first = false, children }: SemesterButtonProps) {
	const isActive = semester === currentSemester;

	return (
		<button
			className={`${isActive ? styles.active : null} ${styles.semesterBtn} ${first ? styles.buttonMargin : null}`}
			onClick={onClick}>
			{children}
		</button>
	);
}
