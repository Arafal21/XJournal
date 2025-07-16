import styles from './SemesterSection.module.scss';

import { MarkButton } from '../../ui/buttons/MarkButton/MarkButton';
import { GradeSubject } from '../GradeSubject/GradeSubject';
import { availableSubjects, subjectKeysForBackend } from '../../constants/subjects';

interface Grade {
	subject: string;
	grade: number;
}

interface SemesterSectionProps {
	title: string;
	grades: Grade[];
}

export function SemesterSection({ title, grades }: SemesterSectionProps) {
	return (
		<section className={styles.semesterSection}>
			<h2 className={styles.semesterHeading}>{title}</h2>
			<ul>
				{availableSubjects.map((displayName, index) => {
					const key = subjectKeysForBackend[index];
					const list = grades.filter((g) => g.subject === key).map((g) => g.grade);

					return (
						<li className={styles.row} key={`${title}-${key}`}>
							<div>
								<GradeSubject>{displayName}</GradeSubject>
							</div>

							<div className={styles.grades}>
								{list.length > 0 ? (
									list.map((g, index) => <MarkButton key={index} selectedGrade={g}>{g}</MarkButton>)
								) : (
									<span className={styles.noGrade}></span>
								)}
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
