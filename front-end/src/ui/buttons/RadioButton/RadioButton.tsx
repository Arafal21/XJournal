import styles from './RadioButton.module.scss';

interface RadioButtonProps {
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	value: string;
	children: React.ReactNode;
}

export function RadioButton({ checked, onChange, name, value, children }: RadioButtonProps) {
	return (
		<label className={styles.radioItem}>
			<input type='radio' name={name} value={value} checked={checked} onChange={onChange} />
			<span className={styles.radioCustom}></span>
			{children}
		</label>
	);
}
