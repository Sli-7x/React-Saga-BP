import styled from 'styled-components';

interface IToastContent {
  show: boolean;
  type: string;
}

const getColorByType = (type: string) => {
  switch (type) {
    case 'success':
      return '#9fdd79';
    case 'error':
      return '#fea9a2';
    default:
      return '#f4d481';
  }
};

export const ToastContent = styled.div`
  position: fixed;
  top: 0;
  overflow: hidden;
  left: calc(50% - 200px);
  max-height: ${(props: IToastContent) => (props.show ? '150px' : '0')};
  padding: ${(props: IToastContent) => (props.show ? '20px' : '0')};
  /* height: auto; */
  margin: 0 auto;
  background: ${(props: IToastContent) => getColorByType(props.type)};
  max-width: 200px;
  z-index: 999;
  transition: max-height 0.25s ease-in;
`;
