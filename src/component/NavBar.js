import React from 'react';
import MyMenu from './MyMenu';
import {BiAt, BiHomeCircle, BiMovie, BiNews} from "react-icons/bi"
import '../styles/App.css';


const NabBar = () => {
    return (
        <>
            <div className="Nav bg-white h-14 w-screen flex justify-center items-center text-base sticky top-0 z-10 md:transition duration-75 ease-linear">
                <div className="NavBarContainer flex justify-between h-12 z-0 w-full p-6 max-w-5xl">
                    <div className="NavLogo text-gray-900 justify-self-start cursor-pointer text-3xl flex items-center ml-2 font-bold no-underline font-righteous">Blog</div>
                    <MyMenu/>
                    <div className="NavMenu md:flex items-center list-none text-center -mr-6 hidden  ">
                        <div  className="NavItem h-14 pr-9">
                            <a href="#home" className="NavLink flex items-center p-4 h-full cursor-pointer border-b-2 border-red-400">
                                <BiHomeCircle
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Home</p>
                            </a>
                        </div>

                        <div  className="NavItem h-14 pr-9">
                            <a href="#video" className="NavLink flex items-center p-4 h-full cursor-pointer border-b-2 border-red-400">
                                <BiMovie
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Videos</p>
                            </a>
                        </div>

                        <div  className="NavItem h-14 pr-9">
                            <a href="#article" className="NavLink flex items-center p-4 h-full cursor-pointer border-b-2 border-red-400">
                                <BiNews
                                    className="w-5 h-5 mr-3"
                                    aria-hidden="true"
                                  />
                                <p className="text-gray-900 text-sm font-poppins">Articles</p>
                            </a>
                        </div>

                        <div  className="NavItem h-14 pr-9">
                            <a href="#contact" className="NavLink flex items-center p-4 h-full cursor-pointer border-b-2 border-red-400 ">
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
