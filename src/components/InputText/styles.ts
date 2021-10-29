import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { getTheme, pxToRem } from '~/utils';

const accentContrast = getTheme('accent.contrast');

export const Input = styled(TextField)`
  & label {
    font-size: 1em;
    color: ${accentContrast};
  }

  & .MuiOutlinedInput-root {
    height: ${pxToRem(55)};
  }
  &.MuiInputBase-root {
  }
`;
