import React, { VFC } from 'react';

const Footer: VFC = () => {
  return (
    <footer className='flex items-center justify-between p-6 bg-sky-700 rounded-lg shadow'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-300'>
        © 2022 y4shiro
      </span>

      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-300 sm:mt-0'>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6'>
            About
          </a>
        </li>
        <li>
          <a href='#' className='mr-4 hover:underline md:mr-6'>
            Test
          </a>
        </li>
        <li>
          <a href='#' className='hover:underline'>
            Foobar
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
