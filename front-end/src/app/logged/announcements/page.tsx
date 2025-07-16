import { AnnouncementsPage } from '../../_views/AnnouncementsPage/AnnouncementsPage.tsx';

export const metadata = {
	title: 'Announcements - Stay Updated with XJournal',
	description: 'Check the latest school announcements and important updates. Stay informed about events, schedules, and news through XJournal.',
};

export default function AnnouncementsRoute() {
	return (
		<>
			<AnnouncementsPage />
		</>
	);
}
