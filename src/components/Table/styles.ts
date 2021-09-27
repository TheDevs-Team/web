import styled from 'styled-components';

export const Container = styled.table`
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
  font-size: 0.8rem;
`;

export const Thead = styled.thead`
  background-color: #3d3d3d;
  color: #fff;

  height: 60px;
`;

export const Tbody = styled.tbody`
  background-color: #2c2c2c;
  color: #fff;
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
  background: #217150;
  color: #fff;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background: #215050;
    transition: 0.4s;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  padding: 8px 20px;
  background: #9b111e;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #6b211e;
    transition: 0.4s;
  }
`;

export const ButtonCreate = styled.button`
  border: none;
  padding: 8px 15px;
  background: #2b2b2c;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  font-size: 12px;

  &:hover {
    background: #222222;
    transition: 0.4s;
  }
`;
