import { useEffect, type FC } from 'react';
import type { TViewMode } from '../../hooks/useViewMode';
import PaginationControls from './PaginationControls';
import { LoadMoreButton } from './LoadMoreButton';
import useFilter from '../../hooks/useFilter';
import { DEFAULT_ITEMS_PER_PAGE, ITEMS_PER_PAGE_OPTIONS, STORAGE_KEY } from '../../app/constants/localstorage';

interface IMainPaginatorProps {
	mode: TViewMode;
	page: number;
	limit: number;
	count: number;
	isLoading: boolean;
	hasMore: boolean;
	showEndMessage: boolean;
}

export const getItemsPerPage = (): number => {
	const saved = localStorage.getItem(STORAGE_KEY.ITEMS_PER_PAGE);
	return saved ? parseInt(saved, 10) : DEFAULT_ITEMS_PER_PAGE;
};

export const saveItemsPerPage = (value: number): void => {
	localStorage.setItem(STORAGE_KEY.ITEMS_PER_PAGE, value.toString());
};

const MainPaginator: FC<IMainPaginatorProps> = ({ mode, page, limit, count, isLoading, hasMore, showEndMessage }) => {
	const { searchParams, updateFilter } = useFilter();

	useEffect(() => {
		if (!searchParams.get('page')) {
			updateFilter('page', String(page));
		}
		if (!searchParams.get('limit')) {
			updateFilter('limit', String(limit));
		}
	}, []);

	const handleItemsPerPageChange = (newValue: number) => {
		saveItemsPerPage(newValue);
		updateFilter('page', '1');
		updateFilter('limit', String(newValue));
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div>
			{mode === 'pagination' ? (
				<div className='mt-8 space-y-4'>
					<div className='flex items-center justify-center gap-3'>
						<label htmlFor='items-per-page' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
							Items per page:
						</label>
						<select
							id='items-per-page'
							value={limit}
							onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
							className='rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm transition-colors hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:focus:border-blue-400 dark:focus:ring-blue-400'
						>
							{ITEMS_PER_PAGE_OPTIONS.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<PaginationControls
						currentPage={page}
						totalItems={count}
						itemsPerPage={limit}
						onPageChange={(p) => {
							updateFilter('page', String(p));
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					/>
				</div>
			) : (
				<LoadMoreButton
					onLoadMore={() => updateFilter('page', String(page + 1))}
					isLoading={isLoading && page > 1}
					hasMore={hasMore}
					showEndMessage={showEndMessage}
				/>
			)}
		</div>
	);
};

export default MainPaginator;
