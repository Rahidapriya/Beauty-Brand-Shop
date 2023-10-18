

import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import banner from '../../assets/bannergirl.png'

const Header = () => {
  
  useEffect(()=>{
      AOS.init({duration:'1000'})
    })
  return (
    <div>
      <div
        className="hero min-h-[91vh]  relative"
        style={{
          backgroundImage: 'url(https://i.ibb.co/9bm6Sk2/loginback.jpg)',
          backgroundPosition: 'center', // Set background position to center
          backgroundSize: 'cover', // Maintain aspect ratio and cover the entire container
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
       <div className="lg:flex lg:justify-between items-center ">
        {/* <img src={banner} className=" hidden lg:flex  -m-24 bottom-0 w-full" alt="" /> */}
        <img
  src={banner}
  className="hidden lg:flex   bottom-0 left-0 w-full absolute"
  alt=""
  style={{ width: '800px', height: 'auto' }} // Adjust the width and height as needed
/>

        <div className=" text-center  text-neutral-content lg:absolute">
          <div className=" " data-aos="fade-up">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold font-metamorphous ">Crafting Memorable <br /> Events</h1>
            <h2 className="mb-5 text-xxl md:text-xl   lg:text-right">
            Unforgettable weddings, birthdays,
and more await your visions embrace.

            </h2>
           <Link to=''> <button className="btn lg:px-8 cursor-pointer z-20 bg-orange-500 hover:bg-purple-950  rounded-none text-white font-bold border-none font-metamorphous">15% Sale</button></Link>
          </div>
        </div>
       </div>
       
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path
            fill="#fff"
            fillOpacity=".20"
            d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,117.3C672,117,768,171,864,208C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </div>
  );
};

export default Header;
