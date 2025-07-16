import { availableMonths } from '../constants/calendar';
import { getCurrentYear } from './getCurrentYear';

export function resolveCalendarParams(searchParams: URLSearchParams): { year: number; monthIndex: number } {
	const monthParam = searchParams.get('month');
	const yearParam = searchParams.get('year');

	const monthIndex = monthParam ? availableMonths.indexOf(monthParam) : new Date().getMonth();

	const year = yearParam ? parseInt(yearParam, 10) : getCurrentYear();

	return { year, monthIndex };
}
