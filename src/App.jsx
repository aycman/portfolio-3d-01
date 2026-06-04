import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'
import React, {useEffect} from 'react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();

const App = () => {
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true
    })
  })
  return (
    <Router>
      <div  className='container mx-auto px-12 h-screen flex-col '>
          <Header />

          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App