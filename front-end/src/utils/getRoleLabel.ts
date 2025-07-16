import { rolesMappingValues } from "../constants/academicConstans";

export function getRoleLabel(role: string): string {
	return rolesMappingValues[role] || role;
}