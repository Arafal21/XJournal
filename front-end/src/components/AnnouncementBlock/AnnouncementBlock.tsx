import { AnnouncementItem } from '../AnnouncementItem/AnnouncementItem';
import { fetchAnnouncements } from '../../api/announcementsApi';
import { Announcement } from '../../types/announcementProps';

export async function AnnouncementBlock() {
	try {
		const announcements = await fetchAnnouncements();

		return announcements.map((announcement: Announcement) => (
			<AnnouncementItem key={announcement._id} announcement={announcement} />
		));
	} catch (error) {
		console.error('Error fetching announcements:', error);
		return <div>Error fetching announcements</div>;
	}
}
