import React, { useState } from 'react';
import Home from './Home';

const HomeContainer: React.FC = () => {
  const [hover, setHover] = useState<HoverIconsType>('');

  const handleHover = (item: HoverIconsType) => setHover(item);

  return <Home hover={hover} setHover={handleHover} />;
};

export default HomeContainer;
