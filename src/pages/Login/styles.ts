import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${colors.primary.main};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
`;

export const Nav = styled.div`
  width: 100%;
  background: none;

  display: flex;
`;

export const FormContainer = styled.form`
  width: 100%;
  min-width: 350px;
  max-width: 450px;
  height: 400px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: auto;

  background: ${colors.primary.white};

  border-radius: 10px;
`;

export const Header = styled.div`
  width: 100%;
  height: 18%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.primary.dark};
`;

export const Logo = styled.span`
  font-size: 25px;
  font-weight: 500;

  color: ${colors.primary.white};

  padding-left: 50px;
  padding-top: 30px;

  width: 90px;
  height: 90px;

  position: absolute;
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  width: 70%;
  height: 13%;
  background: none;

  border: 1.5px solid ${colors.primary.light};
  border-radius: 5px;

  color: ${colors.primary.light};
  font-weight: 400;

  margin-top: 50px;

  cursor: pointer;

  &:hover {
    border: 1.5px solid ${colors.primary.main};
    color: ${colors.primary.main};

    transition: 0.4s;
  }
`;
