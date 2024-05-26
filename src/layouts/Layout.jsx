import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      < Navbar />
      <main className=''>{children}</main>
      <footer className="bg-dark text-light  text-center py-4">
        &copy; 2024 All rights reserved. <a className='text-light fw-bold' href="https://www.linkedin.com/in/mohammed-eid-alghumaity/">Mohammed Alghumayti</a>
      </footer>
    </>
  );
};

export default Layout;
