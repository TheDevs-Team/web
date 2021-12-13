import styled from 'styled-components';
import { Button } from '../Button';
import { FileList } from '../FileList';
import { UploadFile } from '../UploadFile';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgb(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Contend = styled.div`
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  min-height: 400px;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: 20px 0;
  border: 1px solid #cecece;
  width: 50%;
  padding: 10px;
  color: #202024;
  border-radius: 8px;
`;

export const ButtonStyled = styled(Button)``;

export const FileListStyled = styled(FileList)``;

export const UploadFileStyled = styled(UploadFile)``;
