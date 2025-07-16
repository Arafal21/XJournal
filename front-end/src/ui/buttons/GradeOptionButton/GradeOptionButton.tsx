import styles from './GradeOptionButton.module.scss';

interface GradeOptionButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	selectedGrade: number | null;
	grade: number;
}

export function GradeOptionButton({ children, onClick, selectedGrade, grade }: GradeOptionButtonProps) {
	return (
		<button
			type='button'
			className={`${styles.gradeItemBtn} ${selectedGrade === grade ? styles.gradeActive : null}`}
			onClick={onClick}>
			{children}
		</button>
	);
}