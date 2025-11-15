import type { FC } from 'react';
import { cn } from '../../app/utils/cn';
import MainButton from '../MainButton';

interface IPaginationControlsProps {
	currentPage: number;
	totalItems: number;
	itemsPerPage: number;
	onPageChange: (page: number) => void;
	className?: string;
}

const PaginationControls: FC<IPaginationControlsProps> = ({
	currentPage,
	totalItems,
	itemsPerPage,
	onPageChange,
	className,
}) => {
	const totalPages = Math.ceil(totalItems / itemsPerPage);
	const startItem = (currentPage - 1) * itemsPerPage + 1;
	const endItem = Math.min(currentPage * itemsPerPage, totalItems);

	const canGoPrevious = currentPage > 1;
	const canGoNext = currentPage < totalPages;

	return (
		<div className={cn('flex flex-col items-center justify-between gap-4 sm:flex-row', className)}>
			<div className='text-sm text-gray-700 dark:text-gray-300'>
				Showing <span className='font-semibold'>{startItem}</span> to <span className='font-semibold'>{endItem}</span>{' '}
				of <span className='font-semibold'>{totalItems}</span> Pokémon
			</div>

			<div className='flex items-center gap-2'>
				<MainButton onClick={() => onPageChange(currentPage - 1)} disabled={!canGoPrevious}>
					Previous
				</MainButton>

				<div className='flex items-center gap-2 px-4'>
					<span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
						Page {currentPage} of {totalPages}
					</span>
				</div>

				<MainButton onClick={() => onPageChange(currentPage + 1)} disabled={!canGoNext}>
					Next
				</MainButton>
			</div>
		</div>
	);
};

export default PaginationControls;
