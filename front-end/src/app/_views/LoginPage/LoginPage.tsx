import { H1Company } from '../../../components/H1Company/H1Company';
import { LoginForm } from '../../../components/LoginForm/LoginForm';
import { LoginSloganBanner } from '../../../components/LoginSloganBanner/LoginSloganBanner';

export function LoginPage() {
	return (
		<main>
			<LoginForm>
				<H1Company />
				<LoginSloganBanner />
			</LoginForm>
		</main>
	);
}
