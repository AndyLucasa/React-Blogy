import React from 'react';
import MyMenu from './MyMenu';
import {BiAt, BiHomeCircle, BiMovie, BiNews} from "react-icons/bi"
import '../styles/App.css';


const NabBar = () => {
    return (
        <>
            <div className="Nav bg-white h-12 w-screen flex justify-center items-center text-base sticky top-0 z-10 md:transition duration-75 ease-linear shadow-md ">
                <div className="NavBarContainer flex justify-between h-10 z-0 w-full p-6 max-w-5xl">
                    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" className="NavLogo text-gray-900 justify-self-start cursor-pointer text-3xl flex items-center ml-2 font-bold no-underline font-righteous">Blog</div>
                    <MyMenu/>
                    <div className="NavMenu md:flex items-center list-none text-center -mr-6 hidden  ">
                        <div  className="NavItem h-12 pr-9 " data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                            <a href="#home" className="NavLink flex items-center p-4 h-full cursor-pointer ">
                                <BiHomeCircle
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Home</p>
                            </a>
                        </div>

                        <div  className="NavItem h-12 pr-9" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
                            <a href="#video" className="NavLink flex items-center p-4 h-full cursor-pointer ">
                                <BiMovie
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Videos</p>
                            </a>
                        </div>

                        <div  className="NavItem h-12 pr-9" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1100">
                            <a href="#article" className="NavLink flex items-center p-4 h-full cursor-pointer ">
                                <BiNews
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Articles</p>
                            </a>
                        </div>

                        <div  className="NavItem h-12 pr-9" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1300">
                            <a href="#contact" className="NavLink flex items-center p-4 h-full cursor-pointer">
                                <BiAt
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Contacts</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NabBar
