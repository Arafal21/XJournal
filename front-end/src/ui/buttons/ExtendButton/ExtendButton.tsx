import Image from 'next/image';

interface ExtendButtonProps {
	onClick: () => void;
	src: string;
	alt: string;
}

export function ExtendButton({ onClick, src, alt }: ExtendButtonProps) {
	return (
		<button aria-label='Extend button' onClick={onClick} type='button'>
			<Image src={src} alt={alt} />
		</button>
	);
}
