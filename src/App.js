import React from 'react';
import { Switch, HashRouter, Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeadMenu from '@/pages/headNav';
import PubFooter from '@/pages/footer';
import RootRoute from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter >
        <HeadMenu />
        <RootRoute />
        <PubFooter />
      </HashRouter>
    </Provider>
  );
}

export default App;
