import { getUserRole } from '../../../api/profileDataApi';

import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { CalendarComponent } from '../../../components/CalendarComponent/CalendarComponent';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';

import { SelectedSubjectContextProvider } from '../../../contexts/SelectedSubjectContext';
import { SelectedClassContextProvider } from '../../../contexts/SelectedClassContext';

import { initialAvailableSubject } from '../../../constants/subjects';
import { moderatingRoles } from '../../../constants/permissions';
import { CalendarEvent } from '../../../types/calendarProps';
import { SelectedMonthYearContextProvider } from '../../../contexts/SelectedMonthYearContext';

interface CalendarPageProps {
	selectedClass: string;
	selectedMonthYear: string;
	selectedYear: number;
	calendarData: CalendarEvent[];
}

export async function CalendarPage({
	selectedClass,
	selectedMonthYear,
	selectedYear,
	calendarData,
}: CalendarPageProps) {
	const userRole = await getUserRole();
	const isTeacherOrPrincipal = moderatingRoles.includes(userRole);

	return (
		<>
			<H1Company />
			<SelectedSubjectContextProvider initialSubject={initialAvailableSubject}>
				<SelectedClassContextProvider initialClass={selectedClass}>
					<SelectedMonthYearContextProvider initialMonth={selectedMonthYear} initialYear={selectedYear}>

						<Header isFullHeader={isTeacherOrPrincipal} isMobileHeaderShowed={false} />

						<WrapperLogged white300OnBgMobile={false} paddingOnMobile={true}>
							<BackgroundMainContentDesktop padding={false}>

								<main>
									<CalendarComponent
										isTeacherOrPrincipal={isTeacherOrPrincipal}
										calendarData={calendarData}
									/>
								</main>
								
							</BackgroundMainContentDesktop>
						</WrapperLogged>

					</SelectedMonthYearContextProvider>
				</SelectedClassContextProvider>
			</SelectedSubjectContextProvider>
		</>
	);
}
