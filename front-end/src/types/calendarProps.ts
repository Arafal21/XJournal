export interface CalendarEvent {
	_id: string;
	eventType: string;
	subject: string;
	startDate: string;
	endDate: string;
}

export interface SelectedExam {
	id: string | null;
	startDate?: string;
	endDate?: string;
	subject?: string;
}
