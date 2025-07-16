import styles from './TableOfUsersAdmin.module.scss';

import { adminSortCategories } from '../../constants/admin';
import { fetchAllUsers } from '../../api/principalPanelApi';
import { UsersList } from '../UsersList/UsersList';

interface TableOfUsersAdminProps {
	filter: string;
}

export async function TableOfUsersAdmin({ filter }: TableOfUsersAdminProps) {
	try {
		const users = await fetchAllUsers(filter);

		return (
			<div className={styles.container}>
				<ul className={styles.bar}>
					{adminSortCategories.map((category, index) => (
						<li key={index} className={styles.label}>
							{category}
						</li>
					))}
				</ul>
				<UsersList users={users} />
			</div>
		);
	} catch {
		return <div>Error fetching users</div>;
	}
}