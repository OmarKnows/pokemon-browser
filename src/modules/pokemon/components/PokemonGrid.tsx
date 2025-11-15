import type { FC } from 'react';
import type { INamedAPIResource } from '../../../app/api/types/api.types';
import LoadingSkeleton from './LoadingSkeleton';
import PokemonCard from './PokemonCard';

interface IProkemonGridProps {
	isLoading?: boolean;
	pokemons?: INamedAPIResource[];
}
const PokemonGrid: FC<IProkemonGridProps> = ({ pokemons, isLoading }) => {
	if (isLoading) return <LoadingSkeleton />;
	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
			{pokemons?.map((pokemon) => (
				<PokemonCard key={pokemon.name} pokemon={pokemon} />
			))}
		</div>
	);
};

export default PokemonGrid;
