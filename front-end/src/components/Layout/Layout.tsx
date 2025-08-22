import { MainContent } from '../MainContent/MainContent';

export function Layout({ children }: { children: React.ReactNode }) {
	return <MainContent>{children}</MainContent>;
}
