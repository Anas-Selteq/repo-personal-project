import React from 'react'
import "../HeaderHome/HeaderHome.css"

function HeaderHome() {
    return (
        <div className='col-md-12 border_bottom_tag_line'>
            <div className='row universal_cursor display_pc'>
                <div className='col-md-2 font_navigation_text1 border_tag_right px-5 py-3'>
                    Anas-waqar
                </div>
                <div className='col-md-1 font_navigation_text1 border_tag_right border_tag_left text-center text_color_white py-3 border_bottom_active '>
                    _hello
                </div>
                <div className='col-md-1 font_navigation_text1 border_tag_right border_tag_left text-center py-3'>
                    _about-me
                </div>
                <div className='col-md-1 font_navigation_text1 border_tag_right border_tag_left text-center py-3'>
                    _projects
                </div>
                <div className='col-md-5 font_navigation_text1 border_tag_right border_tag_left text-center py-3'>
                </div>
                <div className='col-md-2 font_navigation_text1 border_tag_right border_tag_left text-center py-3'>
                    _contact-me
                </div>
            </div>
            <div className='universal_cursor display_mobile px-3 py-3'>
                <div className='row'>
                    <div className='col-6 font_navigation_text1'>
                        Anas-waqar
                    </div>
                    <div className='col-6 font_navigation_text1 text-end'>
                        <img className='img-fluid' src='/images/burger.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderHome