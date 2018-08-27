import { createAction } from 'redux-actions';

export const TOAST_ERROR_SHOW = '[Toast] Show error toast';
export const TOAST_ERROR_HIDE = '[Toast] Hide error toast';

export const TOAST_SUCCESS_SHOW = '[Toast] Show success toast';
export const TOAST_SUCCESS_HIDE = '[Toast] Hide success toast';

export const TOAST_WARNING_SHOW = '[Toast] Show warning toast';
export const TOAST_WARNING_HIDE = '[Toast] Hide warning toast';

export const showError = createAction(TOAST_ERROR_SHOW);
export const hideError = createAction(TOAST_ERROR_HIDE);

export const showSuccess = createAction(TOAST_ERROR_SHOW);
export const hideSuccess = createAction(TOAST_ERROR_HIDE);

export const showWarning = createAction(TOAST_ERROR_SHOW);
export const hideWarning = createAction(TOAST_ERROR_HIDE);

const closeAfter: number = 3000;

export const errorToast = (text: string) => (dispatch: any) => {
  dispatch(showError(text));
  setTimeout(() => {
    dispatch(hideError());
  }, closeAfter);
};

export const successToast = (text: string) => (dispatch: any) => {
  dispatch(showSuccess(text));
  setTimeout(() => {
    dispatch(hideSuccess());
  }, closeAfter);
};

export const warningToast = (text: string) => (dispatch: any) => {
  dispatch(showWarning(text));
  setTimeout(() => {
    dispatch(hideWarning());
  }, closeAfter);
};
