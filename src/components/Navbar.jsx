import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { FaPhoneAlt, FaEdit, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100
            const isScrolled = window.scrollY > scrollThreshold
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <nav className="w-full ">
                <div className='lg:container w-full h-full bg-[#028102] py-2 px-4 sm:px-6 lg:px-8'>
                    <div className='container mx-auto flex justify-between items-center text-white'>
                        <div className='text-[13px] font-[400] flex gap-4 justify-center '>
                            <Link to='/contact-us'>Contact Us</Link>
                            <Link to='/download'>Download</Link>
                        </div>
                        <div className='text-[13px] font-[400] flex flex-wrap justify-center gap-2 items-center'>
                            <Link to='https://maps.app.goo.gl/1Zq3ovBDhzkdwxZy5' target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                                <IoIosHome />
                                <span className='hidden lg:block'>
                                    Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal
                                </span>
                            </Link>
                            <Link to='callto:9877654585' className='flex items-center gap-2'>
                                <FaPhoneAlt />
                                <span className='hidden lg:block'>
                                    +977-01-4993031/32/33
                                </span>
                            </Link>
                            <button className='px-2 py-1 sm:mt-0 rounded border border-white flex items-center gap-1 text-[12px]'><FaEdit />{" "}Enquiry Form</button>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    {!scrolled ? (
                        <div className={`bg-white py-4 px-4 sm:px-6 lg:px-8 transition-all duration-900 ${scrolled ? 'opacity-0' : 'opacity-1'}`}>
                            <div className='container mx-auto flex justify-between items-center'>
                                <div>logo</div>
                                <div>
                                    <ul className='flex flex-wrap gap-4 sm:gap-6 text-[14px] font-[600]'>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/about-us'>About Us</Link></li>
                                        <li><Link to='#'>Academics</Link></li>
                                        <li><Link to='#'>Admission</Link></li>
                                        <li><Link to='#'>News & Activities</Link></li>
                                        <li><Link to='/gallery'>Galleries</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`bg-[#028102a2] fixed top-0 w-full backdrop-filter backdrop-blur-[20px] py-4 px-4 sm:px-6 lg:px-8 transition-all ease-in-out duration-300 z-40 ${scrolled ? 'translate-y-0 opacity-1' : 'translate-y-[-100%] opacity-0'}`}>
                            <div className='container mx-auto flex justify-between items-center'>
                                <div>logo</div>
                                <div>
                                    <ul className='flex flex-wrap gap-4 sm:gap-6 text-[14px] font-[600]'>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/about-us'>About Us</Link></li>
                                        <li><Link to='#'>Academics</Link></li>
                                        <li><Link to='#'>Admission</Link></li>
                                        <li><Link to='#'>News & Activities</Link></li>
                                        <li><Link to='/gallery'>Galleries</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {!scrolled ? (
                    <div className='block sm:hidden'>
                        <div className={`flex justify-between items-center px-4 py-4 bg-white shadow-md ${scrolled ? 'opacity-0' : 'opacity-1'}`}>
                            <div className='w-24'>
                                <img src="/logo.png" alt="Logo" className="h-12" />
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='text-2xl text-[#1E8642] focus:outline-none'
                            >
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                        <div
                            className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                } z-50`}
                        >
                            <div className='flex justify-between items-center p-4 bg-[#1E8642] text-white'>
                                <div className='w-24'>
                                    <img src="/logo.png" alt="Logo" className="h-12" />
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className='text-2xl focus:outline-none'
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <ul className='flex flex-col items-start gap-4 text-lg font-semibold p-6'>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='/' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Home</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='/about-us' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>About Us</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='#' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Academics</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='#' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Admission</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='#' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>News & Activities</Link>
                                </li>
                                <li className='w-full'>
                                    <Link to='/gallery' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Galleries</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className='block sm:hidden'>
                        <div className={`flex justify-between items-center px-4 py-4 text-white bg-[#028102cc] fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-md transition-all ease-in-out duration-300 z-40 ${scrolled ? 'translate-y-0 opacity-100 shadow-md' : 'translate-y-[-100%] opacity-0'
                            }`}>
                            <div className='w-24'>
                                <img src="/logo.png" alt="Logo" className="h-12" />
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='text-2xl text-white focus:outline-none z-50'
                            >
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                        <div
                            className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                } z-50`}
                        >
                            <div className='flex justify-between items-center p-4 bg-[#1E8642] text-white'>
                                <div className='w-24'>
                                    <img src="/logo.png" alt="Logo" className="h-12" />
                                </div>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className='text-2xl focus:outline-none'
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <ul className='flex flex-col items-start gap-4 text-lg font-semibold p-6'>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='/' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Home</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='/about-us' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>About Us</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='#' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Academics</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='#' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Admission</Link>
                                </li>
                                <li className='w-full border-b border-gray-200 pb-2'>
                                    <Link to='#' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>News & Activities</Link>
                                </li>
                                <li className='w-full'>
                                    <Link to='/gallery' onClick={() => setIsMenuOpen(false)} className='block hover:text-[#1E8642] transition-colors'>Galleries</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
