
import thanks from "../thankyou.json"
import Lottie from "lottie-react"
import g from "../assets/footer-media/github.svg"
import f from "../assets/footer-media/facebook.svg"
import i from "../assets/footer-media/instagram.svg"
import l from "../assets/footer-media/linkedin.svg"
import { FaRegCopyright } from "react-icons/fa6";
const socialCards = [
    {
        id: 0,
        url: g,
        link: "https://github.com/go-rahul-go"
    },
    {
        id: 1, url: l,
        link: "https://www.linkedin.com/in/rahul-goswami-a7138a321/"
    },
    {
        id: 2, url: f,
        link: "https://github.com/go-rahul-go"
    },
    {
        id: 3, url: i,
        link: "https://github.com/go-rahul-go"
    },
]

const Footer = () => {



    return (
        <section className='min-h-[60vh] flex flex-col justify-evenly items-center lg:flex-row footer lg:min-h-[90vh]' >
            <div className="f-greet w-[90%]  lg:w-[45%] flex flex-col gap-5 justify-center items-center">
                <p className="text-cream text-4xl lg:text-6xl capitalize">thanks <span className="text-red-500 font-semibold lowercase">for</span> visiting</p>
                <div className="flex gap-[20px]">
                    {
                        socialCards.map((item, index) => {
                            return (
                                <a className="w-[65px] h-[65px]  grid place-items-center rounded-xl bg-gray-700 social-card" key={index} href={item.link} target="_blank">
                                    <img src={item.url} alt="" className="w-[60%] h-[60%] object-contain" />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className="f-image  w-[90%] h-[35vh] lg:w-[45%] lg:h-[400px] rounded-md">
                <Lottie animationData={thanks} className='w-full h-full object-cover' />
            </div>
            <div className="foot-bottom">
                <p className="text-gray-400 capitalize text-sm lg:text-base flex items-center gap-1">
                    <span className="grid place-items-center w-[20px] h-[20px] "><FaRegCopyright /></span>
                    Rahul goswami
                </p>
                <p className="text-gray-400 capitalize text-sm lg:text-base">2024 - present</p>
            </div>
        </section>
    )
}

export default Footer