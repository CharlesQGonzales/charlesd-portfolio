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
        <div>
          <img
            src={Avatar1}
            alt='Avatar'
            className='filter-drop-shadow invisible lg:visible h-44 lg:h-[680px]'/>
        </div>
        <div className='lg:mt-72 px-6'>
          <p className='lg:text-2xl text-lg font-bold tracking-widest fontPrimary'>
            Hello, I'm Charles Gonzales.
          </p>
          <p className='lg:text-5xl text-4xl my-6 lg:font-semibold font-extrabold textShadow lg:wordspaceNone wordspacePrimary fontSecondary'>
            a <span className='font-extrabold text-slate-700'>front-end developer,</span>
          </p>
          <p className='lg:text-3xl text-4xl mb-16 lg:font-semibold font-extrabold textShadow lg:wordspaceNone wordspacePrimary fontSecondary'>
            I <span className='font-extrabold text-slate-700'>design</span> and{' '}
            <span className='font-extrabold text-slate-700'>develop</span> things for the web.
          </p>
          <div className='flex absolute gap-2 lg:flex-row lg:gap-16'>
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