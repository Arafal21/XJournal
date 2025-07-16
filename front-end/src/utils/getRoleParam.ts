export function getRoleParam(filter: string): string | null {
	if (filter === 'students') return 'student';
	if (filter === 'parents') return 'parent';
	if (filter === 'teachers') return 'teacher';
	return null;
}