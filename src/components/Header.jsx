import { Github, Linkedin, Twitter, Home, Whatsapp } from '@boxicons/react';
import {Link} from 'react-router-dom';


const Header = () => {
  const github = "https://github.com/aycman";
  const linkedin = "https://www.linkedin.com/in/ayricarmity/";
  const whatsapp = "";
  return (
    <header data-aos="fade-down"
     data-aos-easing="linear" 
     className='z-10 flex justify-between mb-24 pt-10 items-center'>
          <div className="xl:text-4xl lg:text-4xl md:text-3xl font-extrabold text-2xl">
            ERIC JILO
          </div> 

          <div className='flex gap-5'>
            <Link to="/" className='text-2xl hover:text-gray-500 duration-300' href="#"><Home /></Link>
            <Link to={github} className='text-2xl hover:text-gray-500 duration-300'  href="#"><Github /></Link>
            <Link to={linkedin} className='text-2xl hover:text-gray-500 duration-300'  href="#"><Linkedin /></Link>
            <Link to="/" className='text-2xl hover:text-gray-500 duration-300'  href="#"><Whatsapp /></Link>

            {/* <a href="#"><Twitter size="32px" color="#1DA1F2" /></a> */}
          </div>


          
    </header>

  )
}

export default Header