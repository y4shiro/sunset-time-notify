import React, { ReactElement } from 'react';

import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactElement;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
