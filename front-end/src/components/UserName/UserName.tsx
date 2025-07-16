'use server';

import { getUserName } from "../../api/profileDataApi";

export async function UserName() {
	try {
		const firstName = await getUserName();
		return <span>{firstName}</span>;
	} catch (error) {
		console.error('Error fetching user details:', error);
		return <div>Name error fetching.</div>;
	}
}
