import type { FC } from 'react';
import { cn } from '../../../app/utils/cn';

interface IBadgeProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	className?: string;
}

export const Badge: FC<IBadgeProps> = ({ children, variant = 'primary', className }) => {
	return (
		<span
			className={cn(
				'rounded-full px-3 py-1 text-sm font-medium capitalize',
				variant === 'primary' && 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
				variant === 'secondary' && 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
				className
			)}
		>
			{children}
		</span>
	);
};
