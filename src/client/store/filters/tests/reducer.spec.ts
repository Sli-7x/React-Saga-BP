import { loadFilters, filtersLoaded, filtersFail } from '../actions';
import reducer, { IInitialState, initialState } from '../reducer';

describe('redux/ad', () => {
  const state: IInitialState = initialState;

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should loadFilters', () => {
    const newProps = { ...initialState, loading: true };
    expect(reducer(state, loadFilters())).toEqual(newProps);
  });

  it('should filtersLoaded', () => {
    const newProps = { ...initialState, loading: false, list: [] };
    expect(reducer(state, filtersLoaded([]))).toEqual(newProps);
  });

  it('should filtersFail', () => {
    const newProps = { ...initialState, error: 'error' };
    expect(reducer(state, filtersFail('error'))).toEqual(newProps);
  });
});
