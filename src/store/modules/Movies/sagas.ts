import { takeLatest, all, put, call } from 'redux-saga/effects';
import api from '../../../services/api';

import { LoadMoviesSuccess, UpdatePageSuccess } from './actions';
import { MoviesActions } from './types';
import { AnyAction } from 'redux';

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

function* requestUpdatePage({ payload }: AnyAction) {
  const { page } = payload;
  try {
    const response = yield call(
      api.get,
      '/top_rated?api_key=ac3406358c42270b1c158345d03cc06c',
      {
        params: {
          page,
        },
      },
    );
    yield put(UpdatePageSuccess(response.data));
  } catch (error) {
    throw new Error('Err');
  }
}

export default all([
  takeLatest(MoviesActions.LOAD_REQUEST, requestMovies),
  takeLatest(MoviesActions.UPDATE_PAGE_REQUEST, requestUpdatePage),
]);
