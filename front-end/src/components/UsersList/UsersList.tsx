'use client';

import { useSearch } from '../../contexts/SearchContext';
import { UsersListProps } from '../../types/principalPanelProps';
import { UserInstance } from '../UserInstance/UserInstance';

export function UsersList({ users }: UsersListProps) {
	const { searchTerm } = useSearch();

	const filteredUsers = !searchTerm
		? users
		: users.filter((user) => {
				const lowerTerm = searchTerm.toLowerCase();
				return (
					user.firstName.toLowerCase().includes(lowerTerm) ||
					user.lastName.toLowerCase().includes(lowerTerm) ||
					user.email.toLowerCase().includes(lowerTerm)
				);
		  });

	return filteredUsers.map((user) => <UserInstance key={user._id} user={user} />);
}
