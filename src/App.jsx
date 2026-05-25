import Header from './components/Header';
import Hero from './components/Hero'
import React, {useEffect} from 'react';
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
    <div  className='container mx-auto px-12 h-screen flex-col '>
        <Header />
        <Hero />
    </div>

  )
}

export default App