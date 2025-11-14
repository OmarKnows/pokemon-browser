import { createBrowserRouter, Navigate } from 'react-router';
import { ROUTES } from '../constants/routes';
import NotFound from './NotFound';
import { pokemonRoutes } from './routes/pokemon.routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to={ROUTES.POKEMON} replace />,
	},
	...pokemonRoutes,
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
