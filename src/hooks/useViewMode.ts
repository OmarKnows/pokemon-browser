import { useEffect, useState } from 'react';

export type TViewMode = 'pagination' | 'loadmore';

export const useViewMode = () => {
	const [mode, setMode] = useState<TViewMode>(() => (localStorage.getItem('view-mode') as TViewMode) || 'pagination');
	useEffect(() => localStorage.setItem('view-mode', mode), [mode]);
	return [mode, setMode] as const;
};
