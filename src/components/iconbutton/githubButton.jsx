import React from 'react'
import { BiLogoGithub } from 'react-icons/bi';
import { IconContext } from "react-icons";


function GithubButton() {
    return(
        <div className='flex'>
     <div>
        <button className='bg-[#e8e8e8] py-3 px-3 lg:py-4  lg:px-4 lg:mx-1 border-1 border-solid border-slate-500 rounded-full  transition-all duration-75  buttonShadow
         active:buttonShadowActive hover:buttonHover'>  <IconContext.Provider value={{ color: '#334155', size: '24px' }}><BiLogoGithub /></IconContext.Provider>
        </button>
    </div>
    </div>
)
}

export default GithubButton