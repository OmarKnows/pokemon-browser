import type { FC } from 'react';
import { cn } from '../../../app/utils/cn';

interface ISkeletonCardProps {
	className?: string;
}

const SkeletonCard: FC<ISkeletonCardProps> = ({ className }) => {
	return (
		<div
			className={cn(
				'animate-pulse rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800',
				className
			)}
		>
			<div className='aspect-square w-full rounded-lg bg-gray-200 dark:bg-gray-700' />
			<div className='mt-3 space-y-2'>
				<div className='mx-auto h-4 w-12 rounded bg-gray-200 dark:bg-gray-700' />
				<div className='mx-auto h-5 w-24 rounded bg-gray-200 dark:bg-gray-700' />
			</div>
		</div>
	);
};

interface ILoadingSkeletonProps {
	count?: number;
	className?: string;
}

const LoadingSkeleton: FC<ILoadingSkeletonProps> = ({ count = 20, className }) => {
	return (
		<div
			className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5', className)}
		>
			{Array.from({ length: count }).map((_, index) => (
				<SkeletonCard key={index} />
			))}
		</div>
	);
};

export default LoadingSkeleton;
