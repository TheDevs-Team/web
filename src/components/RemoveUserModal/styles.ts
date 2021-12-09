import styled from 'styled-components';
import { Button } from '../Button';

import { ifStyle } from '~/utils';

const cancel = ifStyle('cancel');
const confirm = ifStyle('confirm');

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.8);
  z-index: 1000;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 350px;
  height: 180px;
  background: #202020;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.div`
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

export const ButtonStyled = styled(Button)<CancelButtonType>`
  padding: 10px 20px;
  border: none;
  background: none;
  border: 1px solid ${cancel('#ee3a2f', confirm('#217150', '#c4c4c4'))};
  color: ${cancel('#ee3a2f', confirm('#217150', '#c4c4c4'))};
  font-weight: 500;

  &:hover {
    background: ${cancel('#ee3a2f', confirm('#217150', '#c4c4c4'))};
    color: #2b2b2c;
  }
`;

export const Text = styled.p`
  color: white;
  width: 70%;
  font-size: 18px;
  text-align: center;
`;
