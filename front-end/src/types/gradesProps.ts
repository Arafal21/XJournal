export interface Semesters {
	'Fall / Winter': Subjects;
	'Spring / Summer': Subjects;
}

export interface Subjects {
	OOP: number[];
	[subject: string]: number[];
}

export interface Grade {
	_id: string;
	grade: number;
}

export interface GradesAdminStudent {
	_id: string;
	grades: {
		_id: string;
		grade: number;
	}[];
}

export interface StudentProfile {
	_id: string;
	grades: string[];
}

export interface StudentInClass {
	_id: string;
	firstName: string;
	lastName: string;
}
