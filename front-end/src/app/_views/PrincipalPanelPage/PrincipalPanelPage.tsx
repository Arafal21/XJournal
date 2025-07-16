import { getInitialClass } from '../../../api/adminApi';
import { getUserRole } from '../../../api/profileDataApi';

import { AdminPanel } from '../../../components/AdminPanel/AdminPanel';
import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { MVPInformationMobile } from '../../../components/MVPInformation/MVPInformationMobile';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';

import { moderatingRoles } from '../../../constants/permissions';
import { initialSubjectKey } from '../../../constants/subjects';

import { SearchProvider } from '../../../contexts/SearchContext';
import { SelectedClassContextProvider } from '../../../contexts/SelectedClassContext';
import { SelectedSubjectContextProvider } from '../../../contexts/SelectedSubjectContext';
import { SelectedUserAdminProvider } from '../../../contexts/SelectedUserAdminContext';

interface PrincipalPanelPageProps {
	filter: string;
}

export async function PrincipalPanelPage({ filter }: PrincipalPanelPageProps) {
	const userRole = await getUserRole();
	const initialClass = moderatingRoles.includes(userRole) ? await getInitialClass() : '';

	return (
		<>
			<H1Company />
			<SelectedClassContextProvider initialClass={initialClass}>
				<SelectedSubjectContextProvider initialSubject={initialSubjectKey}>

					<SearchProvider>
						<SelectedUserAdminProvider>

							<Header isFullHeader={false} isMobileHeaderShowed={false} />
							<WrapperLogged white300OnBgMobile={false} paddingOnMobile={true}>
								<BackgroundMainContentDesktop padding={true}>
									<main>
										<MVPInformationMobile />
										<AdminPanel filter={filter} />
									</main>
								</BackgroundMainContentDesktop>
							</WrapperLogged>

						</SelectedUserAdminProvider>
					</SearchProvider>

				</SelectedSubjectContextProvider>
			</SelectedClassContextProvider>
		</>
	);
}
