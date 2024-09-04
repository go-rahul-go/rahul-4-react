import React, { useRef } from 'react'
import { motion, useScroll, useMotionValueEvent, useTransform, useInView } from "framer-motion";

import { workData } from '../Data';
import visit from "../assets/visit-link.svg"

const Works = () => {

    const workRef = useRef(null);
  

   

    const { scrollYProgress } = useScroll({ target: workRef })
    const left = useTransform(scrollYProgress, [0, 1], [(window.innerWidth / 3), -(window.innerWidth + 100)])
    const tabLeft = useTransform(scrollYProgress, [0, 1], [(window.innerWidth / 2), -(window.innerWidth * 2.1)])
    const mobLeft = useTransform(scrollYProgress, [0, 1], [100, - (1400)])
    useMotionValueEvent(scrollYProgress, "change", latest => {
        console.log(latest)

    })
    return (
        <section className=' w-full work' ref={workRef} id="work-section">
            <h2 className='text-gray-200 uppercase text-4xl lg:text-5xl font-bold px-5 '>my work</h2>
            <motion.div className='parent-work-slider' >
                <motion.div className='my-works-hide lg:my-works' style={{ left: left }}>
                    {
                        workData.map((item, index) => {
                            return (
                                <WorkCard key={index} image={item.url} title={item.title} bio={item.p} glink={item.github} website={item.website} />
                            )
                        })
                    }
                </motion.div>
                <motion.div className='tab-my-works-hide md:tab-my-works lg:tab-my-works-hide xl:tab-my-works-hide' style={{ left: tabLeft }}>
                    {
                        workData.map((item, index) => {
                            return (
                                <WorkCard key={index} image={item.url} title={item.title} bio={item.p} glink={item.github} website={item.website} />
                            )
                        })
                    }
                </motion.div>
                <motion.div className='mob-my-works md:mob-my-works-hide lg:mob-my-works-hide xl:mob-my-works-hide' style={{ left: mobLeft }}>
                    {
                        workData.map((item, index) => {
                            return (
                                <WorkCard key={index} image={item.url} title={item.title} bio={item.p} glink={item.github} website={item.website} />
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Works



function WorkCard({ image, title, bio,glink,website }) {
   
    return (
        <div className='w-[270px] h-[42vh] md:w-[350px] md:h-[350px] lg:w-[300px] lg:h-[350px]  xl:w-[25vw] xl:h-[28vw] work-card rounded-xl' >
            
            <div className='w-[100%] h-[60%] overflow-hidden work-image'>
                <img src={image} alt="" className='w-[98%] h-[98%] object-contain' />
            </div>
            <div className=' text-cream  absolute bottom-[7%] flex flex-col gap-2 px-3'>
                <p className='text-sky-400 text-[1.25rem] font-bold xl:text-[1.5rem]'>{title}</p>
                <p className='text-[0.92rem] capitalize font-light xl:text-[1.1rem'>{bio}</p>
                <div className=" flex gap-3 capitalize  font-semibold">
                    <a className='px-5 py-1 bg-cream rounded work-links text-black ' id="github-link" href={glink} target='_blank'>github</a>
                    <a className='px-5 py-1 bg-blue-500 rounded work-links' id="visit-link" href={website} target='_blank'>visit
                       
                    </a>
                </div>
            </div>

            
        </div>
    )
}