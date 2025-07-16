import styles from './TextInput.module.scss';

interface TextInputProps {
	id?: string;
	placeholder: string;
	value?: string;
	defaultValue?: string;
	name: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput({ defaultValue = '', onChange, name, placeholder, id }: TextInputProps) {
	return (
		<input
			id={id}
			type='text'
			className={styles.input}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
			defaultValue={defaultValue}
		/>
	);
}
