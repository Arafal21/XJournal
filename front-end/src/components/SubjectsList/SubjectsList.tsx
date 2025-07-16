import styles from './SubjectsList.module.scss';

import { rolesAllowedToViewAllSubjects } from '../../constants/permissions';

import { convertValue } from '../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend } from '../../constants/subjects';
import { getTeacherSubject, getUserRole } from '../../api/profileDataApi';

interface SubjectsListProps {
	subjects: string[];
}

export async function SubjectsList({ subjects }: SubjectsListProps) {
	const userRole = await getUserRole();

	const teacherSubject = userRole === 'teacher' ? await getTeacherSubject() : '';

	return (
		<>
			<h2 className={styles.subjectsHeading}>Your Subjects</h2>

			{rolesAllowedToViewAllSubjects.includes(userRole) ? (
				<ul className={styles.subjectsContainer}>
					{subjects.map((subject) => (
						<li key={subject} className={styles.subjectItem}>
							{subject}
						</li>
					))}
				</ul>
			) : (
				<div className={styles.subjectsContainer}>
					<p className={styles.subjectItem}>
						{convertValue(subjectKeysForBackend, availableSubjects, teacherSubject)}
					</p>
				</div>
			)}
		</>
	);
}
