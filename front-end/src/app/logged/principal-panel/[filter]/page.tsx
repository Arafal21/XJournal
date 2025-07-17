import { PrincipalPanelPage } from '../../../_views/PrincipalPanelPage/PrincipalPanelPage';

export const metadata = {
	title: 'Admin Panel - Update People Records with XJournal',
	description:
		'As a principal, easily manage and update student, teacher, and staff records. XJournal offers a streamlined process for maintaining accurate user information.',
};

interface PrincipalPanelRouteProps {
	params: Promise<{ filter: string }>;
}

export default async function PrincipalPanelRoute({ params }: PrincipalPanelRouteProps) {
	const { filter } = await params;
	
	return <PrincipalPanelPage filter={filter} />;
}
