import { Reducer } from 'redux';
import producer from 'immer';

import { MoviesState, MoviesActions } from './types';

const INITIAL_STATE: MoviesState = {
  page: 1,
  total_results: 0,
  total_pages: 0,
  term_search: '',
  results: [],
};

const Movies: Reducer<MoviesState> = (state = INITIAL_STATE, action) => {
  return producer(state, draft => {
    switch (action.type) {
      case MoviesActions.LOAD_SUCCESS: {
        draft.page = action.payload.page;
        draft.total_results = action.payload.total_results;
        draft.total_pages = action.payload.total_pages;
        draft.results = action.payload.results;
        draft.term_search = '';
        break;
      }

      case MoviesActions.UPDATE_PAGE_SUCCESS: {
        draft.page = action.payload.page;
        draft.total_results = action.payload.total_results;
        draft.total_pages = action.payload.total_pages;
        draft.results = action.payload.results;
        break;
      }

      case MoviesActions.SEARCH_RESULTS: {
        draft.page = action.payload.page;
        draft.total_results = action.payload.total_results;
        draft.total_pages = action.payload.total_pages;
        draft.results = action.payload.results;
        draft.term_search = action.payload.term_search;
        break;
      }
    }
  });
};

export default Movies;
