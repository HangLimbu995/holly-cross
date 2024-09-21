import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { IoIosHome } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className="pt-4">
            <div className="container mx-auto px-4 py-8 flex justify-evenly">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-5">
                    <div>
                        <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
                        <p className="text-sm">Empowering minds, shaping futures. Your trusted partner in education excellence.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="no-underline hover:text-[#1E8642] transition-colors">Home</Link></li>
                            <li><Link to="/about-us" className="no-underline hover:text-[#1E8642] transition-colors">About Us</Link></li>
                            <li><Link to="/academics" className="no-underline hover:text-[#1E8642] transition-colors">Academics</Link></li>
                            <li><Link to="/admission" className="no-underline hover:text-[#1E8642] transition-colors">Admission</Link></li>
                            <li><Link to="/contact-us" className="no-underline hover:text-[#1E8642] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className='flex gap-2 items-center'>
                                <IoIosHome className="text-[#1E8642] text-lg" size={35} />
                                <a href="https://maps.app.goo.gl/1Zq3ovBDhzkdwxZy5" target="_blank" rel="noopener noreferrer" className='no-underline hover:text-[#1E8642] transition-colors'>Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal</a>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <FaPhoneAlt className="text-[#1E8642]" />
                                <a href='tel:+97714993031' className='no-underline hover:text-[#1E8642] transition-colors'>+977-01-4993031/32/33</a>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <FaEnvelope className="text-[#1E8642]" />
                                <a href="mailto:info@schoolname.edu.np" className='no-underline hover:text-[#1E8642] transition-colors'>info@schoolname.edu.np</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="no-underline hover:text-[#1E8642] transition-colors"><FaFacebookF /></a>
                            <a href="#" className="no-underline hover:text-[#1E8642] transition-colors"><FaTwitter /></a>
                            <a href="#" className="no-underline hover:text-[#1E8642] transition-colors"><FaInstagram /></a>
                            <a href="#" className="no-underline hover:text-[#1E8642] transition-colors"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1E8642] py-4 px-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
                    <p>&copy; 2023 School Name. All rights reserved.</p>
                    <p>Made with 💖 in Nepal by <a href="https://nepstark.com" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-blue-900 transition-colors text-blue-800 text-[18px] font-bold">NepStark</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
