export interface AnnouncementProps {
	_id: string;
	description: string;
	addedBy: {
		username: string;
		role: string;
	};
	createdAt: string;
}

export interface UserAnnouncementProps {
	id: string;
	text: string;
	postedByUserId: string;
	userRoleId: string;
	postedAt: string;
	avatar: string;
}

export interface AnnouncementItemProps {
	announcement: Announcement;
}

export interface AnnouncementModalProps {
	isModalVisible: boolean;
	closeModal: () => void;
	currentAnnouncement?: Announcement | null;
}

export interface Announcement {
	_id: string;
	description: string;
	addedBy: {
		firstName: string;
		lastName: string;
		role: string;
	};
	createdAt: string;
	updatedAt?: string;
}

export interface AddNewAnnouncementButtonProps {
	addNewAnnoucement: () => void;
}

export interface AnnouncementProps {
	description: string;
	createdAt: string;
}

export interface Announcement {
	_id: string;
	description: string;
	createdAt: string;
}

export interface AnnouncementActionModalProps {
	closeModal: () => void;
	isModalExtended: boolean;
	setIsModalExtended: React.Dispatch<React.SetStateAction<boolean>>;
	currentAnnouncement?: Announcement | null;
}

export interface AnnouncementsFormState {
	announcementTextArea: string;
	announcementTextAreaError?: boolean;
	error?: any;
}

export interface ModalSubmitButtonProps {
	isFormValid: boolean;
}

export interface AnnouncementItemProps {
	announcement: Announcement;
}
