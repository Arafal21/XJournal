'use server';

import styles from './AnnouncementsPage.module.scss';

import { Header } from '../../../components/Header/Header';
import { WrapperLogged } from '../../../components/WrapperLogged/WrapperLogged';
import { H1Company } from '../../../components/H1Company/H1Company';
import { AnnouncementBlock } from '../../../components/AnnouncementBlock/AnnouncementBlock';
import { AnnouncementCreator } from '../../../components/AnnouncementCreator/AnnouncementCreator';
import { UserName } from '../../../components/UserName/UserName';
import { moderatingRoles } from '../../../constants/permissions';
import { getUserRole } from '../../../api/profileDataApi';

export async function AnnouncementsPage() {
	const userRole = await getUserRole();

	return (
		<>
			<H1Company />
			<Header isFullHeader={false} />
			<WrapperLogged white300OnBgMobile={true} paddingOnMobile={true}>
				<main>
					<h2 className={styles.welcome}>
						Welcome <UserName />!
					</h2>

					<AnnouncementBlock />

					{moderatingRoles.includes(userRole) && <AnnouncementCreator />}
				</main>
			</WrapperLogged>
		</>
	);
}
