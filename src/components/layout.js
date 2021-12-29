import * as React from 'react';
import Navbar from './navbar';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="root-container-flex">
      <title>{pageTitle}</title>
      <Navbar />
      <div id="main-container">
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
