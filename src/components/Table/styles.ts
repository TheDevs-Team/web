import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.table`
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
  font-size: 0.8rem;
`;

export const Thead = styled.thead`
  background-color: ${colors.secondary.main};
  color: ${colors.primary.white};
`;

export const Tbody = styled.tbody`
  background-color: ${colors.secondary.body};
  color: ${colors.primary.white};
`;

export const Th = styled.th`
  padding: 15px 25px;
  font-weight: 300;
`;

export const Td = styled.td`
  padding: 20px 10px;
  text-align: center;
`;

export const Tr = styled.tr``;

export const ButtonEdit = styled.button`
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

export const ButtonRemove = styled.button`
  border: none;
  padding: 8px 20px;
  background: ${colors.primary.red};
  color: ${colors.primary.white};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${colors.secondary.red};
    transition: 0.4s;
  }
`;

export const ButtonCreate = styled.button`
  border: none;
  padding: 8px 15px;
  background: ${colors.primary.main};
  color: ${colors.primary.white};
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  font-size: 12px;

  &:hover {
    background: ${colors.primary.dark};
    transition: 0.4s;
  }
`;
