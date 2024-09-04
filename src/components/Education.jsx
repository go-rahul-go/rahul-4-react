

const edu = [
    {
        id: 0,
        title: "secondary education",
        ins: "st.thomas Sr. sec school",
        location: "faridabad, haryana, india",
        board:"cbse"
    },
    {
        id: 1,
        title: "higher secondary education",
        ins: "pratracharya vidyalaya",
        location: "new delhi, india",
        board:"cbse"
    },
    {
        id: 2,
        title: "graduation",
        ins: "maharishi dayanand university",
        course: "bachlore of technology (computer science)",
        location: "rohtak, haryana, india",
        year: "2019 - 2023"
    }
]


const Education = () => {
    return (
        <section className=' w-full  py-[60px] education overflow-hidden' id="education">


            <h2 className='text-5xl text-gray-200 px-5 font-bold uppercase'>education<span className='text-6xl text-red-500'> & </span>experience</h2>


            <div className='timeline flex flex-col justify-center items-center lg:flex-row lg:items-start'>
                <div className='school w-[95%] lg:w-[47%]'>
                    <h3 className='text-gray-200 py-4 text-3xl font-semibold'>Education</h3>
                    <div className="inner-school">
                        {
                            edu.map((item, index) => {
                                return (
                                    <div className='edu-card ' key={index}>
                                        <div className='e-card text-cream capitalize'>
                                            <h4 className='text-sky-400 text-xl font-semibold'>{item.title} </h4>
                                            <p className='e-card-p font-semibold'>
                                                <span className='text-sky-400'>institute:</span>
                                                {item.ins}
                                            </p>
                                            {
                                                item.board === "cbse" ? <p className='e-card-p'>
                                                    <span className='text-sky-400'>board:</span>
                                                    {item.board.toUpperCase()}
                                                </p> : ""
                                            }
                                            {
                                                item.title === "graduation" ? <p className='e-card-p'>
                                                    <span className='text-sky-400'>course:</span>
                                                    {item.course}
                                                </p> : ""
                                            }
                                            {
                                                item.title === "graduation" ? <p className='e-card-p'>
                                                    <span className='text-sky-400'>duration:</span>
                                                    {item.year}
                                                </p> : ""
                                            }
                                            <p className='e-card-p'>
                                                <span className='text-sky-400'>location:</span>
                                                {item.location}
                                            </p>
                                            
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
                <div className='job w-[95%] lg:w-[40%]'>
                    <h3 className='text-gray-200 py-4 text-3xl font-semibold'>Expericences</h3>
                    <div className='inner-job'>
                        <div className='edu-card'>
                            <div className='e-card text-cream capitalize' id="intern-card">
                                <h4 className='text-sky-400 text-xl font-semibold'>front end developement instructor</h4>
                                <p>codingtribes.org</p>

                                <p>Dec,2022 - May,2023</p>
                                <p>New Delhi, india</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Education;