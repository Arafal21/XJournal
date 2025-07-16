'use client';

import styles from './AdminFilterUsersButtons.module.scss';
import { usePathname } from 'next/navigation';
import { AdminRoleFilterButton } from '../AdminRoleFilterButton/AdminRoleFilterButton';
import { AdminAllUsersFilterButton } from '../AdminAllUsersFilterButton/AdminAllUsersFilterButton';
import { BASE_ROUTE } from '../../../constants/routing';

interface AdminFilterUsersButtonsProps {
	userAmount: number | string;
}

export function AdminFilterUsersButtons({ userAmount }: AdminFilterUsersButtonsProps) {
	const pathname = usePathname();

	const segments = pathname.split('/');
	let currentFilter = segments[segments.length - 1];

	if (!currentFilter || currentFilter === 'principal-panel') {
		currentFilter = 'all';
	}

	return (
		<div className={styles.adminButtonsContainer}>
			<AdminAllUsersFilterButton
				active={currentFilter === 'all'}
				href={`/${BASE_ROUTE}/principal-panel/all`}
				userAmount={userAmount}>
				All users
			</AdminAllUsersFilterButton>

			<AdminRoleFilterButton active={currentFilter === 'teachers'} href={`/${BASE_ROUTE}/principal-panel/teachers`}>
				Teachers
			</AdminRoleFilterButton>

			<AdminRoleFilterButton active={currentFilter === 'students'} href={`/${BASE_ROUTE}/principal-panel/students`}>
				Students
			</AdminRoleFilterButton>

			<AdminRoleFilterButton active={currentFilter === 'parents'} href={`/${BASE_ROUTE}/principal-panel/parents`}>
				Parents
			</AdminRoleFilterButton>
		</div>
	);
}
