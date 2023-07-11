import React from 'react'
import { IoLogoSass } from 'react-icons/io'
import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { BiLogoCss3 } from 'react-icons/bi'
import { BiLogoJavascript } from 'react-icons/bi'
import { FaBootstrap } from 'react-icons/fa'
import { SiVitest } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { IconContext } from 'react-icons';


function skills () {
    return (

       <div id="skills" className='container lg:pt-20 mb-20 lg:mx-60 lg:pb-24 lg:px-24'>   

       <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div className='block tracking-widest mb-10 lg:mb-0'data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="50"
                     data-aos-duration="1200">
        <p className='lg:text-5xl text-2xl font-black fontSecondary lg:text-start text-center lg:mb-5 textShadow '>tech stack</p>
        <p className='lg:text-xl  text-lg font-semibold fontPrimary lg:text-start text-center text-slate-700'>_selected tech</p>
        </div>
        <div>
       <ul className="skill grid grid-cols-4 lg:flex justify-center lg:mr-7 mr-2 items-start lg:h-full h-2/4">
       <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="50"
                     data-aos-duration="1200">
    <li className="skill-item mx-8 lg:w-11 w-10 h-11 flex justify-center items-center">
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-red-400 before:hover:bg-red-400 after:hover:bg-red-400 color-fi">
    <IconContext.Provider value={{ size: '32px'}}>
    <FaHtml5  />
    </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="100"
                     data-aos-duration="1200">
  <li className="skill-item mx-8 lg:w-11 w-10 h-11 flex justify-center items-center">
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-blue-400 before:hover:bg-blue-400 after:hover:bg-blue-400 color-se">
    <IconContext.Provider value={{ size: '32px'}}>
      <BiLogoCss3  />
      </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="150"
                     data-aos-duration="1200">
  <li className="skill-item mx-8 lg:w-11 w-10 h-11 flex justify-center items-center">
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-yellow-400 before:hover:bg-yellow-400 after:hover:bg-yellow-400 color-th">
    <IconContext.Provider value={{ size: '32px'}}>
      <BiLogoJavascript   />
      </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="200"
                     data-aos-duration="1200">
  <li className="skill-item mx-8 lg:w-11 w-10 h-11 flex justify-center items-center"> 
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-pink-400 before:hover:bg-pink-400 after:hover:bg-pink-400 color-fo">
    <IconContext.Provider value={{ size: '32px'}}>
     <IoLogoSass />
       </IconContext.Provider>
    </a>
  </li>
  </div>
</ul>
<ul className="skill-secondary lg:flex grid grid-cols-4 gap-y-4 lg:justify-start ml-3 lg:ml-0 items-center h-full">
<div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="250"
                     data-aos-duration="1200">
  <li className="skill-item-secondary lg:mx-8 mx-5 lg:w-11 w-10 h-11 flex justify-center items-center">
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-violet-400 before:hover:bg-violet-400 after:hover:bg-violet-400 color-si">
    <IconContext.Provider value={{ size: '32px'}}>
    <FaBootstrap  />
    </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="300"
                     data-aos-duration="1200">
  <li className="skill-item-secondary lg:mx-8 mx-5 lg:w-11 w-10 h-11 flex justify-center items-center">
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-cyan-400 before:hover:bg-cyan-400 after:hover:bg-cyan-400 color-se">
    <IconContext.Provider value={{ size: '32px'}}>
      <FaReact  />
      </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="350"
                     data-aos-duration="1200">
  <li className="skill-item-secondary lg:mx-8 mx-5 lg:w-11 w-10 h-11 flex justify-center items-center">
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-purple-400 before:hover:bg-purple-400 after:hover:bg-purple-400 color-ei">
    <IconContext.Provider value={{ size: '32px'}}>
      <SiVitest    />
      </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="400"
                     data-aos-duration="1200">
  <li className="skill-item-secondary lg:mx-8 mx-5 lg:w-11 w-10 h-11 flex justify-center items-center"> 
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-sky-400 before:hover:bg-sky-400 after:hover:bg-sky-400 color-ni"> 
    <IconContext.Provider value={{ size: '32px'}}>
     <SiTailwindcss />
       </IconContext.Provider>
    </a>
  </li>
  </div>
  <div data-aos="slide-up"
                     data-aos-once="true"
                     data-aos-delay="450"
                     data-aos-duration="1200">
  <li className="skill-item-secondary lg:mx-8 mx-5 lg:w-11 w-10 h-11 flex justify-center items-center"> 
    <a className="skill-icon hover:color-hover relative w-full h-full flex justify-center items-center bg-[#e8e8e8] text-center transform-skew before:content-space before:absolute before:top-[7px] before:-left-3 before:h-full before:w-3 before:bg-[#b1b1b1] before:before-transform-skew after:content-space after:absolute after:top-11 after:-left-[7px] after:h-3 after:w-full after:bg-[#b1b1b1] after:after-transform-skew hover:skill-icon-hover hover:bg-cyan-600 before:hover:bg-cyan-600 after:hover:bg-cyan-600 color-te">
    <IconContext.Provider value={{ size: '32px'}}>
     <SiMysql />
       </IconContext.Provider>
    </a>
  </li>
  </div>
</ul>
</div>
</div>
 </div>

    )
}

export default skills