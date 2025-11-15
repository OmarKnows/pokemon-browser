import type { FC } from 'react';
import { cn } from '../../../app/utils/cn';
import type { TViewMode } from '../../../hooks/useViewMode';

interface IViewSwitcherProps {
	mode: TViewMode;
	onChange: (mode: TViewMode) => void;
}

export const ViewSwitcher: FC<IViewSwitcherProps> = ({ mode, onChange }) => (
	<div className='mt-6 inline-flex rounded-lg border border-gray-300 bg-white p-1 dark:border-gray-600 dark:bg-gray-800'>
		{(['pagination', 'loadmore'] as const).map((m) => (
			<button
				key={m}
				onClick={() => onChange(m)}
				className={cn(
					'flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all',
					mode === m
						? 'bg-blue-600 text-white shadow-sm'
						: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
				)}
			>
				<span>{m === 'pagination' ? '📄' : '🔄'}</span>
				<span className='capitalize'>{m === 'pagination' ? 'Pagination' : 'Load More'}</span>
			</button>
		))}
	</div>
);
