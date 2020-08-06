import { MoviesActions, MoviesState } from './types';

export const LoadMoviesRequest = () => {
  return {
    type: MoviesActions.LOAD_REQUEST,
  };
};

export const LoadMoviesSuccess = (data: MoviesState) => {
  return {
    type: MoviesActions.LOAD_SUCCESS,
    payload: {
      page: data.page,
      total_results: data.total_results,
      total_pages: data.total_pages,
      results: data.results,
    },
  };
};

export const UpdatePageRequest = (page: number) => {
  return {
    type: MoviesActions.UPDATE_PAGE_REQUEST,
    payload: { page },
  };
};

export const UpdatePageSuccess = (data: MoviesState) => {
  return {
    type: MoviesActions.UPDATE_PAGE_SUCCESS,
    payload: {
      page: data.page,
      total_results: data.total_results,
      total_pages: data.total_pages,
      results: data.results,
    },
  };
};

export const SearchMoviesRequest = (search: string) => {
  return {
    type: MoviesActions.SEARCH_REQUEST,
    payload: { search },
  };
};

export const SearchMoviesSuccess = (data: MoviesState, search: string) => {
  return {
    type: MoviesActions.SEARCH_RESULTS,
    payload: {
      page: data.page,
      total_results: data.total_results,
      total_pages: data.total_pages,
      results: data.results,
      term_search: search,
    },
  };
};
