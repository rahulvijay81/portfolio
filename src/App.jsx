import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from '../src/components/Pre';
import Home from './pages/Home';
import About from './pages/About';
// import Project from './pages/Project';
import Contact from './pages/Contact';
import './App.css';
import Cursor from '../src/components/Cursor';
import Layout from './pages/Layout';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App ">
      {/* <Cursor /> */}
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? 'no-scroll' : 'scroll'}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/project" element={<Project />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
