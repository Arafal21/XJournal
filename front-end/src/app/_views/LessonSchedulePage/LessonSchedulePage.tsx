import { ScheduleComponent } from '../../../components/ScheduleComponent/ScheduleComponent';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';

import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';
import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';

import { SelectedClassContextProvider } from '../../../contexts/SelectedClassContext';
import { SelectedSubjectContextProvider } from '../../../contexts/SelectedSubjectContext';
import { moderatingRoles } from '../../../constants/permissions';
import { SelectedDayContextProvider } from '../../../contexts/SelectedDayContext';
import { initialSchoolDay } from '../../../constants/academicConstans';
import { initialAvailableSubject } from '../../../constants/subjects';
import { getUserRole } from '../../../api/profileDataApi';
import { Suspense } from 'react';
import { LoadingThreeDotsJumping } from '../../../components/MotionDev/LoadingThreeDotsJumping';

interface LessonSchedulePageProps {
	selectedClass: string;
}

export async function LessonSchedulePage({ selectedClass }: LessonSchedulePageProps) {
	const userRole = await getUserRole();
	const isTeacherOrPrincipal = moderatingRoles.includes(userRole);

	return (
		<>
			<H1Company />
			<SelectedClassContextProvider initialClass={selectedClass}>
				<SelectedSubjectContextProvider initialSubject={initialAvailableSubject}>
					<SelectedDayContextProvider initialDay={initialSchoolDay}>

						<Header isFullHeader={isTeacherOrPrincipal} isMobileHeaderShowed={false} />
						<WrapperLogged white300OnBgMobile={false} paddingOnMobile={true}>
							<BackgroundMainContentDesktop padding={true}>
								<main>

									<Suspense fallback={<LoadingThreeDotsJumping/>}>
										<ScheduleComponent
											isTeacherOrPrincipal={isTeacherOrPrincipal}
											selectedClass={selectedClass}
										/>
									</Suspense>

								</main>
							</BackgroundMainContentDesktop>
						</WrapperLogged>

					</SelectedDayContextProvider>
				</SelectedSubjectContextProvider>
			</SelectedClassContextProvider>
		</>
	);
}
