import { Link, Routes } from "react-router-dom";


export default function Header(){
    return(
        <>

        <div className="w-full bg-transparent">
            <header className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-7 py-4">
                <span className="text-4xl font-bold text-white font-['Helvetica']">Portfolio</span>
                <nav className="hidden md:flex space-x-4 text-white font-['Helvetica'] text-xl flex gap-2">

                    <Link to="home" 
                          className="text-[1.2rem] text-white mx-[20px] transition-all duration-200 linear inline-block hover:text-[#ff521b] hover:[text-shadow:1px_1px_#ff521b] hover:-translate-y-1">
                          Home
                    </Link>

                    <Link to="/about" 
                          className="text-[1.2rem] text-white mx-[20px] transition-all duration-200 linear inline-block hover:text-[#ff521b] hover:[text-shadow:1px_1px_#ff521b] hover:-translate-y-1">
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
            </header>
            
        </div>

        </>
    )
}