import type { FC } from 'react';

interface IStatBarProps {
	name: string;
	value: number;
	maxValue?: number;
}

export const StatBar: FC<IStatBarProps> = ({ name, value, maxValue = 255 }) => {
	return (
		<div>
			<div className='mb-1 flex justify-between text-sm'>
				<span className='capitalize text-gray-600 dark:text-gray-400'>{name.replace('-', ' ')}</span>
				<span className='font-semibold text-gray-900 dark:text-white'>{value}</span>
			</div>
			<div className='h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700'>
				<div
					className='h-2 rounded-full bg-blue-600 dark:bg-blue-500'
					style={{ width: `${(value / maxValue) * 100}%` }}
				/>
			</div>
		</div>
	);
};
