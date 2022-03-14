import React, { ReactElement } from 'react';
import Header from './Header';

type Props = {
  children: ReactElement;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <p>Footer</p>
    </>
  );
};

export default Layout;
