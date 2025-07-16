'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface SelectedDayContextType {
	selectedDay: string;
	setSelectedDay: Dispatch<SetStateAction<string>>;
}

export const SelectedDayContext = createContext<SelectedDayContextType>({
	selectedDay: 'loading...',
	setSelectedDay: () => {},
});

interface SelectedDayProviderProps {
	children: React.ReactNode;
	initialDay: string;
}

export const SelectedDayContextProvider: React.FC<SelectedDayProviderProps> = ({ children, initialDay }) => {
	const [selectedDay, setSelectedDay] = useState<string>(initialDay);

	return (
		<SelectedDayContext.Provider value={{ selectedDay, setSelectedDay }}>{children}</SelectedDayContext.Provider>
	);
};

// usage
// const { selectedDay, setSelectedDay } = use(SelectedDayContext);
