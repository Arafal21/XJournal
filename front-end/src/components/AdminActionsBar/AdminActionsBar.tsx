'use client';

import { useSelectedUserAdmin } from '../../contexts/SelectedUserAdminContext';
import { AddNewUserButton } from '../../ui/buttons/AddNewUserButton/AddNewUserButton';
import { ModalAddNewUserAdmin } from '../ModalAddNewUserAdmin/ModalAddNewUserAdmin';
import { SearchUserInput } from '../SearchUserInput/SearchUserInput';

export function AdminActionsBar() {
	const { setSelectedUser, openModal } = useSelectedUserAdmin();

	const handleAddNewUser = () => {
		setSelectedUser(null);
		openModal();
	};

	return (
		<>
			<SearchUserInput />
			<AddNewUserButton onClick={handleAddNewUser} />
			<ModalAddNewUserAdmin />
		</>
	);
}
