import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootSaga from './modules/rootSaga';

import rootReducer from './modules/rootReducer';
import { MoviesState } from './modules/Movies/types';

export interface ApplicationState {
  Movies: MoviesState;
}

const persistConfig = {
  key: 'themovies',
  storage,
};

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducers,
  applyMiddleware(...middlewares),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
