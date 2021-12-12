import styled from 'styled-components';
import { Button } from '../Button';
import { colors } from '~/theme';
import { ifStyle } from '~/utils';
import { TextField } from '@material-ui/core';
import { CloseIcon } from '../Header/styles';

const cancel = ifStyle('cancel');

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.8);
  z-index: 1000;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
