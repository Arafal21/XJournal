export interface UserSession {
	firstName?: string;
	lastName?: string;
	role: string;
};

export interface DetailedUserData {
	firstName: string;
	lastName: string;
	role: string;
	lastLogin: string;
	_id: string
}
