import React from 'react'
import Me1 from '../assets/me1.jpg'

const LastPost = () => {
    return (
        <section id="home"className="LastPost pt-7 h-4/5">
            <p className="text-gray-900 justify-self-start cursor-pointer text-xl flex items-center ml-6 font-extrabold  no-underline font-rubik">Recent Article</p>
            <div className="h-3/4 md:h-full rounded-lg m-6 bg-white shadow-xl">
                <div className="PhotoL h-2/3 md:h-4/5 ">
                    <img src={Me1} alt="Me" className="PhotoL h-full w-full rounded-lg object-cover"/>
                </div>
                <div className="h-6 w-32 rounded-full bg-red-100 m-4">
                    <p className=" text-xs font-poppins py-1 px-2 text-red-600">Branch - IGGLIA3</p>
                </div>
                <p className=" text-base text-left font-poppins m-4 text-gray-900 ">AMBININTSOA Ny Aina Andy Lucas students in ISPM .</p>
            </div>
        </section>
    )
}

export default LastPost
