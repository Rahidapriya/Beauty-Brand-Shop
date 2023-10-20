/* eslint-disable react/no-unescaped-entities */

import Navbar from '../../shared/navbar/Navbar';
import hero from '../../assets/aboutus.jpg'
import Footer from '../../shared/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


  

const About = () => {
  // useEffect(()=>{
  //   AOS.init({duration:'1000'})
  // })
    return (
        <div>
         

           <div>
           <div className='flex flex-col items-center justify-center mt-20 ' id='services'>
             <h3 className='text-amber-500'> To Know Our Experiences</h3>
             <h1 className='text-purple-950 text-4xl font-metamorphous font-bold'>__About Us__</h1>
            </div>

           <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    {/* // data-aos="fade-up" */}
    <img src={hero} className=" rounded-lg lg:w-5/12 shadow-2xl" />
    <div >
      {/* data-aos="fade-right" */}
      <h1 className=" text-3xl  md:text-5xl lg:text-5xl font-bold text-amber-500 md:text-center lg:text-left ">Crafting Unforgettable Experiences</h1>
      <p className="py-6" >

At <span className='text-amber-500'> Event Lab</span>, we are more than just event planners; we are the architects of unforgettable experiences. With a passion for creativity and a commitment to excellence, our team is dedicated to turning your dreams into reality.</p>



<p>Founded 2020, we embarked on this journey with a simple goal in mind - to create moments that matter. Over the years, we've had the privilege of being a part of countless celebrations, from intimate gatherings to grand galas. Each event has been a unique canvas for us to paint your vision and bring it to life. add title for each</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
           </div>
         
        </div>
    );
};

export default About;