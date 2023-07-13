import React from 'react'


function button(props) {
    return (
        <div>
            <button className='bg-[#e8e8e8] py-3 px-6 lg:py-4 lg:px-11 border-1 border-solid border-[#e8e8e8] rounded-3xl font-bold tracking-widest transition-all duration-75 active:text-[#666] buttonShadow active:buttonShadowActive text-slate-700 text-sm lg:text-base hover:buttonHover fontPrimary dark:shadow-none'> {props.children}
            </button>
        </div>
    )
}

export default button