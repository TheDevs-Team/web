import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.div`
  width: 100%;
  height: 94%;

  background: ${colors.primary.dark};

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.primary.main};
  padding: 16px;
  border-radius: 15px;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 8px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${colors.primary.light};
`;

export const Input = styled.input`
  width: 95%;

  border: 2px solid ${colors.secondary.main};
  background: transparent;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  outline: 0;
  color: ${colors.primary.grey};
`;

export const Btn = styled.button`
  background: ${colors.primary.green};
  color: ${colors.primary.white};
  font-size: 15px;
  font-weight: 300;
  width: 60%;
  height: 40px;
  margin: 10px 0;
  border: none;
  border-radius: 15px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
`;

export const Select = styled.select`
  width: 98%;

  border: 1px solid ${colors.primary.main};
  background: transparent;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  outline: 0;
  color: ${colors.primary.grey};
`;

export const Option = styled.option`
  background: ${colors.primary.main};
`;

export const Span = styled.span`
  color: ${colors.primary.light};
  font-weight: 400;
`;
