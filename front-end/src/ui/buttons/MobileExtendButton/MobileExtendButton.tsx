import styles from './MobileExtendButton.module.scss';

import Image from 'next/image';

import ShowHideIcon from '../../../icons/nav-icons/show-hide-sidebar-menu.svg';

interface MobileExtendButtonProps {
	onClick: () => void;
}

export function MobileExtendButton({ onClick }: MobileExtendButtonProps) {
	return (
		<button className={`${styles.mobileExtendBtn} hiddenOnDesktop`} onClick={onClick}>
			<Image src={ShowHideIcon} width='24' height='24' alt='More button' />
			More
		</button>
	);
}
