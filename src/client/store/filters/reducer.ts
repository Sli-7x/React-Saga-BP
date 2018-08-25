import { FILTERS_LOAD, FILTERS_SUCCESS, FILTERS_FAIL } from './constants';

export interface IInitialState {
  list: any[];
  loading: boolean;
  error?: any;
}

export const initialState: IInitialState = {
  list: [],
  loading: false,
  error: undefined,
};

export default function reducer(state: IInitialState = initialState, action: any) {
  switch (action.type) {
    case FILTERS_LOAD:
      return { ...state, loading: true };
    case FILTERS_SUCCESS:
      return { ...state, list: action.payload, loading: false };
    case FILTERS_FAIL:
      return { ...state, error: action.payload, loading: false, list: [] };
    default:
      return state;
  }
}
