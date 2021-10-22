import styled from 'styled-components';

import ReactLoading from 'react-loading';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled(ReactLoading).attrs({
  width: 100,
  height: 100,
  type: 'cylon',
  color: '#38c58d',
})`
  overflow: hidden;
`;
