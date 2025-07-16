'use client';

import { createContext, Dispatch, SetStateAction, useState } from 'react';

interface SelectedSubjectContext {
	selectedSubject: string;
	setSelectedSubject: Dispatch<SetStateAction<string>>;
}

export const SelectedSubjectContext = createContext<SelectedSubjectContext>({
	selectedSubject: 'loading...',
	setSelectedSubject: () => {},
});

interface SelectedSubjectProviderProps {
	children: React.ReactNode;
	initialSubject: string;
}

export const SelectedSubjectContextProvider: React.FC<SelectedSubjectProviderProps> = ({
	children,
	initialSubject,
}) => {
	const [selectedSubject, setSelectedSubject] = useState(initialSubject);

	return (
		<SelectedSubjectContext.Provider value={{ selectedSubject, setSelectedSubject }}>
			{children}
		</SelectedSubjectContext.Provider>
	);
};
