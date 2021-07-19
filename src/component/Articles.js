import React from 'react'
import Business from '../assets/business.jpg'

const Articles = () => {
    return (
        <section id="article" className="Article sm:-mt-14 lg:mr-6 ">
            <p className="text-gray-900 justify-self-start cursor-pointer text-xl flex items-center ml-6 font-extrabold  no-underline font-rubik">Articles</p>
            <div className="md:space-x-0">
                <div className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center  md:mr-10 ">
                    <div className="images h-24 w-24 m-4 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Business} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Case Study</p>
                            <p className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>

                <div className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center md:mr-10 ">
                    <div className="images h-24 w-24 m-4 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Business} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Case Study</p>
                            <p className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:space-x-0">
                <div className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center  md:mr-10 ">
                    <div className="images h-24 w-24 m-4 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Business} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Case Study</p>
                            <p className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>

                <div className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center md:mr-10 ">
                    <div className="images h-24 w-24 m-4 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Business} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Case Study</p>
                            <p className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-5">

            </div>
        </section>
    )
}

export default Articles