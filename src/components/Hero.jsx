import React, { useEffect, useRef, useState } from 'react'
import { cardData } from '../Data';
import { MdAlternateEmail } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";

import sunflower from "../assets/sunflower-svgrepo-com.svg"
import resume from "../assets/rahul's_resume.pdf"

const Hero = () => {

   

    useEffect(() => {
        document.title = "Rahul goswami";

        return () => {
            document.title = "Rahul goswami"
        }
    }, [])

    
    return (
        <section className='w-full  bg-night pt-[60px] relative overflow-hidden  lg:h-[100vh]' id="hero">
            <div className='mob-hero md:mob-hero lg:pc-hero'>
                <div className='flex flex-col text-cream  px-4 py-6 lg:py-6 relative '>
                    <h2 className='text-4xl py-1 font-bold lg:text-5xl xl:text-6xl md:text-5xl'>Crafting Beautiful,</h2>
                    <h2 className='text-4xl py-1 font-bold lg:text-5xl xl:text-6xl md:text-5xl'>Responsive</h2>
                    <h2 className='text-4xl py-1 font-bold lg:text-5xl xl:text-6xl md:text-5xl'>Web Experience</h2>

                </div>
                <div className='text-gray-300 w-[100%] px-4 py-5 lg:w-[85%] lg:py-2 xl:py-2'>
                    <p className='text-base lg:text-xl xl:text-xl xl:py-6 capitalize md:text-2xl'>Hi, I'm <span className='text-yellow-400 font-semibold'>Rahul goswami</span>, a front-end developer specializing in React. I build responsive, user-friendly web applications with a focus on clean code and seamless user experiences.</p>
                </div>
                <div className='flex justify-start items-center px-4 gap-3 lg:py-2' >
                    <a className='text-cream bg-blue-500 py-2 px-3 hero-btn hover:bg-blue-700' href="#contact">contact me < MdAlternateEmail /></a>
                    <a className='text-cream bg-gray-600 py-2 px-4 hero-btn hover:bg-orange-600 ' href={resume} download="rahul's resume" target='_blank' rel="noreferrer">download CV <FaDownload /></a>
                </div>
            </div>
            <div className='absolute right-[0%] bottom-[-10%] w-[100vw] h-[50vh] lg:right-[-8%] lg:top-0 lg:w-[50vw] lg:h-[99vh] xl:w-[40vw] xl:h-[100vh] xl:right-[0%] xl:top-0' >
                <img src={sunflower} alt="" className='w-full h-full object-contain star' />
            </div>
            <PcCarousel />
            <MobLogoCarousel />

        </section>
    )
}

export default Hero;


function PcCarousel() {
    let reversedCards = cardData.toReversed();
    return (
        <div className='pc-carousel-hide lg:pc-carousel lg:h-[50vh]'>
            <div className='logos'>
                <div className='logo-slider'>
                    {cardData.map((item, index) => {
                        return (
                            <div className='logo-slider-card' key={index} >
                                <img src={item.url} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className='logo-slider'>
                    {cardData.map((item, index) => {
                        return (
                            <div className='logo-slider-card' key={index} >
                                <img src={item.url} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='logos2'>
                <div className='logo-slider2'>
                    {
                        reversedCards.map((item, index) => {
                            return (
                                <div className='logo-slider-card' key={index} >
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='logo-slider2'>
                    {

                        reversedCards.map((item, index) => {
                            return (
                                <div className='logo-slider-card' key={index} >
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

function MobLogoCarousel() {
    let reversedCards = cardData.toReversed();
    return (
        <div className='w-full  mob-logo-carousel lg:hidden' >
            <div className='m-logo1 overflow-hidden mt-2'>
                <div className='mob-logo-slider'>
                    {
                        cardData.map((item, index) => {
                            return (
                                <div className='mob-logo-card' key={index}>
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mob-logo-slider'>
                    {
                        cardData.map((item, index) => {
                            return (
                                <div className='mob-logo-card' key={index}>
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='m-logo1 overflow-hidden mt-2'>
                <div className='mob-logo-slider2'>
                    {
                        reversedCards.map((item, index) => {
                            return (
                                <div className='mob-logo-card' key={index}>
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mob-logo-slider2'>
                    {
                        reversedCards.map((item, index) => {
                            return (
                                <div className='mob-logo-card' key={index}>
                                    <img src={item.url} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}