import { redirect } from 'next/navigation';
import { BASE_ROUTE } from '../../../constants/routing';

export const metadata = {
	title: 'Admin Panel - Update People Records with XJournal',
	description:
		'As a director, easily manage and update student, teacher, and staff records. XJournal offers a streamlined process for maintaining accurate user information.',
};

export default function PrincipalPanelFilterPage() {
	const allFilter = 'all'
	redirect(`/${BASE_ROUTE}/principal-panel/${allFilter}`);
}
