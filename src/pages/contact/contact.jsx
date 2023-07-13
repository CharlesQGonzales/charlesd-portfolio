import React from 'react'
import Avatar from '../../assets/avatar/AvatarSecond.png'
import Button from '../../components/button/button'

function contact() {
    return(
        <div className='container lg:mx-60 lg:my-5 lg:py-20 -mt-72 lg:mb-0 mb-32'>
            <div className='grid lg:grid-cols-2 grid-cols-1 mx-6 gap-10'>
                <div className='flex justify-end'>
                    <img src={ Avatar } alt="Avatar image" className='filter-drop-shadow lg:visible invisible dark:filter-none'/>
                </div>
                <div id="contact" className='flex items-end pt-10'>
                <form className='flex flex-col gap-5 items-center justify-center lg:h-[445px] h-96 lg:w-[460px] w-[330px] rounded-xl lg:rounded-[50px] border border-[#e8e8e8] bg-[#e8e8e8] cardShadow dark:cardShadow-none dark:bg-neutral-800'>
                    <h1 className='lg:text-4xl text-2xl font-black fontSecondary textShadow tracking-tight dark:text-slate-50 dark:textShadow-none'>Let's Work Together</h1>
                <div className="form-group">
                <label className="form-label lg:text-base text-sm fontPrimary font-semibold dark:text-slate-50" htmlFor="email">Your Email</label>
                <br></br>
                <input required="" placeholder="" className="form-input lg:w-[400px] w-72 lg:h-10 inputShadow rounded-lg p-2 bg-[#e8e8e8] focus:outline-none" name="email" id="email" type="email" />
                </div>
                <div className="form-group">
                <label className="form-label lg:text-base text-sm fontPrimary font-semibold dark:text-slate-50" htmlFor="message">Message</label>
                <br></br>
                <textarea required="" placeholder="" className="form-input lg:w-[400px] w-72 lg:h-40 h-32 inputShadow rounded-lg p-2 bg-[#e8e8e8] focus:outline-none" name="message" id="message"></textarea>
                 </div>
                 <Button type="submit" >Message Me</Button>
                 </form>
                </div>
            </div>
        </div>
    )
}

export default contact