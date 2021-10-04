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

export const CourseField = styled.div`
  width: 100%;

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Courses = styled.div`
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
