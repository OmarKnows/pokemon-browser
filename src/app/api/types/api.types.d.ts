export interface IListResponse<T> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[];
}

export interface INamedAPIResource {
	name: string;
	url: string;
}

export interface IApiError {
	status: number;
	message: string;
}

export interface IPaginationParams {
	limit?: number;
	offset?: number;
}
