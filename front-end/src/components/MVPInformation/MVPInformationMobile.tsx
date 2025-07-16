import styles from './MVPInformationMobile.module.scss';

export function MVPInformationMobile() {
	return (
		<p className={`${styles.mvpInfo} hiddenOnDesktop`}>
			Please open this page on desktop &gt;= 992px to see the full version of the page. (Due to some time
			constraints of my colleagues involved in this project, it is done mvp - minimum valuable product)
		</p>
	);
}
