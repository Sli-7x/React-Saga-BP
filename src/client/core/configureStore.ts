import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));

if ((module as any).hot) {
  (module as any).hot.accept('./reducers', () => {
    const nextReducer = require('./reducers').default;
    store.replaceReducer(nextReducer);
  });
}

// run the saga
sagaMiddleware.run(sagas);

export default store;
