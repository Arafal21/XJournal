'use client';

import styles from './AnnouncementItem.module.scss';

import { useState } from 'react';
import { AnnouncementItemContent } from '../AnnouncementItemContent/AnnouncementItemContent';
import { deleteAnnouncement } from '../../api/announcementsApi';
import { Announcement, AnnouncementItemProps } from '../../types/announcementProps';
import { useResponsive } from '../../hooks/useResponsive';
import { BackgroundMainContentDesktop } from '../BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { BackgroundMainContentMobile } from '../BackgroundMainContentMobile/BackgroundMainContentMobile';

export function AnnouncementItem({ announcement }: AnnouncementItemProps) {
	const [isWrapped, setIsWrapped] = useState(true);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | null>(null);

	const { isMobile } = useResponsive();

	const toggleWrapped = () => {
		setIsWrapped(!isWrapped);
	};

	const onEdit = (announcement: Announcement) => {
		setCurrentAnnouncement(announcement);
		setIsModalVisible(true);
	};

	const onDelete = async (id: string) => {
		try {
			await deleteAnnouncement(id);
		} catch (error) {
			alert('Failed to delete announcement');
		}
	};

	const closeModal = () => {
		setIsModalVisible(false);
		setCurrentAnnouncement(null);
	};

	return (
		<article className={styles.announcements}>
			<BackgroundMainContentDesktop padding={true}>
				<BackgroundMainContentMobile>

					<div className={styles.item}>
						<AnnouncementItemContent
							announcement={announcement}
							isWrapped={isWrapped}
							toggleWrapped={toggleWrapped}
							isModalVisible={isModalVisible}
							closeModal={closeModal}
							currentAnnouncement={currentAnnouncement}
							onEdit={onEdit}
							onDelete={onDelete}
						/>
						{isMobile}
					</div>
					
				</BackgroundMainContentMobile>
			</BackgroundMainContentDesktop>
		</article>
	);
}
