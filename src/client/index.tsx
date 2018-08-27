import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as Loadable from 'react-loadable';
import App from './App';
import configureStore from './core/configureStore';

declare global {
  interface IWindow {
    __INITIAL_STATE__: any;
    main: any;
  }
}

const initaliState = window.__INITIAL_STATE__;
const store = configureStore(initaliState);
delete window.__INITIAL_STATE__;

const renderApp = (Comp?: any) => {
  return hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Comp />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

if ((module as any).hot) {
  (window as IWindow).main = () => {
    Loadable.preloadReady().then(() => {
      renderApp(App);
    });
  };

  (module as any).hot.accept('./App', () => {
    const NewApp = require('./App').default;
    renderApp(NewApp);
  });
} else {
  (window as IWindow).main = () => {
    Loadable.preloadReady().then(() => {
      renderApp(App);
    });
  };
}
