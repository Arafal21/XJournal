import styles from './ExtendableModalHeader.module.scss';

import ExtendIcon from '../../../icons/show-more-details.svg';
import DecreaseIcon from '../../../icons/show-less-details.svg';

import { CloseButton } from '../../buttons/CloseButton/CloseButton';
import { ExtendButton } from '../../buttons/ExtendButton/ExtendButton';

interface ExtendableModalHeaderProps {
	isExtended: boolean;
	toggleExtended: () => void;
	closeModal: () => void;
	children: React.ReactNode;
}

export function ExtendableModalHeader({
	children,
	isExtended,
	toggleExtended,
	closeModal,
}: ExtendableModalHeaderProps) {
	return (
		<div className={`${styles.actionMenuDesktop} hiddenOnMobile`}>
			<ExtendButton
				onClick={toggleExtended}
				alt={isExtended ? 'Decrease icon' : 'Extend icon'}
				src={isExtended ? DecreaseIcon : ExtendIcon}
			/>

			<h2 className={styles.heading}>{children}</h2>

			<CloseButton onClick={closeModal} />
		</div>
	);
}
