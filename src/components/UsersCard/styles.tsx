import styled from 'styled-components';
import { FiUser } from '~/utils';

export const Container = styled.section`
  width: 100%;
  height: 10vh;
  border-bottom: 0.5px solid #5c6a64;
  display: flex;
`;

export const ContentAvatar = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const BackgroundIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const UserIcon = styled(FiUser)<MenuStyleType>`
  font-size: 1.5rem;
  color: #67f7bd;
  cursor: default;
`;

export const ContentName = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
`;

export const ContentOptions = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
`;
