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
  height: 10%;
  background: none;

  display: flex;

  img {
    padding-left: 50px;

    width: 90px;
    height: 90px;

    position: absolute;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  min-width: 350px;
  max-width: 450px;
  height: 500px;

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

export const Span = styled.span`
  color: ${colors.primary.main};
  font-size: 15px;
  font-weight: 400;

  padding-top: 50px;

  text-decoration: underline;

  cursor: pointer;
`;
