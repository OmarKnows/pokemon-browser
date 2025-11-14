import { useQuery } from '@tanstack/react-query';
import pokemonService from '../../../app/api/services/pokemon.service';
import type { IApiError } from '../../../app/api/types/api.types';
import type { TPokemonListResponse } from '../../../app/api/types/pokemon.types';

const PokemonList = () => {
	const paginationParams = { limit: 20, offset: 0 };
	const {
		data: pokemonsResponse,
		isLoading,
		error,
	} = useQuery<TPokemonListResponse, IApiError>({
		queryKey: ['pokemon', paginationParams],
		queryFn: () => pokemonService.list(paginationParams),
	});

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	console.log(pokemonsResponse);

	return <div>PokemonList</div>;
};

export default PokemonList;
