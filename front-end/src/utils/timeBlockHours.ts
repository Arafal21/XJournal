import { lessonTimeBoundaries } from '../constants/academicConstans';

export function timeBlockHours(index: number) {
	let startHour = lessonTimeBoundaries[index];
	let endHour = lessonTimeBoundaries[index + 1];

	return {
		startHour,
		endHour,
	};
}
