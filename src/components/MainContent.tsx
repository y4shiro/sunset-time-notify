import React, { VFC } from 'react';
import Map from './Map';

const MainContent: VFC = () => {
  return (
    <div className='flex flex-wrap'>
      <Map />
      {/* <div>日没情報コンポーネント</div> */}
    </div>
  );
};

export default MainContent;
