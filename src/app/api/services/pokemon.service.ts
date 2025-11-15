import { ENDPOINTS } from '../../constants/server';
import instance from '../axios.config';
import type { IPaginationParams } from '../types/api.types';
import type { IPokemon, TPokemonListResponse } from '../types/pokemon.types';

class PokemonService {
	public async list(params?: IPaginationParams): Promise<TPokemonListResponse> {
		const { data } = await instance.get(ENDPOINTS.POKEMONS, {
			params,
		});

		return data;
	}

	public async getById(id: string): Promise<IPokemon> {
		const { data } = await instance.get(`${ENDPOINTS.POKEMONS}/${id}`);

		return data;
	}
}

export default Object.freeze(new PokemonService());
