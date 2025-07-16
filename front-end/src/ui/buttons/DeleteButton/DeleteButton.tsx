import Image from 'next/image';
import trashIcon from '../../../icons/trash-icon.svg';

interface DeleteButtonProps {
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
	return (
		<button onClick={onClick} type='button'>
			<Image src={trashIcon} alt='Delete icon' aria-label='Delete button' />
		</button>
	);
}
