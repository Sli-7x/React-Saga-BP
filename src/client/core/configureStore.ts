import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const configureStore = (preloadedState?: any): any => {
  const store = createStore(reducers, preloadedState, compose(applyMiddleware(sagaMiddleware, thunk)));

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
