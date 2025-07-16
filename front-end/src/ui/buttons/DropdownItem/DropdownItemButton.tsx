'use client';

import styles from './DropdownItemButton.module.scss';

import { DropdownTriggerButton } from '../DropdownTriggerButton/DropdownTriggerButton';

import { convertValue } from '../../../utils/convertValue';
import { availableSubjects, subjectKeysForBackend } from '../../../constants/subjects';
import { availableClasses, classesKeysForBackend } from '../../../constants/classes';

interface DropdownItemButtonProps {
	currentlyDisplaying: string;
	option: React.ReactNode;
	data?: string[];
	isOpen?: boolean;
	setIsOpen?: (open: boolean) => void;
	handleSelect?: (option: string) => void;
	maxWidth?: boolean;
	staticInput?: boolean;
}

export function DropdownItemButton({
	data = [],
	currentlyDisplaying,
	isOpen = false,
	setIsOpen,
	handleSelect,
	option,
	maxWidth,
	staticInput = false,
}: DropdownItemButtonProps) {
	const toggleOpen = () => setIsOpen?.(!isOpen);

	return (
		<div className={`${styles.dropdown} ${maxWidth ? styles.limitedDropdown : null}`}>
			<DropdownTriggerButton
				currentlyDisplaying={currentlyDisplaying}
				option={option}
				isOpen={isOpen}
				staticInput={staticInput}
				onToggle={toggleOpen}
			/>

			{!staticInput && isOpen && (
				<ul className={styles.menu}>
					{data.map((option) => {
						const isClassOption = classesKeysForBackend.includes(option);

						const displayContent = isClassOption
							? convertValue(classesKeysForBackend, availableClasses, option)
							: convertValue(subjectKeysForBackend, availableSubjects, option);

						return (
							<li
								key={option}
								role='menuitem'
								tabIndex={0}
								className={`${styles.menuItem} ${
									option === currentlyDisplaying ? styles.active : null
								}`}
								onClick={() => handleSelect?.(option)}>
								{displayContent}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
