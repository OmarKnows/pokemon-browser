import type { RouteObject } from 'react-router';
import { ROUTES } from '../../constants/routes';
import PokemonDetails from '../../../modules/pokemon/pages/PokemonDetails';
import PokemonList from '../../../modules/pokemon/pages/PokemonList';
import Error from '../Error';

export const pokemonRoutes: RouteObject[] = [
	{
		path: ROUTES.POKEMON,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <PokemonList />,
			},
			{
				path: ':id',
				element: <PokemonDetails />,
			},
		],
	},
];
