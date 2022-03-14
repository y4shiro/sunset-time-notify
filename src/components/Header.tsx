import React, { VFC } from 'react';

const Header: VFC = () => {
  return (
    <div className='bg-sky-700'>
      <nav className='flex items-center justify-between'>
        <a href='#'>
          <h1 className='py-4 px-4 text-2xl text-gray-100'>Sunset Time Notify</h1>
        </a>
        <div className='flex'>
          <a href='#'>
            <span className='py-4 px-4 text-gray-100'>about</span>
          </a>
          <a href='#'>
            <span className='py-4 px-4 text-gray-100'>menu</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
