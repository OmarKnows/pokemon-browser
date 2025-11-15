import { useNavigate } from 'react-router';
import type { INamedAPIResource } from '../../../app/api/types/api.types';
import { cn } from '../../../app/utils/cn';
import type { FC } from 'react';
import { ROUTES } from '../../../app/constants/routes';

interface IPokemonCardProps {
	pokemon: INamedAPIResource;
	className?: string;
}

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon, className }) => {
	const navigate = useNavigate();

	const pokemonId = pokemon.url.split('/').filter(Boolean).pop();

	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

	const handleClick = () => {
		navigate(ROUTES.POKEMON + `/${pokemonId}`);
	};

	return (
		<div
			onClick={handleClick}
			className={cn(
				'group cursor-pointer rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300 hover:shadow-xl hover:scale-105',
				'dark:border-gray-700 dark:bg-gray-800',
				className
			)}
		>
			<div className='aspect-square w-full overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-900'>
				<img
					src={imageUrl}
					alt={pokemon.name}
					className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-110'
					loading='lazy'
				/>
			</div>
			<div className='mt-3 text-center'>
				<p className='text-sm font-medium text-gray-500 dark:text-gray-400'>#{pokemonId?.padStart(3, '0')}</p>
				<h3 className='mt-1 text-lg font-semibold capitalize text-gray-900 dark:text-white'>{pokemon.name}</h3>
			</div>
		</div>
	);
};

export default PokemonCard;
