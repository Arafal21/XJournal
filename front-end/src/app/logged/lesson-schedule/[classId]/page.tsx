import { LessonSchedulePage } from '../../../_views/LessonSchedulePage/LessonSchedulePage';

export const metadata = {
	title: 'Schedule - Plan Your Lessons | XJournal',
	description:
		'Easily organize your class schedule. XJournal helps you plan and manage your lessons effectively, so you stay on track.',
};

interface LessonScheduleRouteProps {
	params: Promise<{ classId: string }>;
}

export default async function LessonScheduleRoute({ params }: LessonScheduleRouteProps) {
	const { classId } = await params;

	return <LessonSchedulePage selectedClass={classId}/>;
}
