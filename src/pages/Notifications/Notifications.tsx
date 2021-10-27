import React from 'react';

import { ToggleStyled } from './styles';

type Props = {
  setChecked: (value: boolean) => void;
  checked: boolean;
};

export const Notifications: React.FC<Props> = ({ setChecked, checked }) => {
  return <ToggleStyled onChange={setChecked} checked={checked} />;
};

export default Notifications;
