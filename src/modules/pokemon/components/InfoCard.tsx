import type { FC } from 'react';

interface IInfoCardProps {
	label: string;
	value: string | number;
}

export const InfoCard: FC<IInfoCardProps> = ({ label, value }) => {
	return (
		<div className='rounded-lg bg-gray-50 p-3 dark:bg-gray-900'>
			<p className='text-sm text-gray-600 dark:text-gray-400'>{label}</p>
			<p className='text-xl font-semibold text-gray-900 dark:text-white'>{value}</p>
		</div>
	);
};
