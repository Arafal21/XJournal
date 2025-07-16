import styles from './GradeSubject.module.scss';

export function GradeSubject({ children }: { children: React.ReactNode }) {
	return <p className={styles.subjectText}>{children}</p>;
}
