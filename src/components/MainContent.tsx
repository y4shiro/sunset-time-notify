import { VFC } from 'react';

import Map from './Map';
import SunsetInfo from './SunsetInfo';

const MainContent: VFC = () => {
  return (
    <main className='flex'>
      <Map />
      <SunsetInfo />
    </main>
  );
};

export default MainContent;
