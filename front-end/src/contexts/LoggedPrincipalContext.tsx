// const isPrincipal = useLoggedPrincipal();
// indicates whether the person is logged in as principal

'use client';

import { createContext, useContext } from 'react';

type LoggedPrincipal = 'principal' | null;

const LoggedPrincipalContext = createContext<LoggedPrincipal>(null);

interface LoggedPrincipalProviderProps {
	children: React.ReactNode;
	value: LoggedPrincipal;
}

export function LoggedPrincipalProvider({ children, value }: LoggedPrincipalProviderProps) {
	return <LoggedPrincipalContext.Provider value={value}>{children}</LoggedPrincipalContext.Provider>;
}

export function useLoggedPrincipal(): LoggedPrincipal {
	return useContext(LoggedPrincipalContext);
}