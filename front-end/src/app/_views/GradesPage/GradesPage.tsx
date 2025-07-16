'use server';

import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';
import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { GradesPanel } from '../../../components/GradesPanel/GradesPanel';
import { GradesAdminStudent } from '../../../types/gradesProps';
import { SelectedClassContextProvider } from '../../../contexts/SelectedClassContext';
import { SelectedSubjectContextProvider } from '../../../contexts/SelectedSubjectContext';
import { SelectedSemesterContextProvider } from '../../../contexts/SelectedSemesterContext';
import { moderatingRoles } from '../../../constants/permissions';

interface GradesPageProps {
	selectedClass: string;
	initialSemester: string;
	initialSubject: string;
	gradesData: GradesAdminStudent[];
	userRole: string;
}

export async function GradesPage({ selectedClass, initialSemester, initialSubject, gradesData, userRole }: GradesPageProps) {
	const isTeacherOrPrincipal = moderatingRoles.includes(userRole);

	return (
		<>
			<H1Company />
			<SelectedClassContextProvider initialClass={selectedClass}>
				<SelectedSubjectContextProvider initialSubject={initialSubject}>
					<SelectedSemesterContextProvider initialSemester={initialSemester}>

						<Header isFullHeader={isTeacherOrPrincipal} isMobileHeaderShowed={false} />
						<WrapperLogged white300OnBgMobile={false} paddingOnMobile={true}>
							<BackgroundMainContentDesktop padding={true}>
								<main>

									<GradesPanel
										isTeacherOrPrincipal={isTeacherOrPrincipal}
										gradesData={gradesData}
										classId={selectedClass}
									/>
								</main>
							</BackgroundMainContentDesktop>
						</WrapperLogged>
						
					</SelectedSemesterContextProvider>
				</SelectedSubjectContextProvider>
			</SelectedClassContextProvider>
		</>
	);
}
