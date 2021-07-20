import React from 'react'
import Me2 from '../assets/me2.jpg'

function ProfilCard() {
    return (
        <div className="m-9 h-32 mt-14 rounded-xl bg-white shadow-md flex justify-center ">
            <div className="h-12 w-12 rounded-full bg-gray-900 shadow-sm mt-4 block absolute">
                <img src={Me2} alt="" className="h-12 w-12 rounded-full object-cover"/>
            </div>
            <div  className="block mt-20">
                <p className="text-base font-poppins tracking-tighter">Andy Lucas</p>
            </div>
        </div>
    )
}

export default ProfilCard
