import React from 'react'
import Me1 from '../assets/me1.jpg'

function LastPost (){
    return (
        <section id="home"className="LastPost pt-2 h-4/5">
            <p  data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200" className="text-gray-900 justify-self-start cursor-pointer text-2xl flex items-center ml-6 no-underline font-thin font-righteous">Recent Article</p>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1700" className="h-3/4 md:h-full rounded-lg m-6 mt-2 bg-white shadow-xl">
                <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="2600" className="PhotoL h-2/3 md:h-4/5 ">
                    <img src={Me1} alt="Me" className="PhotoL h-full w-full rounded-lg object-cover"/>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2900" className="h-6 w-32 rounded-full bg-red-100 m-4">
                    <p className=" text-xs font-poppins py-1 px-2 text-red-600">Branch - IGGLIA3</p>
                </div>
                <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2900" className=" text-base text-left font-poppins m-4 text-gray-900 ">AMBININTSOA Ny Aina Andy Lucas students in ISPM .</p>
                <div className="h-1"></div>
            </div>
        </section>
    )
}

export default LastPost
