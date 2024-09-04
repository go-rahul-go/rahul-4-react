import React, { useEffect, useState, useRef } from 'react'
import { Circle, Line } from "rc-progress"
import { skillCard } from '../Data'
import { useInView, motion } from 'framer-motion'


import Lottie from 'lottie-react'
import skills from "../skills.json"
const mot = {
    
}
const Skills = () => {

    const [percent, changePercent] = useState(0)
    const ref = useRef();

    const inView = useInView(ref, { once: true });


    useEffect(() => {
        let timer;
        if (inView) {
            timer = setInterval(() => {
                if (percent >= 85) {
                    clearInterval(timer)

                }
                if (percent < 85) {
                    changePercent(percent + 1)
                }
            },10)
        }

        return () => {
            clearInterval(timer)
        }
    })


    return (


        <div className=' w-full  overflow-hidden py-[60px] px-4 flex flex-col-reverse justify-evenly items-center gap-[90px] lg:gap-3 lg:flex-row' >

            <div className='w-[95%] lg:w-[50%]  grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-3 ' ref={ref}>
                {
                    skillCard.map((item, index) => {
                        return (
                            <div key={index} className='grid place-items-center skill-chart '  >
                                <Circle strokeWidth={6} percent={percent + item.percent} trailWidth={0} trailColor='#393843' strokeColor={{ '0%': '#e32be3', '50%': "#0080ff", '100%': '#0800ff' }} strokeLinecap="round" className='progress-circle'/>
                                <div className="absolute w-[65%] h-[55%] flex flex-col justify-evenly items-center">
                                    <div className='w-full h-[40%] overflow-hidden '>
                                        <img src={item.icon} className='w-full h-full object-contain' alt="" />
                                    </div>
                                    <p className="text-red-500 font-bold text-[1rem]">{percent + item.percent}%</p>
                                    <p className='text-cream font-bold uppercase text-[0.7rem] lg:text-[0.9rem]'>{item.title}</p>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className='w-[95%] h-[37vh] lg:w-[35%] lg:h-[35vw]  rounded-3xl flex flex-col justify-center items-center relative skill-box '>
                <h2 className='text-gray-100  uppercase font-bold text-4xl lg:text-5xl  text-center ' id="skill-title">my skills</h2>
                <div className='w-full h-[75%] overflow-hidden' id="skill-pic">
                    <Lottie animationData={skills} className='w-full h-full object-contain' />
                </div>

            </div>
        </div>


    )
}

export default Skills;