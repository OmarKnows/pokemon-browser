import type { RouteObject } from 'react-router';
import { ROUTES } from '../../constants/routes';
import PokemonList from '../../../modules/pokemon/pages/PokemonList';
import PokemonDetails from '../../../modules/pokemon/pages/PokemonDetails';

export const pokemonRoutes: RouteObject[] = [
	{
		path: ROUTES.POKEMON,
		element: <PokemonList />,
	},
	{
		path: `${ROUTES.POKEMON}/:id`,
		element: <PokemonDetails />,
	},
];
