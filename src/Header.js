import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaBars } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <div className="bg-gray-100">
                <nav className="bg-green-100">
                    <div className="hidden md:block">
                        <div className="flex items-center justify-between">
                            <div className="grid grid-cols-3 lg:gap-x-4 md:gap-x-3 ml-4">
                                <a href='#'>Home</a>
                                <a href='#'>Blog</a>
                                <a href='#'>Contact</a>
                            </div>
                            <div>
                                <img src='https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315' className="h-20 w-20" />
                            </div>
                            <div className="flex gap-x-5 mr-4">
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"> <FaInstagram /></a>
                                <a href="#"><FaLinkedin /></a>


                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <div className="flex items-center justify-between h-24">
                            <div className="ml-4">
                                <img src='https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315' className="h-20 w-20" />
                            </div>
                            <div className="mr-4">
                                <button><FaBars /></button>
                            </div>
                        </div>
                        <div className="hidden">
                            <div className="flex flex-col text-xl ml-4">
                                <a href="#" className="p-3">Home</a>
                                <a href="#" className="p-3">Blog</a>
                                <a href="#" className="p-3">Contact</a>
                            </div>
                            <div className="flex ml-4 gap-x-4">
                                <a href="#" className="p-3"><FaFacebook /></a>
                                <a href="#" className="p-3"><FaTwitter /></a>
                                <a href="#" className="p-3"> <FaInstagram /></a>
                                <a href="#" className="p-3"><FaLinkedin /></a>

                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
