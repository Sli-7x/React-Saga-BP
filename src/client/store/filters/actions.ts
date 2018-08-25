import { createAction } from 'redux-actions';
import { FILTERS_LOAD, FILTERS_SUCCESS, FILTERS_FAIL } from './constants';

export const loadFilters = createAction(FILTERS_LOAD);
export const filtersLoaded = createAction(FILTERS_SUCCESS);
export const filtersFail = createAction(FILTERS_FAIL);
