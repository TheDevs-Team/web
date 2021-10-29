import React, { FC } from 'react';
import { TextFieldProps } from '@material-ui/core';
import { Input } from './styles';

type Props = {
  maxLength?: number;
} & TextFieldProps;

export const TextField: React.FC<Props> = ({ label, ...rest }) => (
  <Input variant="filled" margin="normal" label={label} {...rest} />
);
