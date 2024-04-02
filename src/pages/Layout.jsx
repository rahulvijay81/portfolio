import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from '../components/Footer';
import Project from './Project';

function Layout() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer />
    </>
  );
}

export default Layout;
