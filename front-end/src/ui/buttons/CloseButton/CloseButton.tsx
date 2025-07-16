import Image from 'next/image';
import closeIcon from '../../../icons/x-icon.svg';

export function CloseButton({ onClick }: { onClick: () => void }) {
	return (
		<button aria-label='Close button' onClick={onClick} type='button'>
			<Image src={closeIcon} alt='Close button'></Image>
		</button>
	);
}
