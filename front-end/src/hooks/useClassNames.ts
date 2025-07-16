'use client';

import { useState, useEffect } from 'react';
import { getClasses } from '../api/adminApi';

export function useClassNames() {
	const [classNames, setClassNames] = useState<string[]>([]);

	useEffect(() => {
		let isMounted = true;

		getClasses()
			.then((classes) => {
				if (isMounted) {
					const names = classes.map((c) => c._id);
					setClassNames(names);
				}
			})
			.catch(() => {
				if (isMounted) {
					console.error('failed to get classes');
				}
			});

		return () => {
			isMounted = false;
		};
	}, []);

	return classNames;
}
