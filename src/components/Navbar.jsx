import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { FaPhoneAlt, FaEdit } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        // TODO if window scrolled down more that 200 that set setScrolled(true)
        const handleScroll = () => {
            const scrollThreshold = 100
            const isScrolled = window.scrollY > scrollThreshold
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial scroll position

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <nav>
                <div className='w-full h-full bg-[#028102] py-2'>
                    <div className='lg:container flex flex-col sm:flex-row justify-between items-center mx-auto px-2 text-white'>
                        <div className='text-[13px] font-[400] flex gap-4 sm:gap-6 justify-center sm:justify-start mb-2 sm:mb-0'>
                            <Link to='/contact-us'>Contact Us</Link>
                            <Link to='/download'>Download</Link>
                        </div>
                        <div className='text-[13px] font-[400] flex flex-col sm:flex-row gap-2 sm:gap-6 items-center'>
                            <span className='flex gap-1 items-center'>
                                <IoIosHome />
                                <a href="https://maps.app.goo.gl/1Zq3ovBDhzkdwxZy5" target="_blank" rel="noopener noreferrer" className='text-center sm:text-left'>Kandaghari, Kageshwori Manohara 9, Kathmandu, Nepal</a>
                            </span>
                            <span className='flex gap-1 items-center'>
                                <FaPhoneAlt />
                                <Link to='callto:9877654585'>+977-01-4993031/32/33</Link>
                            </span>
                            <button className='px-1 rounded border border-white flex items-center gap-1 text-[12px]'><FaEdit />{" "}Enquiry Form</button>
                        </div>
                    </div>
                </div>
                <div>
                    {!scrolled ? (
                        <div className={`bg-white py-2 transition-all duration-900 ${scrolled ? 'opacity-0':'opacity-1'}`}>
                            <div className='lg:container flex  justify-between mx-auto px-2 '>
                                <div>logo</div>
                                <div>
                                    <ul className='flex gap-6 text-[14px] font-[600] '>
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
                        <div className={`bg-[#028102a2] fixed top-0 w-full backdrop-filter backdrop-blur-[20px] py-2 transition-all ease-in-out duration-300 z-40 ${scrolled ? 'translate-y-0 opacity-1' : 'translate-y-[-100%] opacity-0'}`}>
                            <div className='lg:container flex  justify-between mx-auto px-2 '>
                                <div>logo</div>
                                <div>
                                    <ul className='flex gap-6 text-[14px] font-[600] '>
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
            </nav>
        </>
    )
}

export default Navbar
