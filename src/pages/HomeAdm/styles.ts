import { AiOutlineClose } from 'react-icons/ai';
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
  flex-direction: row;
`;

export const LeftSide = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Users = styled.div`
  height: 80%;
  border-radius: 10px;
  margin: 0px 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  ::-webkit-scrollbar-track {
    background-color: #222222;
  }
  ::-webkit-scrollbar {
    width: 3px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export const RightSide = styled.div`
  width: 40%;
  height: 100%;
`;

export const CloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  color: ${colors.primary.main};
  cursor: pointer;
`;
