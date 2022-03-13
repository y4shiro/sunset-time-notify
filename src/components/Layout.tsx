import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </>
  );
};

export default Layout;
