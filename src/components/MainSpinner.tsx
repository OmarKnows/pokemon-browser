import { cn } from '../app/utils/cn';

interface IMainSpinnerProps {
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

const MainSpinner = ({ size = 'md', className }: IMainSpinnerProps) => {
	const sizeClasses = {
		sm: 'h-8 w-8',
		md: 'h-12 w-12',
		lg: 'h-16 w-16',
	};

	return (
		<div className={cn('flex items-center justify-center', className)}>
			<div className={cn('animate-spin rounded-full border-4 border-gray-200 border-t-blue-600', sizeClasses[size])} />
		</div>
	);
};

export default MainSpinner;
