'use client';

import { use } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { SelectedClassContext } from '../contexts/SelectedClassContext';
import { SelectedSubjectContext } from '../contexts/SelectedSubjectContext';
import { SelectedSemesterContext } from '../contexts/SelectedSemesterContext';

import { BASE_ROUTE } from '../constants/routing';
import { SelectedMonthYearContext } from '../contexts/SelectedMonthYearContext';

interface NavigateOpts {
	className?: string;
	semester?: string;
	subject?: string;
	month?: string;
	year?: number;
}

export function useRouteNavigation() {
	const router = useRouter();
	const currentPath = usePathname();

	const { selectedClass, setSelectedClass } = use(SelectedClassContext);
	const { selectedSemester, setSelectedSemester } = use(SelectedSemesterContext);
	const { selectedSubject, setSelectedSubject } = use(SelectedSubjectContext);

	const {
		month: selectedMonthYear,
		year: selectedYear,
		setMonth: setSelectedMonthYear,
		setYear: setSelectedYear,
	} = use(SelectedMonthYearContext);

	function getBasePath(path: string): string {
		const segments = path.split('/');
		return `/${segments[1]}/${segments[2]}`;
		// segments[0] === "" (path starts at '/')
		// segments[1] === "BASE_ROUTE" (logged currently is BASE_ROUTE)
		// segments[2] === "grades" or "lesson-schedule" etc.
	}

	const navigate = ({ className, semester, subject, month, year }: NavigateOpts) => {
		const cls = className ?? selectedClass;
		const sem = semester ?? selectedSemester;
		const subj = subject ?? selectedSubject;
		const mon = month ?? selectedMonthYear;
		const yr = year ?? selectedYear;

		if (className) setSelectedClass(className);
		if (semester) setSelectedSemester(semester);
		if (subject) setSelectedSubject(subject);
		if (month) setSelectedMonthYear(month);
		if (year) setSelectedYear(year);

		const basePath = getBasePath(currentPath);

		switch (basePath) {
			case `/${BASE_ROUTE}/grades`:
				router.push(`${basePath}/${cls}?semester=${sem}&subject=${subj}`, { scroll: false });
				break;

			case `/${BASE_ROUTE}/calendar`: {
				const url = `${basePath}/${cls}?month=${mon}&year=${yr}`;

				router.push(url, { scroll: false });
				break;
			}

			case `/${BASE_ROUTE}/presence`:
			case `/${BASE_ROUTE}/lesson-schedule`:
				router.push(`${basePath}/${cls}`, { scroll: false });
				break;
		}
	};

	return {
		selectedClass,
		selectedSemester,
		selectedSubject,
		selectedMonthYear,
		selectedYear,
		navigateToGrades: navigate,
	};
}
