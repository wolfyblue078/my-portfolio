import { Link, Routes } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>

        <div className="w-full bg-transparent">
            <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-7 py-4">
                
                {/* Logo */}
                <span className="text-2xl md:text-3xl font-bold text-white font-['Helvetica']">
                    Portfolio
                </span>

                {/* Large screen Navigations */}
                <nav className="hidden md:flex items-center gap-5 text-white font-['Helvetica'] text-lg">

                    <Link to="home" 
                          className="text-[1.2rem] text-white mx-[20px] transition-all duration-200 linear inline-block hover:text-[#ff521b] hover:[text-shadow:1px_1px_#ff521b] hover:-translate-y-1">
                          Home
                    </Link>

                    <Link to="/about" 
                          className="text-[1.2rem] text-white mx-[20px] transition-all duration-200 linear inline-block hover:text-[#ff521b] hover:[text-shadow:1px_1px_#ff521b] hover:-translate-y-1 backdrop-blur-md bg-white/5">
                          About us
                    </Link>

                    <Link to="services" 
                          className="text-[1.2rem] text-white mx-[20px] transition-all duration-200 linear inline-block hover:text-[#ff521b] hover:[text-shadow:1px_1px_#ff521b] hover:-translate-y-1">
                          Services
                    </Link>

                    <Link to="Programming Languages"
                          className="text-[1.2rem] text-white mx-[20px] transition-all duration-200 linear inline-block hover:text-[#ff521b] hover:[text-shadow:1px_1px_#ff521b] hover:-translate-y-1">
                          Contact
                    </Link>
                    
                </nav>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-white text-2xl z-[200]"
                    onClick={() => setIsOpen(true)}
                    >
                    <FaBars />
                </button>
            </header>
            
        </div>

        {/* Overlay (dark background) */}
        <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onClick={() => setIsOpen(false)}
        />


        {/* Mobile Menu */}
        {isOpen && (
            <div className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[320px] 
                bg-zinc-900/95 backdrop-blur-xl shadow-2xl
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
            <div className="flex flex-col h-full">
            {/* Close Button */}
            
                <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
                    <FaTimes />
                </button>
                </div>

                {/* Links */}
            <nav className="flex flex-col items-start gap-6 px-8 mt-6 text-white text-xl">

            <Link to="/home" onClick={() => setIsOpen(false)} className="hover:text-orange-500">
                Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-orange-500">
                About
            </Link>

            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-orange-500">
                Services
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-orange-500">
                Contact
            </Link>

            </nav>


            </div>

           


            </div>
        )}

        </>
    )
}