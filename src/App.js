import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store'; // Precisa vir depois da importação do Reactotron

import GlobalStyle from './styles/global';

/**
 * OBS: O PersistGate irá carregar os outros componentes somente quando houver
 * carregado os estados configurados no persistor
 */
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />;
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
