import React from 'react'
import "../Homepage/Homepage.css"
import Typical from 'react-typical';
import HeaderHome from '../../Components/HeaderHome/HeaderHome';

function Homepage() {
    return (
        <div className='col-md-12 home_page_background'>
            <HeaderHome />
            <div className='col-md-12 py-4'>
                <div className='row'>
                    <div className='col-md-6 m-auto padding_left_homepgae padding_top_mobile'>
                        <p className='m-0 p-0 ps-1'>_Hi all. I am</p>
                        <p className='m-0 p-0 text_fontname'>Anas Waqar</p>
                        <p className='m-0 p-0 text_fontname_career display_pc'>
                            <Typical
                                steps={[
                                    '> Front-end developer', 2000,
                                    '', 500,
                                    '> React-js developer', 2000,
                                    '', 500,
                                    '> Next-js developer', 2000
                                ]}
                                loop={Infinity}
                                wrapper="p"
                                className="m-0 p-0 text_fontname_career"
                            />
                        </p>
                        <p className='m-0 p-0 text_fontname_career display_mobile'>
                            <Typical
                                steps={[
                                    '> Front-end developer', 2000,
                                    '', 500,
                                    '> React-js developer', 2000,
                                    '', 500,
                                    '> Next-js developer', 2000
                                ]}
                                loop={Infinity}
                                wrapper="p"
                                className="m-0 p-0 text_fontname_career"
                            />
                        </p>
                        {/* <p className='m-0 p-0 text_fontname_career'>> React-JS/Next-JS</p> */}
                        <p className='m-0 p-0 pt-5 mt-md-0 mt-5 text_fontname_career_github '>// to know more about me.. </p>
                        <p className='m-0 p-0  text_fontname_career_github'>// you can also see it on my LinkedIn page.. </p>
                        <p className='m-0 p-0  text_fontname_career_github'><span className='const_text'>const</span> <span className='link_text'>LinkedIn</span> = <span className='link_text_site'>“https://www.linkedin.com/in/anas-waqar-064baa204/”</span></p>
                    </div>
                    <div className='col-md-6 py-5 display_pc'>
                        <img className='img-fluid' src='/images/snakegame.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage