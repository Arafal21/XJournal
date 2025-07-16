'use client';

import { useState } from 'react';

import { AnnouncementModalProps } from '../../types/announcementProps';
import { ResponsiveMobileFullModalBase } from '../ResponsiveMobileFullModalBase/ResponsiveMobileFullModalBase';
import { AnnouncementActionModal } from '../../ui/modalContent/AnnouncementModalContent/AnnouncementActionModal';

export function AnnouncementModal({ isModalVisible, closeModal, currentAnnouncement }: AnnouncementModalProps) {
	const [isModalExtended, setIsModalExtended] = useState(false);

	return (
		<>
			<ResponsiveMobileFullModalBase isModalVisible={isModalVisible}>
				<AnnouncementActionModal
					key={currentAnnouncement ? currentAnnouncement._id : 'new'}
					closeModal={closeModal}
					isModalExtended={isModalExtended}
					setIsModalExtended={setIsModalExtended}
					currentAnnouncement={currentAnnouncement}
				/>
			</ResponsiveMobileFullModalBase>
		</>
	);
}
