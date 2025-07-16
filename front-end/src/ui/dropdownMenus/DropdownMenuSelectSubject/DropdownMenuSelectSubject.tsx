'use client';

import { useState, use } from 'react';

import { BookIcon } from '../../../icons/BookIcon';
import { SelectedSubjectContext } from '../../../contexts/SelectedSubjectContext';

import { convertValue } from '../../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend } from '../../../constants/subjects';
import { DropdownItemButton } from '../../buttons/DropdownItem/DropdownItemButton';

export function DropdownMenuSelectSubject() {
	const { selectedSubject, setSelectedSubject } = use(SelectedSubjectContext);

	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (option: string) => {
		setSelectedSubject(option);
		setIsOpen(false);
	};

	return (
		<DropdownItemButton
			data={subjectKeysForBackend}
			currentlyDisplaying={convertValue(subjectKeysForBackend, availableSubjects, selectedSubject)}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			handleSelect={handleSelect}
			option={<BookIcon isActive={isOpen} />}
		/>
	);
}
