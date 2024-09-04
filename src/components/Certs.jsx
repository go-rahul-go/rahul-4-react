import { useState } from "react"
import jsf from "../assets/cert/JS (codedamn)_page-0001.jpg"
import htmlC from "../assets/cert/html CSS (cisco)_page-0001.jpg"
import respW from "../assets/cert/responsive web design certificate_page-0001.jpg"
import webf from "../assets/cert/web fundamentals_page-0001.jpg"
import intern from "../assets/cert/intern.jpg"

import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"
const c = [
    {
        id: 0,
        title: "front end internship",
        company: "codingtribes.org",
        bio: "develop curriculum, conduct training sessions, mentor students, and ensure mastery of React concepts and best practices.",
        url: intern

    },
    {
        id: 1,
        title: "javascript fundamentals",
        company: "codedamn",
        bio: "course covers core concepts, advanced techniques, and practical applications to build dynamic, interactive web applications. ",
        url: jsf
    },
    {
        id: 2,
        title: "responsive web design",
        company: "freecodecamp",
        bio: "ensured websites adapt seamlessly to various devices, providing optimal user experience on desktops, tablets, and smartphones.",
        url: respW
    },
    {
        id: 3,
        title: "html/css",
        company: "cisco",
        bio: "HTML structures web content, while CSS styles and layouts that content, creating visually appealing and well-organized web pages.",
        url: htmlC

    },
    {
        id: 4,
        title: "web fundamentals",
        company: "codedam",
        bio: "Web fundamentals cover HTML, CSS, and JavaScript, while networking involves protocols and technologies for communication between web servers and clients.",
        url: webf
    }
]

const popMotion = {
    start: {
        y: "-100vh",

    },
    end: {
        y: 0,
        transition: { duration: 0.5, type: "spring", stiffness: 50 }
    },
    exit: {
        y: "-100vh",
        transition: { duration: 1, type: "spring", stiffness: 150 }
    }

}
const Certs = () => {

    const [ID, changeID] = useState(0);
    const [showPopUp, popUpStatus] = useState(false);



    return (
        <section className=' relative  overflow-hidden'>
            <h2 className='text-gray-200 px-5 text-5xl font-bold uppercase' >some certificates</h2>
            <div className='w-full my-10 flex flex-col gap-[20px] justify-center items-center lg:grid lg:grid-cols-3 lg:place-items-center lg:gap-5 lg:p-4'>
                {
                    c.map((item, index) => {
                        return (
                            <div key={index} className='cert-box p-3 w-[90%] md:[w-[80%] lg:w-[99%] ' >

                                <h3 className="text-cream text-xl uppercase font-semibold py-1">{item.title}</h3>
                                <p className="text-gray-300 font-light capitalize text-[0.9rem] py-1">{item.bio}</p>

                                <p className="cert-issuer right-2 bottom-2 py-2  flex justify-end capitalize font-semibold">by:  <span className="pl-1 uppercase font-bold">{item.company}</span></p>

                                <button className="bg-gray-300 text-black px-6 py-1 rounded-lg 
                                text-[1.05rem] font-semibold  mx-2 hover:bg-blue-500 hover:outline-blue-500 hover:text-slate-100" onClick={() => { popUpStatus(!showPopUp); changeID(item.id) }}>view</button>

                            </div>
                        )
                    })
                }
            </div>

            {
                <AnimatePresence mode="wait">
                    showPopUp &&
                    (

                    <motion.div className="pop-up-cert"  key={showPopUp} variants={popMotion} initial="start" animate={showPopUp ? "end" : "start"} exit="exit">
                        <div className="w-[90%] h-[45%] lg:w-[80%] lg:h-[90%]  overflow-hidden" >
                            <img src={c[ID].url} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute border-[3px] border-red-500 bg-red-500 w-9 h-9 right-5 top-40 lg:top-10 rounded-full grid place-items-center cursor-pointer">
                            <IoIosClose className="text-white text-3xl" onClick={() => popUpStatus(false)} />
                        </div>
                    </motion.div>

                    )
                </AnimatePresence>
            }

        </section>
    )
}

export default Certs;