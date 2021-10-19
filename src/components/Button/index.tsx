import React from 'react';
import { Container } from './styles';

type Props = {
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ onClick, ...rest }) => <Container {...{ ...rest }} onClick={onClick} />;
