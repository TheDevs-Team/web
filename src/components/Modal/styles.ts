import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 450px;
  background: #222222;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const CloseContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;

  color: #fff;
`;

export const Form = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 8px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #cecece;
`;

export const Input = styled.input`
  width: 95%;

  border: 1px solid #2b2b2c;
  background: transparent;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  outline: 0;
  color: #c4c4c4;
`;

export const Btn = styled.button`
  background: #217150;
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  width: 60%;
  height: 40px;
  border: none;
  border-radius: 15px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: 0.4s;
  }
`;

export const Select = styled.select`
  width: 98%;

  border: 1px solid #2b2b2c;
  background: transparent;
  border-radius: 10px;
  padding: 10px 0 10px 10px;
  outline: 0;
  color: #c4c4c4;
`;

export const Option = styled.option`
  background: #2b2b2c;
`;