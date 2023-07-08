import React from 'react'
import Myimage from '../../assets/aboutimage/me.jpg'
import Gmail from '../../components/iconbutton/gmailButton'
import Linkedin from '../../components/iconbutton/linkedinButton';
import Github from '../../components/iconbutton/githubButton';
import Instagram from '../../components/iconbutton/instagramButton';
import Runnerup from '../../assets/aboutimage/runner-up.png';
import Certificate from '../../assets/aboutimage/certificate.png';
import SololearnHtml from '../../assets/aboutimage/sololearnhtml.png';
import SololearnJs from '../../assets/aboutimage/sololearnjs.jpg'
import Tech from '../../components/tech/tech'

function about() {
    return(
        <div id="about" className='container lg:mx-60 lg:py-36 lg:my-20 py-20 lg:mb-0'>
            <div className='flex lg:flex-row flex-col gap-8 lg:gap-0'>
             <div className="lg:w-[55%] w-[325px] h-[565px] lg:h-[460px] mx-6 lg:px-0 rounded-xl mt-5 lg:rounded-[50px] bg-[#e8e8e8] cardShadow flex lg:flex-row-reverse flex-col">
                <div>
                <img src={ Myimage } alt='charlesGonzalesimage' className='absolute lg:z-10 lg:w-[300px] w-[140px] rounded-full border-1 cardShadow border-[#e8e8e8] lg:left-[335px] left-28 lg:translate-y-[-30%] translate-y-[-30%]'/>
                </div>
                <div className='flex flex-col items-center mx-3 lg:mx-0 lg:w-[450px] lg:mt-0 mt-32'>

               <div className='flex lg:mt-5 gap-[10px]'>
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
                    <h1 className='lg:text-2xl text-xl lg:font-black my-4 m text-start fontSecondary block textShadow'>about</h1>
                    <p className='lg:text-base font-semibold mb-7 text-sm fontPrimary text-slate-500 break-words lg:w-[395px] tracking-normal wordspaceSecondary'>I am a full-stack web developer one of the graduates of KodeGo bootcamp with a passion for front-end web development. Through my studies, I have gained experience in wireframing and creating intuitive user interfaces. I am proficient in HTML, CSS, JavaScript, React,
                    tailwind, vite, and a keen eye for design. In addition, I am skilled in various design tools such as Figma and Adobe Photoshop. I am excited to continue learning and expanding my skills in the field of web development and design.</p>
                </div>
                <div className='flex items-end gap-2 lg:mb-10 lg:mr-5 ml-2 lg:ml-0'>
                <Tech>$learning</Tech>
                <Tech>$coding</Tech>
                <Tech>$goals</Tech>
                </div>
             </div>
             <div className='grid grid-cols-2 lg:items-center gap-5 mx-6'>
             <div className='flex flex-col gap-y-3'> 
             <div className='lg:w-64 w-40 lg:h-[210px] h-32 rounded-xl lg:mt-5 lg:rounded-3xl bg-[#e8e8e8] cardShadow'>
             <img src={ SololearnJs} alt='kodeGo-runnerp-up-image' className='border-2 opacity-70  hover:scale-[1.1] hover:opacity-100 transition-all ease-out duration-[0.3s] hover:skew lg:rounded-3xl border-[#e8e8e8] rounded-xl h-full' />  
                </div>
                <div className='lg:w-64 w-40 lg:h-[210px] h-32 rounded-xl lg:mt-5 lg:rounded-3xl bg-[#e8e8e8] cardShadow'>
                    <img src={ Runnerup } alt='kodeGo-runnerp-up-image' className='border-2 opacity-70  hover:scale-[1.1] hover:opacity-100 transition-all ease-out duration-[0.3s] hover:skew lg:rounded-3xl border-[#e8e8e8] rounded-xl h-full' />  
                </div>
             </div>
             <div className='flex flex-col gap-y-3'>
                <div className='lg:w-64 w-40 lg:h-[210px] h-32 rounded-xl lg:mt-5 lg:rounded-3xl bg-[#e8e8e8] cardShadow'><img src={ SololearnHtml } alt='kodeGo-certificate' className='border-2 opacity-70  hover:scale-[1.1] hover:opacity-100 transition-all ease-out duration-[0.3s] hover:skew lg:rounded-3xl border-[#e8e8e8] rounded-xl h-full'/></div>
                <div className='lg:w-64 w-40 lg:h-[210px] h-32 rounded-xl lg:mt-5 lg:rounded-3xl bg-[#e8e8e8] cardShadow'><img src={ Certificate } alt='kodeGo-certificate' className='border-2 opacity-70  hover:scale-[1.1] hover:opacity-100 transition-all ease-out duration-[0.3s] hover:skew lg:rounded-3xl border-[#e8e8e8] rounded-xl h-full'/></div>  
             </div>
             </div>
            </div>
        </div>
    )
}

export default about