import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.input`
  width: 70%;

  border: none;
  border-bottom: 1px dashed ${colors.primary.light};

  padding: 15px 0;
  margin-top: 20px;

  color: ${colors.primary.dark};

  &:focus {
    border-bottom: 1px dashed ${colors.primary.dark};
  }
`;
