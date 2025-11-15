import { useParams, useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import pokemonService from '../../../app/api/services/pokemon.service';
import type { IApiError } from '../../../app/api/types/api.types';
import type { IPokemon } from '../../../app/api/types/pokemon.types';
import Error from '../../../app/router/Error';
import { ROUTES } from '../../../app/constants/routes';
import MainSpinner from '../../../components/MainSpinner';
import MainButton from '../../../components/MainButton';
import { DetailSection } from '../components/DetailSection';
import { StatBar } from '../components/StatBar';
import { Badge } from '../components/Badge';
import { InfoCard } from '../components/InfoCard';

const PokemonDetails = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	const {
		data: pokemon,
		isLoading,
		error,
		refetch,
	} = useQuery<IPokemon, IApiError>({
		queryKey: ['pokemon-details', id],
		queryFn: () => pokemonService.getById(id as string),
		enabled: !!id,
	});

	const handleBack = () => {
		navigate(ROUTES.POKEMON);
	};

	if (isLoading) {
		return (
			<div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
				<MainSpinner size='lg' />
			</div>
		);
	}

	if (error) {
		return <Error message={error.message || 'Failed to load Pokémon details'} onRetry={() => refetch()} />;
	}

	if (!pokemon) {
		return null;
	}

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
			<div className='mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8'>
				<MainButton onClick={handleBack} variant='secondary' className='mb-6 flex items-center gap-2'>
					<span>←</span>
					<span>Back to List</span>
				</MainButton>

				<div className='overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'>
					<div className='grid gap-8 p-6 md:grid-cols-2 md:p-8'>
						<div className='flex items-center justify-center rounded-lg bg-gray-50 p-8 dark:bg-gray-900'>
							<img
								src={pokemon.sprites.other['official-artwork'].front_default}
								alt={pokemon.name}
								className='h-full max-h-96 w-full object-contain'
							/>
						</div>

						<div>
							<div className='mb-4'>
								<p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
									#{pokemon.id.toString().padStart(3, '0')}
								</p>
								<h1 className='mt-1 text-4xl font-bold capitalize text-gray-900 dark:text-white'>{pokemon.name}</h1>
							</div>

							<div className='space-y-6'>
								<DetailSection title='Types'>
									<div className='flex gap-2'>
										{pokemon.types.map((type) => (
											<Badge key={type.slot}>{type.type.name}</Badge>
										))}
									</div>
								</DetailSection>

								<DetailSection title='Physical Attributes'>
									<div className='grid grid-cols-2 gap-4'>
										<InfoCard label='Height' value={`${pokemon.height / 10} m`} />
										<InfoCard label='Weight' value={`${pokemon.weight / 10} kg`} />
									</div>
								</DetailSection>

								<DetailSection title='Stats'>
									<div className='space-y-2'>
										{pokemon.stats.map((stat) => (
											<StatBar key={stat.stat.name} name={stat.stat.name} value={stat.base_stat} />
										))}
									</div>
								</DetailSection>

								<DetailSection title='Abilities'>
									<div className='flex flex-wrap gap-2'>
										{pokemon.abilities.map((ability) => (
											<Badge key={ability.slot} variant='secondary'>
												{ability.ability.name.replace('-', ' ')}
												{ability.is_hidden && ' (Hidden)'}
											</Badge>
										))}
									</div>
								</DetailSection>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PokemonDetails;
