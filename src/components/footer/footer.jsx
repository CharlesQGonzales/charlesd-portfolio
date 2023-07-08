import React from 'react'
import Gmail from '../iconbutton/gmailButton'
import Linkedin from '../iconbutton/linkedinButton'
import Github from '../iconbutton/githubButton'
import Instagram from '../iconbutton/instagramButton'
import { BiLogoReact } from 'react-icons/bi';
import { IconContext } from "react-icons";



function Footer() {
    return (
        <div className='container lg:mx-60 lg:py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-row gap-2 justify-center lg:mt-0 mt-10'>
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
            <div className='flex justify-center lg:items-center lg:my-0 my-14'>
                <p className='fontPrimary font-bold text-sm lg:text-base tracking-tight'>Created with<IconContext.Provider value={{ className: 'text-slate-700 mx-1 mb-1 inline', size: '20px' }}><BiLogoReact /></IconContext.Provider>by Charles Quiñones Gonzales</p>

            </div>
            </div>
   
        </div>

    )
}

export default Footer