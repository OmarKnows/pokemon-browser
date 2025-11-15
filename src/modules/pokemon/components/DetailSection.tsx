import type { FC, ReactNode } from 'react';

interface IDetailSectionProps {
	title: string;
	children: ReactNode;
}

export const DetailSection: FC<IDetailSectionProps> = ({ title, children }) => {
	return (
		<div>
			<h2 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>{title}</h2>
			{children}
		</div>
	);
};
