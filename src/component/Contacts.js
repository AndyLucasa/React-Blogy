import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin,FaBlogger } from "react-icons/fa"

const Contacts = () => {
    return (
        <section id="contact" className="sticky bg-white">
            <footer class="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
                <div class="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                    <div class="grid grid-cols-12">
                        <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
                            <a href="#null" class="flex justify-center space-x-3 ">
                                <div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-indigo-400">
                                    <FaBlogger className="w-9 h-9 text-red-500"/>
                                </div>
                                <span class="self-center text-2xl font-thin font-righteous tracking-tighter">Blogy React</span>
                            </a>
                        </div>
                        
                        
                    </div>
                    <div class="grid justify-center pt-6 lg:justify-between">
                        <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                            <span className="font-rubik">©2021 All rights reserved</span>
                            <a href="#null">
                                <span className="font-rubik">Privacy policy</span>
                            </a>
                            <a href="#null">
                                <span className="font-rubik">Terms of service</span>
                            </a>
                        </div>
                        <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a href="https://github.com/AndyLucasa" >
                            <span className="sr-only">Github</span>
                            <FaGithub className="h-7 w-7 text-gray-900  "/>
                        </a>
                        <a href="https://www.facebook.com/andy.234564323456754323456786" >
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="h-7 w-7 text-gray-900 "/>
                        </a>
                        <a href="https://www.linkedin.com/in/ny-aina-andy-lucas-ambinintsoa-089283213/" >
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="h-7 w-7 text-gray-900 "/>
                        </a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Contacts
