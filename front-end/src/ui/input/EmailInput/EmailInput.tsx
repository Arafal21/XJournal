import styles from './EmailInput.module.scss';

interface EmailInputProps {
	id?: string;
	placeholder: string;
	value?: string;
	defaultValue?: string;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EmailInput({ defaultValue = '', name, onChange, id, placeholder }: EmailInputProps) {
	return (
		<input
			id={id}
			type='email'
			className={styles.input}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
			defaultValue={defaultValue}
		/>
	);
}
