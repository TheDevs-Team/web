import styled from 'styled-components';
import { colors } from '~/theme';
import { TextField } from '~/components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #202024;
  display: flex;
  overflow: hidden;
`;

export const Main = styled.main`
  width: 95%;
  height: 95%;
  padding: 20px 40px;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  padding: 30px;

  background: #d3d3d3;

  @media screen and (max-width: 600px) {
    width: 350px;
    padding: 16px;
  } ;
`;

export const Btn = styled.button`
  background: ${colors.primary.green};
  color: ${colors.primary.white};
  font-size: 15px;
  font-weight: 300;
  width: 60%;
  height: 70px;
  margin: 10px 0;
  border: none;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
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

export const Input = styled(TextField)`
  width: 90%;
  color: blue;
`;
