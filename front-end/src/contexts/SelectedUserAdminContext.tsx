'use client';
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

interface SelectedUserAdminContextProps {
	selectedUser: any;
	setSelectedUser: Dispatch<SetStateAction<any>>;
	isModalVisible: boolean;
	setIsModalVisible: Dispatch<SetStateAction<boolean>>;
	openModal: () => void;
	closeModal: () => void;
}

const SelectedUserAdminContext = createContext<SelectedUserAdminContextProps>({
	selectedUser: null,
	setSelectedUser: () => {},
	isModalVisible: false,
	setIsModalVisible: () => {},
	openModal: () => {},
	closeModal: () => {},
});

export function SelectedUserAdminProvider({ children }: { children: React.ReactNode }) {
	const [selectedUser, setSelectedUser] = useState<any>(null);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	const openModal = () => setIsModalVisible(true);
	const closeModal = () => {
		setIsModalVisible(false);
		setSelectedUser(null);
	};

	return (
		<SelectedUserAdminContext.Provider
			value={{
				selectedUser,
				setSelectedUser,
				isModalVisible,
				setIsModalVisible,
				openModal,
				closeModal,
			}}>
			{children}
		</SelectedUserAdminContext.Provider>
	);
}

export function useSelectedUserAdmin() {
	return useContext(SelectedUserAdminContext);
}
