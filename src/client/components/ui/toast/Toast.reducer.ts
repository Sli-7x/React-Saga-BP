import {
  TOAST_ERROR_SHOW,
  TOAST_ERROR_HIDE,
  TOAST_SUCCESS_SHOW,
  TOAST_SUCCESS_HIDE,
  TOAST_WARNING_SHOW,
  TOAST_WARNING_HIDE,
} from './Toast.action';

interface IToast {
  show: boolean;
  text: string;
}

export interface IInitialState {
  error: IToast;
  success: IToast;
  warning: IToast;
}

export const initialState: IInitialState = {
  error: {
    show: false,
    text: '',
  },
  success: {
    show: false,
    text: '',
  },
  warning: {
    show: false,
    text: '',
  },
};

export default function reducer(state: IInitialState = initialState, action: any) {
  switch (action.type) {
    case TOAST_ERROR_SHOW:
      return { ...state, error: { show: true, text: action.payload } };
    case TOAST_ERROR_HIDE:
      return { ...state, error: { show: false, text: '' } };
    case TOAST_SUCCESS_SHOW:
      return { ...state, success: { show: true, text: action.payload } };
    case TOAST_SUCCESS_HIDE:
      return { ...state, success: { show: false, text: '' } };
    case TOAST_WARNING_SHOW:
      return { ...state, warning: { show: true, text: action.payload } };
    case TOAST_WARNING_HIDE:
      return { ...state, warning: { show: false, text: '' } };
    default:
      return state;
  }
}
