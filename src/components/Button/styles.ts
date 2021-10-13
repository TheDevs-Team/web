import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.button`
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
