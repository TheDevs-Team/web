import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import { Button } from '~/components';
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

export const ContentAddUser = styled.div`
  width: 97%;
  overflow: hidden;
`;

export const ButtonAddUser = styled(Button)`
  width: auto;
  height: auto;
  background: none;
  color: ${colors.primary.green};
  border: 2px solid ${colors.primary.green};
  margin: 10px 0;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${colors.primary.green};
    color: ${colors.primary.white};
    transition: 0.4s;
  }
`;

export const UserField = styled.div`
  width: 100%;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Users = styled.div`
  height: 95%;
  width: 100%;
  overflow-x: auto;
  border-radius: 10px;
  margin: 0px 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 3px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  color: ${colors.primary.main};
  cursor: pointer;
`;
