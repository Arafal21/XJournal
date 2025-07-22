import styles from './LoginHelperButtonsContainer.module.scss';
import { LoginHelperButton } from '../../ui/buttons/LoginHelperButton/LoginHelperButton';
import { rolesMappingValues } from '../../constants/academicConstans';
import { envMapping } from '../../utils/envMappingRoles';

interface LoginHelperButtonsContainerProps {
	setIsSelectedRoleHelper: (roleKey: string) => void;
	setFormData: (data: { email: string; password: string }) => void;
}

export function LoginHelperButtonsContainer({
	setIsSelectedRoleHelper,
	setFormData,
}: LoginHelperButtonsContainerProps) {
	return (
		<div className={styles.container}>
			{Object.entries(rolesMappingValues).map(([roleKey, label]) => (
				<LoginHelperButton
					key={roleKey}
					onClick={() => {
						setIsSelectedRoleHelper(roleKey);
						const { email, password } = envMapping[roleKey] || { email: '', password: '' };
						setFormData({ email, password });
					}}>
					{label}
				</LoginHelperButton>
			))}
		</div>
	);
}
