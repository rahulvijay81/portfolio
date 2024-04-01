import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Layout() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Contact/>
    </>
  );
}

export default Layout;
