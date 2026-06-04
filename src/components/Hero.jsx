import { SparklesAlt, SendAlt } from '@boxicons/react';
import Spline from "@splinetool/react-spline";
import {Link} from 'react-router-dom';
import splineScene from '../assets/scene-clean.splinecode?url';


const Hero = () => {
  return (
    <main className=" h-[80vh] flex flex-1 flex-col justify-between ">
        <div className=" flex py-10 relative">
            {/* texts section */}
            <div  data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" 
                    className=" flex flex-col absolute md:gap-10 lg:top-12 lg:left-4 md:top-36 md:left-1 top-72 left-12 [@media(max-width:380px)]:top-28 [@media(max-width:380px)]:left-8">
                    {/* Portfolio button */}
                <Link to="/Portfolio" className='introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center  mb-5 relative'>
                    <div className=' flex flex-center'>
                        <i className='button-text flex flex-center gap-1'>
                            <SparklesAlt className="w-5 h-5 text-gray-100" />
                             Developer Portfolio
                        </i>
                    </div>
                </Link>

                <div className='lg:max-w-[500px] sm:max-w-[400px] max-w-[255px] leading-relaxed'>
                    <h1 className='lg:text-5xl sm:text-4xl text-2xl font-extrabold mb-5 bg-gradient-to-r from-[#8b6c2e] to-white bg-clip-text - text-transparent'>
                        Providing the best Project experience
                    </h1>
                    <p className='max-w-[400px]'>
                        BUILDING SEAMLESS, INTUITIVE WEB INTERFACES TO BRING YOUR BRAND'S DIGITAL VISION TO LIFE
                    </p>
                </div>

                {/* Contact me button */}
                <div className='mt-5'>
                    <Link to="/Contact" href="#" className='w-[208px] h-[33px] inline-flex items-center justify-center border border-gray-400 rounded-full text-sm tracking-wider contact-button'>
                        <i className='contact-text inline-flex items-center justify-center gap-1'><SendAlt className="w-5 h-5 text-gray-300" />CONTACT ME</i>
                    </Link>
                </div>
            </div>
            {/* 3d model section */}
            <div data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className=' -z-10 fixed h-[35%] top-[10%] right-[20%] md:top-[20%] md:right-[-10%] md:h-[50%] lg:top-[12%] lg:right-[2%] lg:w-[55%] lg:h-[70%]'>
                {/* https://prod.spline.design/evt8x2tQBIldiM8b/scene.splinecode */}
                <Spline scene={splineScene} />
            </div>
        </div>

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-delay="200"
                className=''>
            <h1 className='xl:text-8xl lg:text-7xl md:text-6xl text-3xl font-extrabold mb-8 tracking-wider text-center bg-gradient-radial from-white to-gray-600 bg-clip-text text-transparent [@media(max-width:380px)]:mb-2'>
                WEB DEVELOPER
            </h1>
        </div>

        <img className='absolute -z-20 bg-cover min-w-full min-h-screen top-0 left-0' src="src/assets/background.png" alt="bg-img" />

    </main>    
)
}

export default Hero











// import { SparklesAlt, SendAlt } from '@boxicons/react';
// import Spline from "@splinetool/react-spline";

// const Hero = () => {
//   return (
//     <main className="flex flex-col min-h-screen relative overflow-hidden">
//       {/* Top Section - Scrollable */}
//       <div className="flex-1 py-[8%] relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
        
//         {/* 3D Model - First on mobile, right on desktop */}
//         <div className="order-1 lg:order-2 w-[78%] md:w-[65%] lg:w-[48%] 
//                         h-[38vh] md:h-[48vh] lg:h-[62vh] 
//                         lg:absolute lg:right-[4%] lg:top-[12%] 
//                         -z-10">
//           <Spline 
//             scene="https://prod.spline.design/evt8x2tQBIldiM8b/scene.splinecode" 
//             className="w-full h-full"
//           />
//         </div>

//         {/* Texts Section */}
//         <div className="order-2 lg:order-1 flex flex-col absolute lg:relative 
//                         lg:left-[5%] lg:top-auto
//                         w-[85%] max-w-[520px] 
//                         top-[22%] md:top-[26%] left-[7%] z-20">
          
//           {/* Introducing Badge */}
//           <div className='introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center mb-5'>
//             <div className='flex flex-center'>
//               <i className='flex flex-center gap-1'>
//                 <SparklesAlt className="w-5 h-5 text-gray-100" />
//                 Developer Portfolio
//               </i>
//             </div>
//           </div>

//           {/* Heading & Description */}
//           <div className='lg:max-w-[500px] sm:max-w-[400px] max-w-[255px] leading-relaxed'>
//             <h1 className='lg:text-5xl sm:text-4xl text-[7.8vw] font-extrabold mb-5 bg-gradient-radial from-violet-400 to-white bg-clip-text text-transparent'>
//               Providing the best Project experience
//             </h1>
//             <p className='max-w-[400px] text-[3.8vw] md:text-[2.1vw] lg:text-base'>
//               WITH OVER FOUR YEARS OF REFINED EXPERTISE THIS DESIGNER HAS METICULOUSLY CRAFTED SEAMLESS AND INTUITIVE USER EXPERIENCES
//             </p>
//           </div>

//           {/* Contact Button */}
//           <div className='mt-5'>
//             <a href="#" className='w-[208px] h-[33px] inline-flex items-center justify-center border border-gray-400 rounded-full text-sm tracking-wider contact-button'>
//               <i className='inline-flex items-center justify-center gap-1'>
//                 <SendAlt className="w-5 h-5 text-gray-300" />CONTACT ME
//               </i>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Title - Always at bottom and visible */}
//       <div className='mt-auto pb-[7vh] md:pb-[9vh]'>
//         <h1 className='lg:text-9xl md:text-8xl text-[13vw] font-extrabold mb-8 tracking-wider text-center bg-gradient-radial from-white to-gray-600 bg-clip-text text-transparent'>
//           WEB DEVELOPER
//         </h1>
//       </div>
//     </main>
//   );
// };

// export default Hero;