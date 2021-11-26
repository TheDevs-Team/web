import styled from 'styled-components';
import { Button } from '../Button';
import { colors } from '~/theme';
import { ifStyle } from '~/utils';
import { TextField } from '@material-ui/core';
import { CloseIcon } from '../Header/styles';

const cancel = ifStyle('cancel');

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
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: #d3d3d3;
`;

export const Content = styled.div`
  width: 80%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:: column;
  margin-bottom: 25px;

`;

export const ButtonStyled = styled(Button)<CancelButtonType>`
  padding: 10px 30px;
  border: none;
  background: ${cancel('#217150', '#c9c9c9')};
  color: ${cancel('#fff', '#fff')};
  font-weight: 500;
  margin: 0 5px;

  &:hover {
    background: ${cancel('#217150', '#c4c4c4')};
  }
`;

export const Input = styled(TextField)`
  width: 90%;
  color: blue;
`;

export const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  padding: 30px;

  @media screen and (max-width: 600px) {
    width: 350px;
    padding: 16px;
  } ;
`;

export const Span = styled.span`
  color: ${colors.primary.dark};
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Alert = styled.span`
  color: ${colors.primary.dark};
  font-weight: 400;
  margin-bottom: 10px;
  font-size: 12px;
`;

export const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled(CloseIcon)`
  padding: 10px 10px 0 0;
`;
