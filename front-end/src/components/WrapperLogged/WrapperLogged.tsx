import styles from './WrapperLogged.module.scss';

interface WrapperLoggedProps {
	children: React.ReactNode;
	white300OnBgMobile: boolean;
	paddingOnMobile: boolean;
}

export function WrapperLogged({ children, white300OnBgMobile, paddingOnMobile }: WrapperLoggedProps) {
	return (
		<div
			className={`
				${styles.wrapperForLogged} 
				${white300OnBgMobile ? styles.grayBackground : styles.whiteBackground} 
				${paddingOnMobile ? styles.paddingMobile : null}`
			}>
			{children}
		</div>
	);
}
