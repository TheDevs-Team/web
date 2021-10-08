import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 450px;
  background: ${colors.primary.dark};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const CloseContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  color: ${colors.primary.white};
`;

export const Main = styled.main`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  border: 1px solid ${colors.primary.main};
  background: transparent;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  outline: 0;
  color: ${colors.primary.grey};
`;

export const Btn = styled.button`
  background: ${colors.primary.green};
  color: ${colors.primary.white};
  font-size: 16px;
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

// modal remove
export const Remove = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const OptionRemove = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  padding: 15px 0;
`;

export const RemoveBtn = styled.button`
  background: transparent;
  border: 1px solid ${colors.primary.white};
  color: ${colors.primary.white};
  font-size: 15px;
  font-weight: 300;
  width: 40%;
  height: 40px;
  border-radius: 15px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
`;

export const TitleRemove = styled.span`
  color: ${colors.primary.white};
  font-weight: 300;
  font-size: 15px;
`;
