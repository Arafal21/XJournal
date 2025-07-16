import styles from './ExamSelecting.module.scss';

import { RadioButton } from '../../ui/buttons/RadioButton/RadioButton';

interface ExamSelectingProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	selectedExamType: 'quiz' | 'test' | null;
}

export function ExamSelecting({ onChange, selectedExamType }: ExamSelectingProps) {
	return (
		<>
			<p className={styles.heading}>Event type</p>

			<RadioButton checked={selectedExamType === 'quiz'} onChange={onChange} name='examType' value='quiz'>
				Quiz
			</RadioButton>

			<RadioButton checked={selectedExamType === 'test'} onChange={onChange} name='examType' value='test'>
				Test
			</RadioButton>
		</>
	);
}
