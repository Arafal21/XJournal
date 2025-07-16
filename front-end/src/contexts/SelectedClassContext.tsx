'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

interface SelectedClassContextType {
	selectedClass: string;
	setSelectedClass: Dispatch<SetStateAction<string>>;
}

export const SelectedClassContext = createContext<SelectedClassContextType>({
	selectedClass: 'loading...',
	setSelectedClass: () => {},
});

interface SelectedClassProviderProps {
	children: React.ReactNode;
	initialClass: string;
}

export const SelectedClassContextProvider: React.FC<SelectedClassProviderProps> = ({ children, initialClass }) => {
	const [selectedClass, setSelectedClass] = useState<string>(initialClass);

	return (
		<SelectedClassContext.Provider value={{ selectedClass, setSelectedClass }}>
			{children}
		</SelectedClassContext.Provider>
	);
};

// usage:
// const { selectedClass, setSelectedClass } = use(SelectedClassContext);
