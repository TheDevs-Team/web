import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Input = styled(TextField)`
  & label {
    font-size: 1em;
  }

  & .MuiOutlinedInput-root {
  }
  &.MuiInputBase-root {
  }
`;
