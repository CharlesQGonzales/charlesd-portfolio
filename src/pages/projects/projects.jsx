import React from 'react'
import { projects } from '../../data/projects'
import Button from '../../components/button/button.jsx'
import Github from '../../components/iconbutton/githubButton.jsx'
import Tech from '../../components/tech/tech'




function Card() {
    return(
        <div id="projects" className="container lg:mt-48 mt-80 lg:mx-60 lg:pt-28 lg:px-24 mb-5">
        <div className='block tracking-widest lg:pb-20 ml-3'
             data-aos="slide-up"
             data-aos-once="true"
             data-aos-duration="1000">
        <p className='lg:text-4xl text-2xl font-black fontSecondary lg:text-start text-center lg:mb-5 textShadow '>featured projects</p>
        <p className='lg:text-xl  text-lg font-semibold fontPrimary lg:text-start text-center text-slate-700'>_selected projects</p>
        </div>
        <div>
        <div className='flex flex-col lg:gap-10 gap-5'>
            {projects
            .filter((project) => project.card)
            .map((card_projects) => (
                <div key={card_projects.id}>
                    <div data-aos="slide-up"
                         data-aos-once="true"
                         data-aos-delay="50"
                         data-aos-duration="1200">
                <div className="card lg:w-[85%] w-[330px] h-96 lg:h-[460px] mx-6 lg:px-0 rounded-xl mt-5 lg:rounded-[50px] bg-[#e8e8e8] cardShadow flex lg:flex-row-reverse flex-col">
                <div>
                <img src={card_projects.image} alt='ulcollexWebsite' className='absolute lg:z-10 lg:w-[58%] w-[330px] rounded-md lg:rounded-[30px] border-1 cardShadow border-[#e8e8e8] lg:-left-20 lg:-translate-y-[-8%]'/>

                </div>
                <div className='flex flex-col mx-3 lg:mx-0 lg:w-[430px] lg:mt-0 mt-44'>
                    <h1 className='lg:text-3xl lg:font-black lg:my-14 text-center fontSecondary block textShadow'>{card_projects.title}</h1>
                    <p className='lg:text-base font-semibold lg:mb-5 text-sm fontPrimary text-slate-500 break-words lg:w-[395px] tracking-normal wordspaceSecondary'>{card_projects.subText}</p>
                    <div className='flex flex-row lg:gap-3 gap-1 lg:mb-10 my-4'>
                    <span><Tech>{card_projects.tech}</Tech></span>
                    <span><Tech>{card_projects.techSecond}</Tech></span>
                    <span><Tech>{card_projects.techThird}</Tech></span>
                    <span></span>
                    </div>
                    <div className='flex gap-5'>
                        <a className='repo-link' href={card_projects.live} target='_blank  '>
                    <Button>take a look 
                    </Button>
                    </a>
                    <a className='live-link' href={card_projects.repo} target='_blank'>
                    <Github />
                    </a>
                    </div>
                </div>
             </div>
             </div>
            </div>
            ))}
        </div>
        </div>
      </div>
    )
}


export default Card
