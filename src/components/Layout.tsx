import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactElement;
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
