import { LoginPage } from '../_views/LoginPage/LoginPage';

export const metadata = {
	title: "Welcome to XJournal - Your School's E-Journal",
	description: 'Login to the school e-journal designed to streamline communication, track progress, and manage school activities with ease. Stay connected and organized',
};

export default function LoginPageRoute() {
	return (
		<>
			<LoginPage />
		</>
	);
}