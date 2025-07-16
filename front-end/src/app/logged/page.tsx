import { redirect } from 'next/navigation';
import { BASE_ROUTE } from '../../constants/routing';

export default async function RedirectRouteLogged() {
	redirect(`/${BASE_ROUTE}/announcements`);
}
