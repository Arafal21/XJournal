'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface SelectedSemesterContext {
	selectedSemester: string;
	setSelectedSemester: Dispatch<SetStateAction<string>>;
}

export const SelectedSemesterContext = createContext<SelectedSemesterContext>({
	selectedSemester: 'loading...',
	setSelectedSemester: () => {},
});

interface SelectedSemesterProviderProps {
	children: React.ReactNode;
	initialSemester: string;
}

export const SelectedSemesterContextProvider: React.FC<SelectedSemesterProviderProps> = ({
	children,
	initialSemester,
}) => {
	const [selectedSemester, setSelectedSemester] = useState(initialSemester);

	return (
		<SelectedSemesterContext.Provider value={{ selectedSemester, setSelectedSemester }}>
			{children}
		</SelectedSemesterContext.Provider>
	);
};
