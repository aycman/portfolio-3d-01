import { Github, Linkedin, Twitter, Home, Whatsapp } from '@boxicons/react';


const Header = () => {
  return (
    <header className='z-10 flex justify-between mb-24 pt-10 items-center'>
          <div className="lg:text-5xl font-extrabold text-2xl">
            SITE NAME
          </div> 

          <div className='flex gap-5'>
            <a className='text-2xl hover:text-gray-500 duration-300' href="#"><Home /></a>
            <a className='text-2xl hover:text-gray-500 duration-300'  href="#"><Github /></a>
            <a className='text-2xl hover:text-gray-500 duration-300'  href="#"><Linkedin /></a>
            <a className='text-2xl hover:text-gray-500 duration-300'  href="#"><Whatsapp /></a>

            {/* <a href="#"><Twitter size="32px" color="#1DA1F2" /></a> */}
          </div>


          
    </header>

  )
}

export default Header