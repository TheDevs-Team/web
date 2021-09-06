import React from 'react';

import { Container } from './styles';

type Props = {
  placeholder: string;
  type: string;
};

const Input: React.FC<Props> = ({ placeholder, type }) => {
  return <Container placeholder={placeholder} type={type} />;
};

export default Input;
