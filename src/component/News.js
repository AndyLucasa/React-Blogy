import React from 'react'
import Monde from '../assets/monde.jpg'
import Mac from '../assets/mac.jpg'

function News() {
    return (
        <div  className="h-4/5 m-6 mt-1 space-y-2">
            <p data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1200" className="text-gray-900 justify-self-start cursor-pointer text-2xl flex items-center ml-6 no-underlinefont-thin font-righteous">News</p>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1600" className="bg-white h-64 rounded-xl shadow-md">
                <img src={Monde} alt="Monde" className="h-full w-full px-px rounded-xl object-cover" />
            </div>
            <div className="h-1"></div>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1900"className="bg-white h-64 rounded-xl shadow-md">
            <img src={Mac} alt="Mac" className="h-full w-full px-px rounded-xl object-cover " />
            </div>
        </div>
    )
}

export default News
