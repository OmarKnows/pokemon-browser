import { ENDPOINTS } from '../../constants/server';
import instance from '../axios.config';
import type { IListResponse, IPaginationParams } from '../types/api.types';
import type { IPokemon, IPokemonListItem } from '../types/pokemon.types';

class PokemonService {
	public async list(params?: IPaginationParams): Promise<IListResponse<IPokemonListItem>> {
		const { data } = await instance.get(ENDPOINTS.POKEMONS, {
			params,
		});

		return data;
	}

	public async getById(id: number): Promise<IPokemon> {
		const { data } = await instance.get(`${ENDPOINTS.POKEMONS}/${id}`);

		return data;
	}
}

export default Object.freeze(new PokemonService());
