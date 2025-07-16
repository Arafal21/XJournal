export interface LessonScheduleActionModalProps {
	isModalVisible: boolean;
	handleToggleModal: () => void;
	selectedSubject: number | null;
	setSelectedSubject: (grade: number) => void;
}

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

export interface LessonFromApi {
	_id: string;
	subject: string;
	startTime: string;
	endTime: string;
	dayOfWeek: DayOfWeek;
}

export type ScheduleData = LessonFromApi[];

export interface scheduleDataProps {
	scheduleData: ScheduleData;
}

export interface SelectedHours {
	startHour: string;
	endHour: string;
}
