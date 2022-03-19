import React, { VFC } from 'react';

const Header: VFC = () => {
  return (
    <nav className='bg-sky-700 border-gray-200 px-2 py-2 rounded'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='#'>
          <h1 className='py-4 px-4 text-2xl text-gray-100'>Sunset Time Notify</h1>
        </a>
        <div className='flex'>
          <a href='#'>
            <span className='py-4 px-4 text-gray-100 hover:underline'>about</span>
          </a>
          <a href='#'>
            <span className='py-4 px-4 text-gray-100 hover:underline'>menu</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
