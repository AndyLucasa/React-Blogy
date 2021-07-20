import React from 'react'
import Me2 from '../assets/me2.jpg'

function ProfilCard() {
    return (
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="800" className="m-9 h-32 mt-14 rounded-xl bg-white shadow-md flex justify-center ">
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200" className="h-12 w-12 rounded-full bg-gray-900 shadow-sm mt-4 block absolute">
                <img src={Me2} alt="" className="cursor-pointer h-12 w-12 rounded-full object-cover"/>
            </div>
            <div  className="block mt-20" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500">
                <p className="text-base font-poppins tracking-tighter">Andy Lucas</p>
            </div>
        </div>
    )
}

export default ProfilCard
