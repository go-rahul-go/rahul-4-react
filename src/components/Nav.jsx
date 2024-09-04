import { useState } from 'react'
import { CgMenuMotion } from "react-icons/cg";

import star from "../assets/asterisk-svgrepo-com (2).svg"
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosClose } from "react-icons/io";


const menuAni = {
  start: {
    x: "-100vw"
  },
  end: {
    x: 0,
    transition: { duration: 0.5 }
  }
}

const exit = {
  x: "-100vw",
  transition: { duration: 0.5 }
}

const anchorAni = {
  start: {
    x: "-100vw"
  },
  end: {
    x: 0
  }
}
const Nav = () => {
  const [showMobMenu, changeMobMenu] = useState(false);



  return (
    <nav className='w-full h-[60px]  nav  lg:pc-nav lg:px-5'>
      <div className='circle w-[40px] h-[40px] border-[1.5px] border-gray-200 absolute left-2 top-[10px] grid place-items-center lg:hidden ' onClick={() => changeMobMenu(!showMobMenu)}>
        <CgMenuMotion className='text-cream text-3xl' />
      </div>
      <div className='flex justify-center items-center gap-2 cursor-pointer '>
        <div className='logo '>
          <img src={star} alt="" />
        </div>
        <h1 className='text-cream font-extrabold text-3xl lg:text-4xl '>Rahul G.</h1>
      </div>
      <div className='pc-nav-links-hide lg:pc-nav-links'>
        <a className='hover:text-yellow-400 transition linear duration-100 cursor-pointer' href="#hero">home</a>
        <a className='hover:text-yellow-400 transition linear duration-100 cursor-pointer' href="#work-section">work</a>
        <a className='hover:text-yellow-400 transition linear duration-100 cursor-pointer' href="#education">education</a>
        <a className='hover:text-yellow-400 transition linear duration-100 cursor-pointer' href="#contact">contact me</a>
      </div>
      <AnimatePresence mode="wait" >
        <motion.div className={showMobMenu ? "mob-nav-links lg:hidden" : "hidden"} variants={menuAni} initial="start" animate={showMobMenu ? "end" : "start"} exit={exit} key={showMobMenu}>
          <div className='close-mob-menu rounded-xl' onClick={() => changeMobMenu(false)}>
            <IoIosClose className='text-red-500 text-4xl ' />
          </div>
          <ul className='mob-nav-box '>
            <motion.a
              className='text-3xl uppercase font-semibold'
              onClick={() => changeMobMenu(false)}
              href="#hero"
              variants={anchorAni}
              initial="start"
              animate={showMobMenu ? "end" : "start"}
              transition={{ duration: 0.1, delay: 0.1, type: "spring", stiffness: 50 }} >
              home
            </motion.a>

            <motion.a className='text-3xl uppercase font-semibold'
              onClick={() => changeMobMenu(false)}
              href="#work-section"
              variants={anchorAni}
              initial="start"
              animate={showMobMenu ? "end" : "start"}
              transition={{ duration: 0.1, delay: 0.2, type: "spring", stiffness: 50 }}>
              work
            </motion.a>

            <motion.a className='text-3xl uppercase font-semibold'
              onClick={() => changeMobMenu(false)}
              variants={anchorAni}
              initial="start"
              animate={showMobMenu ? "end" : "start"}
              transition={{ duration: 0.1, delay: 0.3, type: "spring", stiffness: 50 }}
              href="#education" >
              education
            </motion.a>

            <motion.a className='text-3xl uppercase font-semibold'
              onClick={() => changeMobMenu(false)}
              variants={anchorAni}
              initial="start" animate={showMobMenu ? "end" : "start"}
              transition={{ duration: 0.1, delay: 0.4, type: "spring", stiffness: 50 }} 
              href="#contact">
              contact me
            </motion.a>
          </ul>
          
        </motion.div>
      </AnimatePresence>

    </nav>
  )
}

export default Nav;