import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import { filtersFail, filtersLoaded, loadFilters } from '../actions';
import { fetchFilters, filtersSaga, workerSaga } from '../saga';

describe('Filters.saga', () => {
  it('workerSaga', () => {
    return expectSaga(workerSaga, fetchFilters())
      .provide([[call(fetchFilters), []]])
      .put(filtersLoaded([]))
      .run();
  });

  it('workerSaga errors', () => {
    const error = new Error('error');

    return expectSaga(workerSaga, fetchFilters())
      .provide([[call(fetchFilters), throwError(error)]])
      .put(filtersFail(error))
      .run();
  });

  it('filtersSaga', () => {
    return expectSaga(filtersSaga)
      .provide([[call(loadFilters), null]])
      .silentRun();
  });
});
