import { redirect } from 'next/navigation';

export default async function RedirectRouteUnlogged() {
	redirect('/login');
}
