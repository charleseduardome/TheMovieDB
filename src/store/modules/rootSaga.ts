import { all } from 'redux-saga/effects';

import Movies from './Movies/sagas';

export default function* rootSaga() {
  return yield all([Movies]);
}
