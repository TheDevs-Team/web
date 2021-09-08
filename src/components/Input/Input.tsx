/* eslint-disable no-unused-vars */
import React from 'react';

import { Container } from './styles';

type Props = {
  placeholder: string;
  type: string;
  onChange?: (event) => void;
};

const Input: React.FC<Props> = ({ placeholder, type, onChange, ...rest }) => {
  return <Container {...{ ...rest }} placeholder={placeholder} type={type} onChange={onChange} />;
};

export default Input;
