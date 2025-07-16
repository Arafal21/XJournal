'use client';

import styles from './AddNewAnnouncementButton.module.scss';

import Image from 'next/image';
import PenIcon from '../../../icons/pen-icon.svg';

import { type AddNewAnnouncementButtonProps } from '../../../types/announcementProps';

export function AddNewAnnouncementButton({ addNewAnnoucement }: AddNewAnnouncementButtonProps) {
	return (
		<button onClick={addNewAnnoucement} className={styles.openModalBtn} aria-label='Add new announcement button'>
			<span className={styles.btnText}>Post new</span>
			<Image src={PenIcon} width='24' height='24' alt='Pen icon' />
		</button>
	);
}
