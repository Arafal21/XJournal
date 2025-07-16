import { LessonFromApi, SelectedHours } from '../../types/lessonScheduleProps';
import { HoursDesktop } from '../HoursDesktop/HoursDesktop';
import { ScheduleBlockDesktop } from '../ScheduleBlockDesktop/ScheduleBlockDesktop';

interface DesktopScheduleViewProps {
	setSelectedHour: (hours: SelectedHours | null) => void;
	handleToggleModal: () => void;
	scheduleData: LessonFromApi[];
	isTeacherOrPrincipal: boolean;
	setSelectedLesson: (lessonId: string | null) => void;
}

export function DesktopScheduleView({setSelectedHour, handleToggleModal, scheduleData, isTeacherOrPrincipal, setSelectedLesson}: DesktopScheduleViewProps) {
	return (
		<>
			<HoursDesktop />
			<ScheduleBlockDesktop
				setSelectedLesson={setSelectedLesson}
				setSelectedHour={setSelectedHour}
				handleToggleModal={handleToggleModal}
				scheduleData={scheduleData}
				isTeacherOrPrincipal={isTeacherOrPrincipal}
			/>
		</>
	);
}
