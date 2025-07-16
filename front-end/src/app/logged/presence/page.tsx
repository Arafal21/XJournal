import { PresencePage } from '../../_views/PresencePage/PresencePage';

export const metadata = {  
    title: "Presence - Track Class Participation | XJournal",  
    description: "Easily monitor and manage class attendance. XJournal helps you keep track of student participation and attendance, ensuring everyone stays on top of their academic responsibilities.",  
};

export default function PresenceRoute() {
	return (
		<>
			<PresencePage />
		</>
	);
}
