import type { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../app/utils/cn';

interface IMainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const MainButton: FC<IMainButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	className,
	disabled,
	...props
}) => {
	const baseStyles = 'rounded-lg font-medium transition-colors cursor-pointer';

	const variantStyles = {
		primary: cn(
			'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800',
			disabled && 'cursor-not-allowed bg-blue-400 hover:bg-blue-400 dark:bg-blue-800 dark:hover:bg-blue-800'
		),
		secondary: cn(
			'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
			disabled && 'cursor-not-allowed bg-gray-200 text-gray-400 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-500'
		),
		danger: cn(
			'bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800',
			disabled && 'cursor-not-allowed bg-red-400 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-800'
		),
	};

	const sizeStyles = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3',
	};

	return (
		<button
			className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default MainButton;
