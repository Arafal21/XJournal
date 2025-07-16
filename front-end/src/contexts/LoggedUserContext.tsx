// const { firstName, lastName, role } = useLoggedUser();
// data can be extracted like: first name, last name, role

'use client';

import { createContext, useContext } from 'react';
import { type DetailedUserData  } from '../types/sessionTypes';


const LoggedUserContext = createContext<DetailedUserData | null>(null);

interface UserProviderProps {
	user: DetailedUserData;
	children: React.ReactNode;
}

export function UserProvider({ user, children }: UserProviderProps) {
	return <LoggedUserContext.Provider value={user}>{children}</LoggedUserContext.Provider>;
}

export function useLoggedUser(): DetailedUserData {
	const ctx = useContext(LoggedUserContext);
	if (!ctx) throw new Error('useLoggedUser must be inside a UserProvider');
	return ctx;
}
