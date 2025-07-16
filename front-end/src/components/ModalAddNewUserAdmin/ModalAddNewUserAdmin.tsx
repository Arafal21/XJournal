'use client';

import { useState, useEffect } from 'react';

import { useSelectedUserAdmin } from '../../contexts/SelectedUserAdminContext';
import { ResponsiveModalBase } from '../ResponsiveModalBase/ResponsiveModalBase';
import { AdminActionModal } from '../../ui/modalContent/AdminActionModal/AdminActionModal';

export function ModalAddNewUserAdmin() {
	const { isModalVisible, setIsModalVisible } = useSelectedUserAdmin();

	const [modalKey, setModalKey] = useState(0);
	useEffect(() => {
		if (!isModalVisible) return;
		setModalKey((k) => k + 1);
	}, [isModalVisible]);

	const handleClose = () => {
		setIsModalVisible(false);
	};

	return (
		<ResponsiveModalBase isModalVisible={isModalVisible}>
			<AdminActionModal key={modalKey} setIsModalVisible={handleClose} />
		</ResponsiveModalBase>
	);
}
