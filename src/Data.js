import html from "./assets/html5-svgrepo-com.svg"
import css from "./assets/css3-svgrepo-com.svg"
import js from "./assets/js-svgrepo-com.svg"
import reactIcon from "./assets/react-svgrepo-com.svg"
import routerIcon from "./assets/react-router-svgrepo-com.svg"
import tailwindIcon from "./assets/tailwind-svgrepo-com.svg"
import framer from "./assets/framer-logo-fill-svgrepo-com.svg"
import reduxIcon from "./assets/redux-svgrepo-com.svg"
import sassLogo from "./assets/sass-svgrepo-com.svg"
import framer2 from "./assets/framer-svgrepo2-com.svg"
import js2 from "./assets/js2.svg"
import githubLogo from "./assets/githublogo.svg"
import gitLogo from "./assets/gitlogo.svg"



import bike from "./assets/work/Triumph-Speed-400.png"
import mobile from "./assets/work/phone-screen-with-abstract-marble-aesthetic.png"
import sofa from "./assets/work/sofa.png"
import girl from "./assets/work/data-analysis-girl.png"
import boy from "./assets/work/data-science-profie.png"
import profile from "./assets/work/portfolio.png"
const cardData = [
    {
        id: 0,
        url: reactIcon,

    },
    {
        id: 1,
        url: reduxIcon,

    },
    {
        id: 2,
        url: routerIcon,

    },
    {
        id: 3,
        url: js,

    },
    {
        id: 4,
        url: css,

    },
    {
        id: 7,
        url: tailwindIcon,

    },
    {
        id: 5,
        url: framer,

    },
    {
        id: 6,
        url: sassLogo
    },
    {
        id: 7,
        url: html,

    },
    {
        id:8,
        url:githubLogo
    },
    {
        id:9,
        url:gitLogo
    }
];

const skillCard = [
    {
        id: 0,

        title: "hmtl/css",
        stroke: "#B80000",
        percent: 5,
        icon: css,
        delay: 0.1
    },
    {
        id: 1,
        title: "javascript",
        stroke: "#B80000",
        percent: 3,
        icon: js2,
        delay: 0.3
    },
    {
        id: 2,
        title: "react / redux",
        stroke: "#B80000",
        percent: 3,
        icon: reactIcon,
        delay: 0.5
    },

    {
        id: 3,
        title: "framer motion",
        stroke: "#B80000",
        percent: -5,
        icon: framer2,
        delay: 0.7
    },
    {
        id: 4,
        title: "sass",
        stroke: "#B80000",
        percent: -1,
        icon: sassLogo,
        delay: 0.8
    },
    {
        id: 5,
        title: "tailwind",
        stroke: "#B80000",
        percent: 0,
        icon: tailwindIcon,
        delay: 1
    }
]



const workData = [
    {
        id: 0,
        url: bike,
        title:"Triumph Motorcycles Clone",
        p:"showcasing custom builds, detailed guides, and a vibrant community for motorcycle enthusiasts.",
        github:"https://github.com/go-rahul-go/triumph-motorcycles-clone",
        website:"https://triumph-motorcycles-clone.vercel.app/",
       
    },
    {
        id:1,
        url:profile,
        title:"My Portfolio",
        p:" Showcasing diverse projects, creative solutions, and detailed insights into my professional work.",
        github:"https://github.com/go-rahul-go",
        website:"/",
      
    },
    {
        id:2,
        url:mobile,
        title:"iQOO Mobile Clone",
        p:"Optimized design, seamless navigation, and engaging content for the best user experience on-the-go.",
        github:"https://github.com/go-rahul-go/iqoo-india-clone",
        website:"https://iqoo-india-clone.vercel.app/",
    
    },
    
    {
        id:3,
        url:sofa,
        title:"Furniture Store",
        p:"Discover stylish, high-quality furniture with easy browsing, detailed descriptions, and effortless online shopping.",
        github:"https://github.com/go-rahul-go/bansal-furnitures",
        website:"https://bansal-furnitures.vercel.app/",
        delay:0.6
    },
    {
        id:4,
        url:girl,
        title:"Data Analyst Portfolio",
        p:"showcasing analytical skills, insightful reports, and impactful data-driven projects.",
        github:"https://github.com/go-rahul-go/khubu-portfolio",
        website:"https://khusbu-portfolio.vercel.app/"
        ,
        
    },
    {
        id:5,
        url:boy,
        title:"Data Science Portfolio",
        p:"featuring innovative models, analytics solutions, and impactful data-driven insights.",
        github:"https://github.com/go-rahul-go/roshan-s-portfolio",
        website:"https://roshan-s-portfolio.vercel.app/",
       
    }
]
export { cardData, skillCard,workData }