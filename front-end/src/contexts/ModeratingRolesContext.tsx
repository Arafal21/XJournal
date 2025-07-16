// const moderatingRole = useModeratingRole();
// indicates whether the person is logged in as principal or teacher

'use client';

import { createContext, useContext } from 'react';


const ModeratingRolesContext = createContext<string | null>(null);

interface ModeratingRolesProviderProps {
	children: React.ReactNode;
	value: string | null;
}

export function ModeratingRolesProvider({ children, value }: ModeratingRolesProviderProps) {
	return <ModeratingRolesContext.Provider value={value}>{children}</ModeratingRolesContext.Provider>;
}

export function useModeratingRole(): string | null {
	return useContext(ModeratingRolesContext);
}
