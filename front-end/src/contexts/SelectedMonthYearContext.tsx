'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { getCurrentYear } from '../utils/getCurrentYear';

interface MonthYear {
	month: string;
	year: number;
}

interface SelectedMonthYearContextType extends MonthYear {
	setMonth: Dispatch<SetStateAction<string>>;
	setYear: Dispatch<SetStateAction<number>>;
}

export const SelectedMonthYearContext = createContext<SelectedMonthYearContextType>({
	month: 'loading...',
	year: getCurrentYear(),
	setMonth: () => {},
	setYear: () => {},
});

interface SelectedMonthYearProviderProps {
	initialMonth: string;
	initialYear: number;
	children: React.ReactNode;
}

export const SelectedMonthYearContextProvider: React.FC<SelectedMonthYearProviderProps> = ({
	children,
	initialMonth,
	initialYear,
}) => {
	const [month, setMonth] = useState(initialMonth);
	const [year, setYear] = useState(initialYear);

	return (
		<SelectedMonthYearContext.Provider value={{ month, year, setMonth, setYear }}>
			{children}
		</SelectedMonthYearContext.Provider>
	);
};

// usage:
// const { selectedMonthYear, setSelectedMonthYear } = use(SelectedMonthYearContext);
