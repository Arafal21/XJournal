'use client';

import { useState } from 'react';

import { PeoplesIcon } from '../../../icons/PeoplesIcon';
import { useClassNames } from '../../../hooks/useClassNames';

import { availableClasses, classesKeysForBackend } from '../../../constants/classes';
import { convertValue } from '../../../utils/convertValue';
import { DropdownItemButton } from '../../buttons/DropdownItem/DropdownItemButton';
import { useRouteNavigation } from '../../../hooks/useRouteNavigation';

export function DropdownMenuSelectClass() {
	const classNames = useClassNames();
	const { selectedClass, navigateToGrades } = useRouteNavigation();
	const [isOpen, setIsOpen] = useState(false);

	const handleSelect = (cls: string) => {
		setIsOpen(false);
		navigateToGrades({ className: cls });
	};

	const currentlyDisplayingClass = convertValue(classesKeysForBackend, availableClasses, selectedClass);

	return (
		<DropdownItemButton
			data={classNames}
			currentlyDisplaying={currentlyDisplayingClass}
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			handleSelect={handleSelect}
			option={<PeoplesIcon isActive={isOpen} />}
		/>
	);
}
