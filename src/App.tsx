import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';
import './config/ReactotronConfig';

import { store, persistor } from './store';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </>
);

export default App;
