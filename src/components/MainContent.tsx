import React, { VFC } from 'react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: VFC = () => {
  return (
    <div className='flex flex-wrap'>
      <Map />
      <SunsetInfo />
    </div>
  );
};

export default MainContent;
