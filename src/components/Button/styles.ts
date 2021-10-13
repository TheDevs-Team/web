import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.button`
  border: none;
  padding: 8px 20px;
  background: ${colors.primary.green};
  color: ${colors.primary.white};
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background: ${colors.secondary.green};
    transition: 0.4s;
  }
`;
