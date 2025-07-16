import styles from './PasswordInput.module.scss';

interface PasswordInputProps {
	name: string;
	type: 'text' | 'password';
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	id?: string;
	defaultValue?: string;
	value?: string;
	placeholder: string;
}

export function PasswordInput({ type, defaultValue = '', name, onChange, placeholder, id }: PasswordInputProps) {
	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder}
			className={styles.input}
			name={name}
			defaultValue={defaultValue}
			onChange={onChange}
		/>
	);
}
