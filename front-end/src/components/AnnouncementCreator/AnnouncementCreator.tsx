'use client';

import { useState } from 'react';
import { AddNewAnnouncementButton } from '../../ui/buttons/AddNewAnnouncementButton/AddNewAnnouncementButton';
import { AnnouncementModal } from '../AnnouncementModal/AnnouncementModal';

export function AnnouncementCreator() {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const toggleNewAnnouncement = () => {
		setIsModalVisible((prevState) => !prevState);
	};

	return (
		<>
			<AddNewAnnouncementButton addNewAnnoucement={toggleNewAnnouncement} />
			<AnnouncementModal isModalVisible={isModalVisible} closeModal={toggleNewAnnouncement} />
		</>
	);
}
