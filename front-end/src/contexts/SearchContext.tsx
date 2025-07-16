'use client';

import { createContext, useContext, useState } from 'react';

interface SearchContextType {
	searchTerm: string;
	setSearchTerm: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
	const [searchTerm, setSearchTerm] = useState('');

	return <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>{children}</SearchContext.Provider>;
}

export function useSearch() {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error('useSearch must be used within a SearchProvider');
	}
	return context;
}
