import React from 'react'


function tech(props) {
    return (
        <div>
            <span className='lg:text-base lg:font-semibold fontPrimary bg-slate-700 text-white py-[6px] px-3 rounded-2xl'>{props.children}</span>
        </div>
    )
}


export default tech