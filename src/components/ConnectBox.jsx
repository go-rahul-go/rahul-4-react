import React from 'react'
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';

import email from "../assets/connect-media/email.svg"
import call from "../assets/connect-media/call.svg"
import whatsapp from "../assets/connect-media/whatsapp.svg"

const cards = [
    {
        id: 0,
        url: email,
        name:"E-mail",
        t: "rahul4react@gmail.com"
    },
    {
        id: 1,
        url: call,
        name:"Call Me",
        t: "+91 817 844 6159"
    },
    {
        id: 2,
        url: whatsapp,
        name:"Drop a whatsapp",
        t: "817 844 6159"
    }

]


const mot = {
    start: {
        y: "-100vh"
    },
    end: {
       y: 0,
        transition: { duration: 0.5, type: "spring", stiffness: 50 }
    },
    exit: {
        y: "-100vh",
        transition: { duration: 0.6, type: "spring", stiffness: 50 }
    }
}

const ConnectBox = ({ connectStatus, showConnect }) => {

   

    return (
        <AnimatePresence >
            {
                showConnect && (
                    <motion.div className='connect w-[100%] h-[100vh]' variants={mot} initial="start" animate={showConnect ? "end" : "start"} exit="exit" key={showConnect}>
                        <div className='w-[90%] h-[60%] lg:w-[50%] lg:h-[60%] connect-text relative flex flex-col justify-center items-center rounded-xl '>
                            <div className='w-[90%]'>
                                {
                                    cards.map((item, index) => {
                                        return (
                                            <div className='w-full flex items-center my-5 border-l-4 border-red-500 pl-4 connect-card' key={index}>
                                                <span className='inline-block w-[50px] h-[50px] overflow-hidden'>
                                                    <img src={item.url} alt="" className='w-full h-full object-cover'/>
                                                </span>
                                                <div className=' text-cream ml-4 text-[1.2rem]  font-semibold'>
                                                    <p>{item.name}</p>
                                                    <p>{item.t}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='connect-close' onClick={() => connectStatus(false)}>
                                <IoIosClose className='w-full h-full' />
                            </div>
                        </div>


                    </motion.div>
                )
            }

        </AnimatePresence>

    )
}

export default ConnectBox