import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';

import Notifications from './Notifications';

export const NotificationsContainer: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState<HoverIconsType>('');
  const [loaded, setLoaded] = useState(true);

  const handleHover = (item: HoverIconsType) => setHover(item);

  return (
    <Notifications hover={hover} setHover={handleHover} checked={checked} setChecked={setChecked} loaded={loaded} />
  );
};

export default inject('user')(observer(NotificationsContainer));
