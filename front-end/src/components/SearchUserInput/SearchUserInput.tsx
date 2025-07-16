'use client';

import styles from './SearchUserInput.module.scss';
import Image from 'next/image';
import magnifierIcon from '../../icons/magnifier-icon.svg';
import { useSearch } from '../../contexts/SearchContext';

export function SearchUserInput() {
	const { searchTerm, setSearchTerm } = useSearch();

	return (
		<div className={styles.search}>
			<Image src={magnifierIcon} alt='Magnifier icon' />
			<input
				className={styles.searchInput}
				type='text'
				placeholder='Search by name, lastname or e-mail'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
}
