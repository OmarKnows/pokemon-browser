import type { FC } from 'react';
import { cn } from '../utils/cn';
import MainButton from '../../components/MainButton';

interface IErrorProps {
	message?: string;
	onRetry?: () => void;
	className?: string;
}

const Error: FC<IErrorProps> = ({ message = 'Something went wrong', onRetry, className }) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center border border-red-200 bg-red-50 p-8 dark:border-red-800 dark:bg-red-900/20 h-screen',
				className
			)}
		>
			<div className='mb-4 text-5xl'>⚠️</div>
			<h3 className='mb-2 text-xl font-semibold text-red-800 dark:text-red-300'>Something went wrong</h3>
			<p className='mb-4 text-center text-red-600 dark:text-red-400'>{message}</p>
			{onRetry && (
				<MainButton onClick={onRetry} variant='danger'>
					Try Again
				</MainButton>
			)}
		</div>
	);
};

export default Error;
