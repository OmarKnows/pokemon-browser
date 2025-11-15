import type { FC } from 'react';
import MainSpinner from '../MainSpinner';
import MainButton from '../MainButton';

interface ILoadMoreButtonProps {
	onLoadMore: () => void;
	isLoading: boolean;
	hasMore: boolean;
	showEndMessage: boolean;
}

export const LoadMoreButton: FC<ILoadMoreButtonProps> = ({ onLoadMore, isLoading, hasMore, showEndMessage }) => {
	if (!hasMore && showEndMessage) {
		return (
			<div className='mt-8 text-center'>
				<p className='text-gray-600 dark:text-gray-400'>You've reached the end! All Pokémon have been loaded.</p>
			</div>
		);
	}

	if (!hasMore) return null;

	return (
		<div className='mt-8 flex justify-center'>
			<MainButton onClick={onLoadMore} disabled={isLoading} size='lg' className='flex items-center gap-2'>
				{isLoading ? (
					<>
						<MainSpinner size='sm' />
						<span>Loading...</span>
					</>
				) : (
					<span>Load More</span>
				)}
			</MainButton>
		</div>
	);
};
