'use client';

import { ClockTickIcon } from '../../../icons/ClockTickIcon';
import { DropdownItemButton } from '../../buttons/DropdownItem/DropdownItemButton';

interface EndLessonDropdownProps {
	maxWidth: boolean;
	selectedHours: { startHour: string; endHour: string };
}

export function EndLessonDropdown({ maxWidth, selectedHours }: EndLessonDropdownProps) {
	return (
		<DropdownItemButton
			maxWidth={maxWidth}
			currentlyDisplaying={selectedHours.endHour}
			option={<ClockTickIcon />}
			staticInput
		/>
	);
}
