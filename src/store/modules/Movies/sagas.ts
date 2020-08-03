import { takeLatest, all, put, call } from 'redux-saga/effects';
import api from '../../../services/api';

import { LoadMoviesSuccess } from './actions';
import { MoviesActions } from './types';

function* requestMovies() {
  try {
    const response = yield call(
      api.get,
      '/top_rated?api_key=ac3406358c42270b1c158345d03cc06c',
    );
    yield put(LoadMoviesSuccess(response.data));
  } catch (error) {
    throw new Error('Err');
  }
}

export default all([takeLatest(MoviesActions.LOAD_REQUEST, requestMovies)]);
