import React, { useState } from 'react'
import "../Aboutus/Aboutus.css"
import HeaderHome from '../../Components/HeaderHome/HeaderHome'

function Aboutus() {
    const [tabswitch, setTabswitch] = useState(0);
    const tab0 = () => {
        setTabswitch(0)
    }
    const tab1 = () => {
        setTabswitch(1)
    }
    const tab2 = () => {
        setTabswitch(2)
    }
    const tab3 = () => {
        setTabswitch(3)
    }
    return (
        <div className='col-md-12 background_for_aboutme'>
            <HeaderHome />
            <div className='d-flex'>
                <div className='width_first_column text-center'>
                    <div className='col-md-12 pt-3 '>
                        <img className='img-fluid' src='/images/code-icon.svg' />
                    </div>
                    <div className='col-md-12 pt-2 '>
                        <img className='img-fluid' src='/images/game.svg' />
                    </div>
                </div>
                <div className='width_second_side'>
                    <div className='col-md-12 px-3 py-2 border_bottom_new'>
                        <span>
                            <img className='img-fluid' src='/images/down-icon.svg' />
                        </span> <span>personal-info</span>
                    </div>
                    <div className='col-md-12 px-3 pt-2 universal_cursor' onClick={tab0}>
                        <div className='d-flex'>
                            <img className='img-fluid' src='/images/folder-icon.svg' /><span className={`ps-2 ${tabswitch === 0 ? "" : "color_unactive"} `}>bio</span>
                        </div>
                    </div>
                    <div className='col-md-12 px-3 pt-2 universal_cursor' onClick={tab1}>
                        <div className='d-flex'>
                            <img className='img-fluid' src='/images/folder-g.svg' /><span className={`ps-2 ${tabswitch === 1 ? "" : "color_unactive"} `}>interests</span>
                        </div>
                    </div>
                    <div className='col-md-12 px-3 pt-2 universal_cursor' onClick={tab2}>
                        <div className='d-flex'>
                            <img className='img-fluid' src='/images/folder-p.svg' /><span className={`ps-2 ${tabswitch === 2 ? "" : "color_unactive"} `}>education</span>
                        </div>
                    </div>
                    <div className='col-md-12 px-3 pt-2 universal_cursor' onClick={tab3}>
                        <div className='d-flex'>
                            <img className='img-fluid' src='/images/folder-icon.svg' /><span className={`ps-2 ${tabswitch === 3 ? "" : "color_unactive"} `}>Certifications</span>
                        </div>
                    </div>
                </div>
                <div className='width_third_side'>
                    <div className='col-md-12 px-3  border_bottom_new'>
                        <div className='col-md-2 py-2 color_of_unactive border_right_pp'>
                            {tabswitch === 0 ?
                                <>
                                    <span className='ps-2'> 👉🏻 personal-info</span>
                                </>
                                : tabswitch === 1 ?
                                    <>
                                        <span className='ps-2'> 👉🏻 interests</span>
                                    </>
                                    : tabswitch === 2 ?
                                        <>
                                            <span className='ps-2'> 👉🏻 education</span>
                                        </>
                                        : tabswitch === 3 ?
                                            <>
                                                <span className='ps-2'> 👉🏻 Certifications</span>
                                            </>
                                            :
                                            null}
                        </div>
                    </div>
                    <div className='col-md-12'>
                        {tabswitch === 0 ?
                            <p className='m-0 p-0 px-4 pt-4 color_of_unactive'>
                            //** Welcome to my info! 🚀 <br />

                                As a dedicated <span className='green_color'>React.js</span> and <span className='purple_color'>Next.js</span> Developer with over 4 years of experience, I specialize in creating intuitive and engaging user interfaces and user experiences. My journey in front-end development has honed my skills in utilizing tools like Figma, Adobe XD, and Photoshop to design visually appealing and user-friendly applications.<br />

                                My expertise extends beyond just crafting stunning UIs. I am adept at API integration, leveraging Axios to seamlessly connect front-end applications with backend services. My deep understanding of JavaScript ensures that my code is not only functional but also efficient and maintainable.<br />

                                I have a strong command over state management libraries, including Redux Saga, Toolkit, and Thunk, which allows me to build robust and scalable applications. My experience spans across the entire development lifecycle, from initial concept to deployment, ensuring that every project I undertake is of the highest quality.<br />

                                In addition to my technical skills, I am passionate about staying up-to-date with the latest industry trends and continuously improving my skill set. I thrive in collaborative environments and enjoy working with cross-functional teams to deliver exceptional products.<br />

                                Whether it’s developing new features, optimizing performance, or troubleshooting complex issues, I bring a problem-solving mindset and a commitment to excellence to every project. I am eager to contribute to innovative projects and help drive the success of forward-thinking companies. Let's connect and explore how I can add value to your team!<br />
                                **//
                            </p> : tabswitch === 1 ?
                                <div className='col-md-12 px-3'>
                                    <ol className=' pt-4 color_of_unactive'>
                                        <li>
                                         //** My Interests! 🖥️
                                        </li>
                                        <li>
                                            I have a strong passion for developing new and innovative UI designs. I am always eager to learn
                                        </li>
                                        <li>
                                            about and implement the latest and most optimized coding techniques in frontend development.
                                        </li>
                                        <li> **//</li>
                                    </ol>
                                </div> : tabswitch === 3 ?
                                    <div className='col-md-12 px-3'>
                                        <ol className=' pt-4 color_of_unactive'>
                                            <li>
                                         //** Education! 🍁
                                            </li>
                                            <li>
                                                <span className='green_color'>  Front-end Development </span> Arfa Kareem Tower Lahore. 📝
                                            </li>
                                            <li>
                                                <span className='purple_color'>React-Js Development</span> Arfa Kareem Tower Lahore. ✒️
                                            </li>
                                            <li>
                                                <span className='green_color'> Laravel Development</span> Arfa Kareem Tower Lahore. ✍
                                            </li>
                                            <li> **//</li>
                                        </ol>
                                    </div>
                                    : tabswitch === 2 ?
                                        <div className='col-md-12 px-3'>
                                            <ol className=' pt-4 color_of_unactive'>
                                                <li>
                                         //** Certifications! 🍁
                                                </li>
                                                <li>
                                                    <span className='green_color'>  Bachelors </span> in Computer Science From Minhaj University Lahore.  <span className='green_color'>(CGPA: 3.45)</span> 📝
                                                </li>
                                                <li>
                                                    <span className='purple_color'>ICS</span> from GCT Lahore in Computer Science. ✒️
                                                </li>
                                                <li>
                                                    <span className='green_color'> Matric</span> from The Punjab School Lahore . ✍
                                                </li>
                                                <li> **//</li>
                                            </ol>
                                        </div>
                                        : null}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus
