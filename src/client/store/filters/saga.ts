import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../../core/api';
import { filtersFail, filtersLoaded, loadFilters } from './actions';

export function* filtersSaga() {
  yield takeLatest(loadFilters, workerSaga);
}

export function* workerSaga(_action: any) {
  try {
    const response = yield call(fetchFilters);
    yield put(filtersLoaded(response));
  } catch (error) {
    yield put(filtersFail(error));
  }
}

export function fetchFilters(param?: any) {
  return Api.get('filters', param);
}
