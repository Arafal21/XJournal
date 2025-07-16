import styles from './LargeCloseButton.module.scss';

export function LargeCloseButton({ onClick }: { onClick: () => void }) {
	return (
		<button aria-label='Close button' onClick={onClick} type='button' className={styles.closeModalBtn}>
			close
		</button>
	);
}
