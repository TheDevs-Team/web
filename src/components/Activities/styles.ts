import styled from 'styled-components';
import { BiBook, FiDelete } from '~/utils';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #2b2b2c;
  margin-top: 30px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: #353535;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;

export const IconMaterial = styled(BiBook)`
  font-size: 30px;
  color: #67f7bd;
`;

export const IconDelete = styled(FiDelete)`
  font-size: 20px;
  color: #d0cdcd;
  cursor: pointer;

  &:hover {
    color: #f76767;
    transition: 0.3s;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #fff;
`;

export const Date = styled.span`
  color: #c3c3c3;
  font-size: 14px;
`;

export const Functions = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;
