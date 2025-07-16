'use client';

import { useState } from 'react';

import { ClockIcon } from '../../../icons/ClockIcon';
import { DropdownItemButton } from '../../buttons/DropdownItem/DropdownItemButton';

import { lessonTimeSlots } from '../../../constants/academicConstans';

interface StartLessonDropdownProps {
	maxWidth: boolean;
	selectedHours: { startHour: string; endHour: string };
	setSelectedHours: React.Dispatch<React.SetStateAction<{ startHour: string; endHour: string }>>;
}

export function StartLessonDropdown({ maxWidth, selectedHours, setSelectedHours }: StartLessonDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (hour: string) => {
		const [h, m] = hour.split(':').map(Number);
		const nextHour = `${h + 1}:${m.toString().padStart(2, '0')}`;
		
		setIsOpen(false);
		setSelectedHours({
			startHour: hour,
			endHour: nextHour,
		});
	};

	return (
		<DropdownItemButton
			maxWidth={maxWidth}
			data={lessonTimeSlots}
			currentlyDisplaying={selectedHours.startHour}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			handleSelect={handleSelect}
			option={<ClockIcon isActive={isOpen} />}
		/>
	);
}
