'use client';

import styles from './AnnouncementItemContent.module.scss';

import { AnnouncementModal } from '../AnnouncementModal/AnnouncementModal';
import { EditButton } from '../../ui/buttons/EditButton/EditButton';
import { DeleteButton } from '../../ui/buttons/DeleteButton/DeleteButton';
import { ExpandButton } from '../../ui/buttons/ExpandButton/ExpandButton';
import { useResponsive } from '../../hooks/useResponsive';
import { UserBadge } from '../UserBadge/UserBadge';
import { useModeratingRole } from '../../contexts/ModeratingRolesContext';
import { formatUTCToLongDate } from '../../utils/formatUTCToLongDate';
import { Announcement } from '../../types/announcementProps';

interface AnnouncementItemContentProps {
	announcement: Announcement;
	isWrapped: boolean;
	toggleWrapped: () => void;
	isModalVisible: boolean;
	closeModal: () => void;
	currentAnnouncement: Announcement | null;
	onEdit: (announcement: Announcement) => void;
	onDelete: (id: string) => Promise<void>;
}

export function AnnouncementItemContent({
	announcement,
	isWrapped,
	toggleWrapped,
	isModalVisible,
	closeModal,
	currentAnnouncement,
	onEdit,
	onDelete,
}: AnnouncementItemContentProps) {
	const { isMobile } = useResponsive();
	const moderatingRole = useModeratingRole();

	const handleMobileClick = () => {
		if (isMobile && moderatingRole) {
			onEdit(announcement);
		}
	};

	return (
		<>
			<div className={styles.createdInfo} onClick={isMobile && moderatingRole ? handleMobileClick : undefined}>
				<UserBadge
					isFullWidth={true}
					isRoleRequired={true}
					firstName={announcement.addedBy.firstName}
					lastName={announcement.addedBy.lastName}
					role={announcement.addedBy.role}
				/>

				<div className={styles.actions}>
					<time dateTime={announcement.createdAt} className={styles.postedAt}>
						{formatUTCToLongDate(announcement.createdAt)}
					</time>

					{moderatingRole && (
						<div className='hiddenOnMobile'>
							<EditButton onClick={() => onEdit(announcement)} />
							<DeleteButton onClick={() => onDelete(announcement._id)} />
						</div>
					)}
				</div>
			</div>

			<div className={styles.line}></div>

			<p
				className={`${styles.announcementText} ${!isWrapped ? styles.announcementTextExtended : null}`}
				onClick={isMobile && moderatingRole ? handleMobileClick : undefined}>
				{announcement.description}
			</p>

			<ExpandButton onClick={toggleWrapped} isOpen={isWrapped} />

			<AnnouncementModal
				isModalVisible={isModalVisible}
				closeModal={closeModal}
				currentAnnouncement={currentAnnouncement}
			/>
		</>
	);
}
