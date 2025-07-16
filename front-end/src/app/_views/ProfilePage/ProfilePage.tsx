import { BackgroundMainContentDesktop } from '../../../components/BackgroundMainContentDesktop/BackgroundMainContentDesktop';
import { BackgroundMainContentMobile } from '../../../components/BackgroundMainContentMobile/BackgroundMainContentMobile';
import { H1Company } from '../../../components/H1Company/H1Company';
import { Header } from '../../../components/Header/Header';
import { ProfileCard } from '../../../components/ProfileCard/ProfileCard';

import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';

export async function ProfilePage() {
	return (
		<>
			<H1Company />
			<Header isFullHeader={false} isMobileHeaderShowed={false} />
			<WrapperLogged white300OnBgMobile={true} paddingOnMobile={true}>
				
				<BackgroundMainContentDesktop padding={true}>
					<BackgroundMainContentMobile>
						
						<main>

							<ProfileCard />
						</main>

					</BackgroundMainContentMobile>
				</BackgroundMainContentDesktop>

			</WrapperLogged>
		</>
	);
}
