import { fork } from 'redux-saga/effects';
import { filtersSaga } from '../store/filters/saga';

export default function* rootSaga() {
  yield [fork(filtersSaga)];
}
