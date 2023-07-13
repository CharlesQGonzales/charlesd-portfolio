import React from 'react'
import Button from '../../components/button/button';
import Avatar1 from '../../assets/avatar/avatarFirst.png';
import Gmail from '../../components/iconbutton/gmailButton';
import Linkedin from '../../components/iconbutton/linkedinButton';
import Github from '../../components/iconbutton/githubButton';
import Instagram from '../../components/iconbutton/instagramButton';

function Home() {
    return(
        <div className='container lg:mx-60 lg:pt-28 lg:flex lg:flex-row'>
        <div data-aos="fade-right"
              data-aos-delay="700"
             data-aos-duration="1000"
             data-aos-easing="ease-in-sine">
          <img
            src={Avatar1}
            alt='Avatar'
            className='filter-drop-shadow invisible lg:visible h-44 lg:h-[680px] dark:filter-none'/>
        </div>
        <div className='lg:mt-72 px-6'>
          <div  data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1300">
          <p className='lg:text-2xl text-lg font-bold tracking-widest fontPrimary dark:text-slate-50'>
            Hello, I'm Charles Gonzales.
          </p>
          </div>
          <div  data-aos="fade-up"  
                data-aos-delay="750"
                data-aos-duration="1500">
          <p className='lg:text-5xl text-4xl my-6 lg:font-semibold font-extrabold textShadow lg:wordspaceNone wordspacePrimary fontSecondary dark:text-slate-50 dark:textShadow-none'>
            a <span className='font-extrabold text-slate-700 dark:text-slate-500'>front-end developer,</span>
          </p>
          </div>
          <div data-aos="fade-up"  
               data-aos-delay="800"
               data-aos-duration="1700">
          <p className='lg:text-3xl text-4xl mb-16 lg:font-semibold font-extrabold textShadow lg:wordspaceNone wordspacePrimary fontSecondary dark:text-slate-50 dark:textShadow-none'>
            I <span className='font-extrabold text-slate-700 dark:text-slate-500'>design</span> and{' '}
            <span className='font-extrabold text-slate-700 dark:text-slate-500'>develop</span> things for the web.
          </p>
          </div>
          <div className='flex absolute gap-2 lg:flex-row lg:gap-16' 
          data-aos="fade-up"                                                    
          data-aos-delay="850"
          data-aos-duration="1900">
            <a className='social-link' href='#projects'>
            <Button>projects</Button>
            </a>
               <div className='flex gap-[6px]'>
               <a className='social-link' href='https://mail.google.com/mail/u/0/?to=charlesgonzales406@gmail.com&fs=1&tf=cm' target='_blank'>
              <Gmail />
              </a>
              <a className='social-link' href='https://www.linkedin.com/in/charles-david-gonzales-51b87826a/' target='_blank'>
              <Linkedin />
              </a>
              <a className='social-link' href='https://github.com/CharlesQGonzales' target='_blank'>
              <Github />
              </a>
              <a className='social-link' href='https://www.instagram.com/19charles98/' target='_blank'>
              <Instagram />
              </a>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Home