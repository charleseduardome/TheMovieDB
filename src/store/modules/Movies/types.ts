export enum MoviesActions {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCESS = '@movies/LOAD_SUCCESS',
  LOAD_FAILURE = '@movies/LOAD_FAILURE',

  UPDATE_PAGE_REQUEST = '@movies/UPDATE_PAGE_REQUEST',
  UPDATE_PAGE_SUCCESS = '@movies/SUCCESS_PAGE_REQUEST',

  SEARCH_REQUEST = '@movies/SEARCH_REQUEST',
  SEARCH_RESULTS = '@movies/SEARCH_RESULTS',
}

export interface IGenres {
  id: number;
  name: string;
}

export interface Movie {
  readonly popularity: number;
  readonly vote_count: number;
  readonly video: boolean;
  readonly poster_path: string;
  readonly id: number;
  readonly adult: boolean;
  readonly backdrop_path: string;
  readonly original_language: string;
  readonly original_title: string;
  readonly genre_ids: IGenres[];
  readonly title: string;
  readonly vote_average: number;
  readonly overview: string;
  readonly release_date: string;
}

export interface MoviesState {
  readonly page: number;
  readonly total_results: number;
  readonly total_pages: number;
  readonly term_search: string;
  readonly results: Movie[];
}
