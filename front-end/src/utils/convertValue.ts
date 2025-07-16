export function convertValue(fromArray: string[], toArray: string[], value: string): string {
	const index = fromArray.indexOf(value);
	
	if (index !== -1 && index < toArray.length) {
		return toArray[index];
	}

	return value;
}

/**
 * Example: <p>{convertValue(availableSubjects, subjectKeysForBackend, selectedSubject)}</p>
 * 
 * Converts a given value from one array to the corresponding value in another array based on their shared index.
 * If the value is not found in the source array, the original value is returned.
 *
 * @param fromArray - An array of source values to search within (e.g., ['oop', 'mathematics', 'javascript', ...]).
 * @param toArray   - An array of target values of the same length, where each index corresponds to the same concept
 *                    (e.g., ['OOP', 'Mathematics', 'JavaScript', ...]).
 * @param value     - The value to convert (e.g., 'javascript').
 * @returns         - The value from `toArray` at the same index as `value` in `fromArray`, or `value` unchanged if not found.
 *
 * @example
 * 
 * // Given these two parallel arrays:
 * const subjectKeysForBackend = [
 *   'oop',
 *   'mathematics',
 * ];
 * const availableSubjects = [
 *   'OOP',
 *   'Mathematics',
 * ];
 *
 * // Converting a backend key to its display label:
 *  const { selectedSubject } = use(SelectedSubjectContext)
 *  console.log(selectedSubject) // returns: javascript
 * convertValue(subjectKeysForBackend, availableSubjects, selectedSubject); // returns 'JavaScript'
 *
 * // If the value is not present in subjectKeysForBackend:
 * convertValue(subjectKeysForBackend, availableSubjects, 'test');
 * // returns 'test'
 */
