import { VFC } from 'react';
import Image from 'next/image';

import MapImg from '../../public/Map.png';

const Map: VFC = () => {
  return (
    <div className='w-full bg-green-100'>
      <Image
        src='/Map.png'
        width='100'
        height='100%'
        layout='responsive'
        objectFit='contain'
        alt='Map'
      />
    </div>
  );
};

export default Map;
