import type { IListResponse, INamedAPIResource } from './api.types';

export interface IPokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	weight: number;
	is_default: boolean;
	order: number;

	abilities: PokemonAbility[];
	forms: INamedAPIResource[];
	game_indices: VersionGameIndex[];
	held_items: PokemonHeldItem[];
	location_area_encounters: string;

	moves: PokemonMove[];
	sprites: PokemonSprites;
	species: INamedAPIResource;

	stats: PokemonStat[];
	types: PokemonType[];
}

export type TPokemonListResponse = IListResponse<INamedAPIResource>;

interface PokemonAbility {
	is_hidden: boolean;
	slot: number;
	ability: INamedAPIResource;
}

interface VersionGameIndex {
	game_index: number;
	version: INamedAPIResource;
}

interface PokemonHeldItemVersion {
	version: INamedAPIResource;
	rarity: number;
}

interface PokemonHeldItem {
	item: INamedAPIResource;
	version_details: PokemonHeldItemVersion[];
}

interface PokemonMoveVersion {
	move_learn_method: INamedAPIResource;
	version_group: INamedAPIResource;
	level_learned_at: number;
}

interface PokemonMove {
	move: INamedAPIResource;
	version_group_details: PokemonMoveVersion[];
}

interface PokemonSprites {
	front_default: string | null;
	front_shiny: string | null;
	front_female: string | null;
	front_shiny_female: string | null;
	back_default: string | null;
	back_shiny: string | null;
	back_female: string | null;
	back_shiny_female: string | null;
	other?: any;
	versions?: any;
}

interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: INamedAPIResource;
}

interface PokemonType {
	slot: number;
	type: INamedAPIResource;
}
