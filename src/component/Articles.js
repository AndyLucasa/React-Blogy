import React from 'react'
import Business from '../assets/business.jpg'
import Decoration from '../assets/decoration.jpg'
import Sport from '../assets/sport.jpg'
import Graphics from '../assets/graphics.jpg'

const Articles = () => {
    return (
        <section id="article" className="Article sm:-mt-14 lg:mr-6 ">
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700" className="text-gray-900 justify-self-start cursor-pointer text-2xl flex items-center ml-6 no-underline font-thin font-righteous">Articles</p>
            <div className="md:space-x-0">
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200" className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center  md:mr-10 ">
                    <div className="images h-24 w-24 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Decoration} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500" className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Deco & Design</p>
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1800" className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Tired of making holes in the walls to hang things? Discover 20 different ways to decorate them without drilling!.</p>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1400" className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center md:mr-10 ">
                    <div className="images h-24 w-24 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Business} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1700" className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Case Study</p>
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2000" className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:space-x-0">
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1400" className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center  md:mr-10 ">
                    <div className="images h-24 w-24 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Graphics} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1700" className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Creativity</p>
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2000" className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Creativity is at the origin of discoveries and inventions, of art and culture, but it is not reserved to geniuses or artists.</p>
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1600" className="Article1 md:inline-block h-32 m-6 rounded-xl shadow-md bg-white md:h-full md:w-72 flex items-center md:mr-10 ">
                    <div className="images h-24 w-24 mr-0 bg-gray-900 rounded-lg absolute md:w-72 md:h-72 md:relative md:m-0 ">
                        <img src={Sport} alt="Case Study" className="w-full h-full rounded-lg object-cover"/>
                    </div>
                    <div className="Text h-24 w-9/12 m-4 ml-28 pl-4 rounded-lg md:w-72 md:h-full md:ml-0 md:pr-2 md:pt-3">
                        <div className="Text flex flex-col justify-between">
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1900" className="uppercase tracking-tighter text-left font-poppins text-sm text-red-700 md:text-lg">Sport, Health & Wellness</p>
                            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2200" className="mb-0 font-rubik text-xs text-gray-900 text-left mt-2 md:text-sm ">Discover ten easily applicable tips that can dramatically improve the way you feel throughout the day.</p>
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
