import styles from './UserTypeRadioGroup.module.scss';

import { UserType } from '../../types/principalPanelProps';
import { RadioButton } from '../../ui/buttons/RadioButton/RadioButton';

interface UserTypeRadioGroupProps {
	userType: UserType;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UserTypeRadioGroup({ userType, onChange }: UserTypeRadioGroupProps) {
	return (
		<div className={styles.radioGroup}>
			<h3 className={styles.heading}>User type</h3>

			<RadioButton checked={userType === 'teacher'} onChange={onChange} name='userType' value='teacher'>
				Teacher
			</RadioButton>

			<RadioButton
				checked={userType === 'parentAndStudent'}
				onChange={onChange}
				name='userType'
				value='parentAndStudent'>
				Parent &amp; Student
			</RadioButton>
		</div>
	);
}
