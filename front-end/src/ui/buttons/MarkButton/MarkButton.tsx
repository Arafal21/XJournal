import styles from './MarkButton.module.scss';

interface MarkButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	selectedGrade: number
}

export function MarkButton({ children, onClick, selectedGrade }: MarkButtonProps) {
	return (
		<button type="button" className={styles.grades} aria-label={`mark ${selectedGrade}`} onClick={onClick}>
			{children}
		</button>
	);
}
