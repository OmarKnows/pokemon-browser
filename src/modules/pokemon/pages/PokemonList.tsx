import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import pokemonService from '../../../app/api/services/pokemon.service';
import type { IApiError, INamedAPIResource, IPaginationParams } from '../../../app/api/types/api.types';
import type { TPokemonListResponse } from '../../../app/api/types/pokemon.types';
import Error from '../../../app/router/Error';
import MainPaginator, { getItemsPerPage } from '../../../components/MainPaginator/MainPaginator';
import useFilter from '../../../hooks/useFilter';
import { useViewMode } from '../../../hooks/useViewMode';
import PokemonGrid from '../components/PokemonGrid';
import { ViewSwitcher } from '../components/ViewSwitcher';

const PokemonList = () => {
	const { searchParams } = useFilter();
	const [viewMode, setViewMode] = useViewMode();

	const page = Number(searchParams.get('page')) || 1;
	const limit = Number(searchParams.get('limit')) || getItemsPerPage();
	const offset = viewMode === 'pagination' ? (page - 1) * limit : 0;

	const paginationParams: IPaginationParams = {
		limit: String(limit),
		offset: String(offset),
	};

	const [accumulated, setAccumulated] = useState<INamedAPIResource[]>([]);

	const { data, isLoading, error, refetch } = useQuery<TPokemonListResponse, IApiError>({
		queryKey: ['pokemon', viewMode, page, limit],
		queryFn: () => pokemonService.list(paginationParams),
	});

	useEffect(() => {
		if (viewMode === 'loadmore' && data?.results) {
			setAccumulated((prev) => (page === 1 ? data.results : [...prev, ...data.results]));
		}
	}, [data, page, viewMode]);

	if (error) return <Error message={error?.message || 'Failed to load Pokémon'} onRetry={() => refetch()} />;

	const pokemons = viewMode === 'pagination' ? data?.results : accumulated;
	const isPaginationLoading = viewMode === 'pagination' && isLoading;
	const isLoadMoreLoading = viewMode === 'loadmore' && page === 1 && isLoading;

	return (
		<div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
			<div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
				<div className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 dark:text-white'>Pokémon Browser</h1>
					<p className='mt-2 text-gray-600 dark:text-gray-400'>Explore the world of Pokémon</p>
					<ViewSwitcher mode={viewMode} onChange={setViewMode} />
				</div>

				<PokemonGrid pokemons={pokemons} isLoading={isPaginationLoading || isLoadMoreLoading} />

				<MainPaginator
					mode={viewMode}
					page={page}
					limit={limit}
					count={data?.count || 0}
					isLoading={isLoading}
					hasMore={!!data?.next}
					showEndMessage={accumulated.length > 0}
				/>
			</div>
		</div>
	);
};

export default PokemonList;
