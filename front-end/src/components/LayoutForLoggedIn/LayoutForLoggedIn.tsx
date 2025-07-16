import { fetchUserProfile } from '../../api/profileDataApi';
import { MainContent } from '../MainContent/MainContent';
import { SideNavBar } from '../SideNavBar/SideNavBar';
import { UserBadge } from '../UserBadge/UserBadge';

export async function LayoutForLoggedIn({ children }: { children: React.ReactNode }) {
	const loggedUserData = await fetchUserProfile();

	return (
		<>
			<MainContent>{children}</MainContent>
			<SideNavBar>
				{loggedUserData ? (
					<UserBadge
						isRoleRequired={true}
						isFullWidth={false}
						firstName={loggedUserData.firstName}
						lastName={loggedUserData.lastName}
						role={loggedUserData.role}
					/>
				) : (
					<p>Please log in</p>
				)}
			</SideNavBar>
		</>
	);
}
