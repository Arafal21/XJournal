'use client';

import styles from './AnnouncementActionModal.module.scss';

import { useActionState } from 'react';
import { useState } from 'react';

import { ExtendableModalHeader } from '../../modalHeader/ExtendableModalHeader/ExtendableModalHeader';
import { BackButtonMobile } from '../../buttons/BackButtonMobile/BackButtonMobile';
import { deleteAnnouncement, postNewAnnouncement, updateAnnouncement } from '../../../api/announcementsApi';
import { DeleteButton } from '../../buttons/DeleteButton/DeleteButton';

import { AnnouncementActionModalProps, AnnouncementsFormState } from '../../../types/announcementProps';

import { UserBadge } from '../../../components/UserBadge/UserBadge';
import { useLoggedUser } from '../../../contexts/LoggedUserContext';
import { ModalActionButton } from '../../buttons/ModalActionButton/ModalActionButton';
import { formatUTCToLongDate } from '../../../utils/formatUTCToLongDate';

export function AnnouncementActionModal({
	closeModal,
	isModalExtended,
	setIsModalExtended,
	currentAnnouncement,
}: AnnouncementActionModalProps) {
	const { firstName, lastName, role } = useLoggedUser();

	async function handleSubmit(
		_prevState: AnnouncementsFormState,
		formData: FormData,
	): Promise<AnnouncementsFormState> {
		const state: AnnouncementsFormState = {
			announcementTextArea: formData.get('announcementTextArea') as string,
		};

		if (!state.announcementTextArea.trim()) {
			state.announcementTextAreaError = true;
			return state;
		}

		try {
			if (currentAnnouncement) {
				await updateAnnouncement(_prevState, formData, currentAnnouncement);
			} else {
				await postNewAnnouncement(_prevState, formData);
			}
			setFormDataState({ announcementTextArea: '' });
			closeModal();
			return state;
		} catch (error) {
			state.error = error;
			return state;
		}
	}

	const initialText = currentAnnouncement ? currentAnnouncement.description : '';
	const [state, action] = useActionState(handleSubmit, { announcementTextArea: initialText });

	const [formDataState, setFormDataState] = useState({
		announcementTextArea: initialText,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormDataState((prevData) => ({ ...prevData, [name]: value }));
	};

	const isFormValid = !!formDataState.announcementTextArea.trim();

	const onDelete = async (id: string) => {
		try {
			await deleteAnnouncement(id);
			closeModal();
		} catch (error) {
			alert('Failed to delete announcement');
		}
	};

	return (
		<form action={action} className={styles.form}>
			<ExtendableModalHeader
				isExtended={isModalExtended}
				toggleExtended={() => setIsModalExtended((prevState) => !prevState)}
				closeModal={closeModal}>
				{currentAnnouncement ? 'Edit Advertisement' : 'Post New Advertisement'}
			</ExtendableModalHeader>

			<div className={`${styles.modalContent} ${!isModalExtended ? styles.modalExtended : null}`}>
				<div className={`${styles.mobileTopMenu} hiddenOnDesktop`}>
					<BackButtonMobile onClick={closeModal} />

					{currentAnnouncement && (
						<DeleteButton
							onClick={(e) => {
								e.preventDefault();
								onDelete(currentAnnouncement._id);
							}}
						/>
					)}
				</div>

				<div className={styles.userInfo}>
					<UserBadge
						isRoleRequired={true}
						isFullWidth={true}
						firstName={firstName}
						lastName={lastName}
						role={role}
					/>

					<p className={styles.date}>
						{currentAnnouncement ? formatUTCToLongDate(currentAnnouncement.createdAt) : 'Today'}
					</p>
				</div>

				<div className={styles.line}></div>

				<textarea
					className={`${styles.textArea} ${isModalExtended ? styles.textAreaExtended : null}`}
					placeholder='What would you like to post?'
					name='announcementTextArea'
					value={formDataState.announcementTextArea}
					onChange={handleInputChange}
				/>
			</div>

			<div className={styles.required}>
				{state.error && <p className={styles.error}>Error saving announcement. Please try again.</p>}
				{state.announcementTextAreaError && (
					<p className={styles.error}>Please, provide valid announcement description.</p>
				)}
			</div>

			<ModalActionButton isFormValid={isFormValid}>{currentAnnouncement ? 'SAVE' : 'POST'}</ModalActionButton>
		</form>
	);
}