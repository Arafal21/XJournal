import { fetchUserProfile, getUserRole } from '../../api/profileDataApi';

import { LayoutForLoggedIn } from '../../components/LayoutForLoggedIn/LayoutForLoggedIn';

import { moderatingRoles } from '../../constants/permissions';

import { LoggedPrincipalProvider } from '../../contexts/LoggedPrincipalContext';
import { UserProvider } from '../../contexts/LoggedUserContext';
import { ModeratingRolesProvider } from '../../contexts/ModeratingRolesContext';

export default async function RootLayoutForLoggedIn({ children }: { children: React.ReactNode }) {
	const user = await fetchUserProfile();

	const role = await getUserRole();

	const teacherOrPrincipal = moderatingRoles.includes(role) ? role : null;

	const isPrincipal = role === 'principal' ? 'principal' : null;

	return (
		<ModeratingRolesProvider value={teacherOrPrincipal}>
			<LoggedPrincipalProvider value={isPrincipal}>
				<UserProvider user={user}>
					<LayoutForLoggedIn>{children}</LayoutForLoggedIn>
				</UserProvider>
			</LoggedPrincipalProvider>
		</ModeratingRolesProvider>
	);
}
