'use server';

import styles from './AdminPanel.module.scss';

import { Suspense } from 'react';

import { AdminActionsBar } from '../AdminActionsBar/AdminActionsBar';
import { AdminFilterUsersButtons } from '../../ui/buttons/AdminFilterUsersButtons/AdminFilterUsersButtons';
import { TableOfUsersAdmin } from '../TableOfUsersAdmin/TableOfUsersAdmin';
import { LoadingThreeDotsJumping } from '../MotionDev/LoadingThreeDotsJumping';
import { fetchUserAmount } from '../../api/adminApi';

interface AdminPanelProps {
	filter: string;
}

export async function AdminPanel({ filter }: AdminPanelProps) {
	let userAmount: number | string;

	try {
		userAmount = await fetchUserAmount();
	} catch {
		userAmount = 'loading...';
	}

	return (
		<div className={styles.adminPanelContainer}>
			<section className={styles.usersActionRow}>
				<AdminActionsBar />
			</section>

			<div className={styles.line}></div>

			<section className={styles.controlButtons}>
				<AdminFilterUsersButtons userAmount={userAmount} />
			</section>

			<section>
				<Suspense fallback={<LoadingThreeDotsJumping />}>
					<TableOfUsersAdmin filter={filter} />
				</Suspense>
			</section>
		</div>
	);
}
