import React from 'react';
import logoImg from '../../assets/images/more/logo1.png'
import bg from '../../assets/images/more/13.jpg'
import bgimg from '../../assets/images/more/15.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 pt-12"
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Section */}
                <div>
                    <img
                        src={logoImg}
                        alt="Espresso Emporium"
                        className="h-16 mb-4"
                    />
                    <h3 className="text-2xl font-semibold mb-2 text-[#331A15]">Espresso Emporium</h3>
                    <p className="mb-4">
                        Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.
                    </p>
                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
                            <FaFacebookF /> {/* Replace with icons */}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
                            <IoLogoTwitter />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl">
                            <FaLinkedin />
                        </a>
                    </div>
                    {/* Contact Information */}
                    <div className="mt-6">
                        <p className="mb-2 items-center flex gap-3 text-xl">
                            <MdOutlinePhone /> +88 01533 333 333
                        </p>
                        <p className="mb-2 items-center flex gap-3 text-xl">
                            <IoMailOpen /> info@gmail.com
                        </p>
                        <p className=' items-center flex gap-3 text-xl'>
                            <FaLocationDot /> 72 Wall Street,
                            King Road, Dhaka
                        </p>
                    </div>
                </div>

                {/* Right Section (Contact Form) */}
                <div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#331A15]">Connect with Us</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="border border-[#331A15] text-[#331A15] py-3 px-6 rounded-full text-lg shadow-md transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-12 text-sm text-white h-11 items-center"
                style={{
                    backgroundImage: `url(${bgimg})`,
                }}
            >
                Copyright © Espresso Emporium | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;