import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { MVPInformationMobile } from '../../../components/MVPInformation/MVPInformationMobile';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';

export function PresencePage() {
	return (
		<>
			<H1Company />
			<Header isFullHeader={false} isMobileHeaderShowed={false} />
			<WrapperLogged white300OnBgMobile={true} paddingOnMobile={true}>
				<BackgroundMainContentDesktop padding={true}>
					<main>
						<MVPInformationMobile />
						<p>Available soon!</p>
					</main>
				</BackgroundMainContentDesktop>
			</WrapperLogged>
		</>
	);
}
