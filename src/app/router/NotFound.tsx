import { useNavigate } from 'react-router';
import { ROUTES } from '../constants/routes';
import MainButton from '../../components/MainButton';

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
			<div className='mx-auto max-w-md px-4 text-center'>
				<div className='mb-8'>
					<h1 className='mb-2 text-9xl font-bold text-gray-900 dark:text-white'>404</h1>
					<div className='mb-4 text-6xl'>🔍</div>
					<h2 className='mb-2 text-2xl font-semibold text-gray-900 dark:text-white'>Page Not Found</h2>
					<p className='text-gray-600 dark:text-gray-400'>
						The page you're looking for doesn't exist or has been moved.
					</p>
				</div>

				<div className='flex flex-col gap-3 sm:flex-row sm:justify-center'>
					<MainButton onClick={() => navigate(ROUTES.POKEMON)} size='lg'>
						Go to Home
					</MainButton>
					<MainButton onClick={() => navigate(-1)} variant='secondary' size='lg'>
						Go Back
					</MainButton>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
