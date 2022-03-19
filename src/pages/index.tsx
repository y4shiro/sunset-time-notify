import type { NextPage } from 'next';

import Map from '../components/Map';
import SunsetInfo from '../components/SunsetInfo';

const Home: NextPage = () => {
  return (
    <div className='flex'>
      <Map />
      <SunsetInfo />
    </div>
  );
};

export default Home;
