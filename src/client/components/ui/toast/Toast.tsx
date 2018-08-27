import * as React from 'react';
import { connect } from 'react-redux';
import { ToastContent } from './Toast.style';

export interface IErrorToastProps {
  toast: any;
}

export enum Toasts {
  error,
  success,
  warning,
}

export class ErrorToast extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  checkToast(toast: any) {
    if (toast.error.show) {
      return Toasts.error;
    }
    if (toast.success.show) {
      return Toasts.success;
    }

    return Toasts.warning;
  }

  toastObj(toast: any) {
    if (toast.error.show) {
      return toast.error;
    }
    if (toast.success.show) {
      return toast.success;
    }

    return toast.warning;
  }

  public render() {
    const { toast } = this.props;
    const toastType = Toasts[this.checkToast(toast)];
    const obj = this.toastObj(toast);

    return (
      <ToastContent show={obj.show} type={toastType}>
        {toast.error.text}
      </ToastContent>
    );
  }
}

export const mapStateToProps = (state: any) => ({
  toast: state.toast,
});

export default connect(mapStateToProps)(ErrorToast);
