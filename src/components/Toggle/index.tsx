import React from 'react';

import { ToggleStyled } from './styles';

type Props = {
  checked: boolean;
  onChange: (value: any) => void;
};

export const Toggle: React.FC<Props> = ({ checked, onChange, ...rest }) => (
  <ToggleStyled {...{ checked, onChange, ...rest }} />
);
