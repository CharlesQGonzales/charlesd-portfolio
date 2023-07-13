import React from 'react'
import { BiLogoGmail } from 'react-icons/bi';
import { IconContext } from "react-icons";



function gmailButton() {
    return(
        <div className='flex'>
     <div>
        <button className='bg-[#e8e8e8] py-3 px-3 lg:py-4 lg:px-4 lg:mx-1 border border-solid border-[#e8e8e8] rounded-full  transition-all duration-75  buttonShadow active:buttonShadowActive hover:buttonHover dark:shadow-none'> <IconContext.Provider value={{ color: '#334155', size: '24px' }}><BiLogoGmail /></IconContext.Provider>
        </button>
    </div>
    </div>
)
}

export default gmailButton