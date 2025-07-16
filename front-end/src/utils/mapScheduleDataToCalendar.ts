import { availableSubjects, subjectKeysForBackend } from "../constants/subjects";
import { LessonFromApi } from "../types/lessonScheduleProps";
import { convertValue } from "./convertValue";

export function mapScheduleDataToCalendar(raw: LessonFromApi[]) {
	const emptyDaySlots = Array<string>(9).fill('');
	const calendar: Record<string, string[]> = {
		Monday: [...emptyDaySlots],
		Tuesday: [...emptyDaySlots],
		Wednesday: [...emptyDaySlots],
		Thursday: [...emptyDaySlots],
		Friday: [...emptyDaySlots],
	};

	raw.forEach((lesson) => {
		const dayCapitalized = lesson.dayOfWeek.charAt(0).toUpperCase() + lesson.dayOfWeek.slice(1).toLowerCase();
		const displaySubject = convertValue(subjectKeysForBackend, availableSubjects, lesson.subject);
		const startHour = parseInt(lesson.startTime.split(':')[0], 10);
		const slotIndex = startHour - 8;
		if (slotIndex >= 0 && slotIndex < 9 && calendar[dayCapitalized]) {
			calendar[dayCapitalized][slotIndex] = displaySubject;
		}
	});

	return calendar;
}