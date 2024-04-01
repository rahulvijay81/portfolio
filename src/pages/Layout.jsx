import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Contact/>
      <Footer />
    </>
  );
}

export default Layout;
