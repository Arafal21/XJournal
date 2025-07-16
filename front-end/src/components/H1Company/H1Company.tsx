/**
  Renders a visually hidden <h1> so screen readers pick up the main page title
  (XJournal) without showing it on screen. Keeps your heading structure
  semantically correct while staying out of the visual layout.
 */

import styles from './H1Company.module.scss';

export function H1Company() {
	return <h1 className={styles.srOnly}>XJournal</h1>;
}
