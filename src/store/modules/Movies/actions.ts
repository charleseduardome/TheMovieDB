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
