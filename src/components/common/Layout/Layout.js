import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './Layout.scss';

function Layout(props) {
  const { children, withHeader, className } = props;

  return (
    <>
      {withHeader && <Header />}
      <main className={`main${className && ` ${className}`}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
