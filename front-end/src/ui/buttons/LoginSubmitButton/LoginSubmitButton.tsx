import styles from './LoginSubmitButton.module.scss';
import { useFormStatus } from 'react-dom';

export function LoginSubmitButton({ isFormValid }: { isFormValid: boolean }) {
	const { pending } = useFormStatus();

	return (
		<button className={isFormValid ? styles.buttonReady : styles.buttonNoReady}>
			{pending ? 'Logging in...' : 'Log in'}
		</button>
	);
}
