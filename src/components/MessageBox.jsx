
import { useEffect, useRef, useState } from "react";
import EmailAnimation from "../emailAnimation.json";
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
import hourglass from "../assets/hourglass.svg"
import pleasewait from "../please-wait-animation.json"
import successAnimation from "../got-message.json"
import errorIcon from "../assets/error.svg"

const MessageBox = () => {
    const [formData, updateFormData] = useState({ name: "", company: "", email: "", message: "" });
    const [messageStatus, changeMessageStatus] = useState(false)
    const [loader, showloader] = useState(false)
    const [messageError,updateMessageError]=useState(false)


    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        e.preventDefault();


        updateFormData((previous) => {
            switch (name) {
                case "name":
                    return {
                        name: value,
                        company: previous.company,
                        email: previous.email,
                        message: previous.message
                    }
                case "company":
                    return {
                        name: previous.name,
                        company: value,
                        email: previous.email,
                        message: previous.message
                    }
                case "email":
                    {
                        return {
                            name: previous.name,
                            company: previous.company,
                            email: value,
                            message: previous.message
                        }
                    }
                case "message":
                    {
                        return {
                            name: previous.name,
                            company: previous.company,
                            email: previous.email,
                            message: value
                        }
                    }
            }
        })
    }

    const sendMessage = (e) => {
        e.preventDefault();
        const templateid = import.meta.env.VITE_TEMPLATE_ID;
        const serviceid = import.meta.env.VITE_SERVICE_ID;
        const publickey = import.meta.env.VITE_PUBLIC_KEY;


        const templateparams = {
            from_name: formData.name,
            from_company: formData.company,
            from_email: formData.email,
            message: formData.message

        }
        // console.log(import.meta.env);
        showloader(true)
        emailjs.send(serviceid, templateid, templateparams, publickey)
        .then(() => {
                showloader(false)
                changeMessageStatus(true)
                updateFormData({ name: "", company: "", email: "", message: "" })
               
            })
            .then(()=>{
                let p=new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        resolve("clear message successfull status")    
                    },5000)
                })

                return p;
                
            })
            .then(()=>{
                changeMessageStatus(false)
            })
            .catch((error) => {
                console.log(error);
                updateMessageError(true)
                showloader(false)

            })


    }



    return (
        <section className='w-full min-h-[50vh] relative overflow-hidden' id="contact">
            <h2 className='text-gray-200 uppercase text-4xl lg:text-5xl font-bold px-5 py-7'>message me</h2>

            <div className="my-5 mx-auto w-[95%] flex flex-col p-2 gap-4 justify-evenly lg:flex-row ">
                <div className="w-[100%] h-[30vh]  lg:w-[45%] lg:h-[90%]">
                    <Lottie animationData={EmailAnimation} className='w-full h-full object-contain' />
                </div>
                <div className="w-[100%]  px-2 lg:w-[45%]">
                    <form className="flex flex-col justify-evenly gap-5 form-box  w-[100%] lg:w-[75%]" onSubmit={(e) => sendMessage(e)}>
                        <label htmlFor="name" className="text-cream flex flex-col  w-[100%] gap-2"
                        >
                            Name
                            <input className="text-gray-700 p-1 rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-400" type="text" required placeholder="your name" maxLength={35} id="name" name="name" value={formData.name} onChange={(e) => handleChange(e)} />
                        </label>
                        <label htmlFor="company" className="text-cream flex flex-col  w-[100%] gap-2"
                        >
                            company
                            <input className="text-gray-700 p-1 rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-400" type="text" required placeholder="your company" maxLength={35} id="company" name="company" value={formData.company} onChange={(e) => handleChange(e)} />
                        </label>
                        <label htmlFor="email" className="text-cream flex flex-col  w-[100%] gap-2">
                            E-mail
                            <input className="text-gray-700 p-1 rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-400" type="email" required placeholder="your email" id="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} />
                        </label>
                        <label htmlFor="message" className="text-cream flex flex-col w-[100%]  gap-2">
                            Message
                            <textarea className="h-[170px] text-gray-700 py-1 px-2 rounded-md focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-sky-400 " maxLength={250} placeholder="max 250 characters" required id="message" name="message" value={formData.message} onChange={(e) => handleChange(e)}></textarea>
                        </label>
                        <button className="bg-sky-500 w-[50%] py-2 rounded-md font-bold text-gray-100 uppercase text-base hover:bg-blue-600 md:w-[40%] lg:w-[100%]">submit</button>
                    </form>
                </div>

            </div>
            {loader &&
                <div className=" message-loader">
                    <div className="loading w-[90%] h-[40vh] lg:w-[40%] lg:h-[40%] ">
                        <Lottie animationData={pleasewait} className='w-full h-full object-contain' />
                    </div>
                    <p className="text-4xl font-semibold uppercase text-gray-200">please wait</p>
                </div>
            }
            {messageStatus &&
                <div className=" message-loader">
                    <div className="loading w-[90%] h-[40vh] lg:w-[50%] lg:h-[47%]">
                        <Lottie animationData={successAnimation} className='w-full h-full object-contain' />
                    </div>
                    <p className="text-3xl font-semibold uppercase text-gray-200">got your message</p>
                    <button className="w-[150px] py-2 font-semibold text-2xl rounded-xl" id="message-ok" onClick={()=>changeMessageStatus(false)}>OK</button>
                </div>
            }
            {messageError &&
                <div className=" message-loader">
                    <div className="loading w-[90%] h-[30vh] lg:w-[50%] lg:h-[30%] rounded-xl">
                        <img src={errorIcon} className='w-full h-full object-contain' />
                    </div>
                    <p className="text-2xl font-semibold uppercase text-gray-200 lg:text-3xl">something went wrong</p>
                    <button className="w-[150px] py-2 font-semibold text-2xl rounded-xl" id="message-error" onClick={()=>updateMessageError(false)}>OK</button>
                </div>
            }
        </section>
    )
}

export default MessageBox;



