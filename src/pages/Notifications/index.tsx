import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';

import Notifications from './Notifications';

export const NotificationsContainer: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return <Notifications checked={checked} setChecked={setChecked} />;
};

export default inject('user')(observer(NotificationsContainer));
