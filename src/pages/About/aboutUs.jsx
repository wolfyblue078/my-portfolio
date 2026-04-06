import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { Link } from 'react-router-dom';




export default function About() {
    
    return (
        <div className="min-h-screen overflow-hidden bg-black  px-6 md:px-20 py-10">

            {/* Header */}
            <div className="h-15 ">

                <Link to="/my-portfolio/">
                    <button className="border border-white text-white px-5 py-2 rounded-lg hover:bg-orange-600  transition-all text-['Helvetica']">
                        <span className="text-white">
                            Home
                        </span>
                    </button>
                </Link>
                
            </div>

            {/* content */}
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white   ">
                    About 
                <span className="text-orange-500">Me</span> </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-4">
                    Hi, I’m <span className="text-orange-500 font-semibold">Sithija</span> 👋
                </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        I'm a FullStack Developer and a creative problem solver who loves to 
                        translate simple and complex problems
                        into eyecatching, user friendly but powerful solutions.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        Currently an undergraduate student at the University of Kelaniya, and I spend 
                        a lot of time of my day to learn new things and develop my skills.
                        
                    </p>

                     <h2 className="text-2xl font-semibold mb-6 text-blue-200">
                        Technologies I Work With ❤️
                     </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <FaPython size={30} className="text-orange-400"/>
                        <span className="text-white font-semibold">Python</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <IoLogoJavascript size={30} className="text-yellow-400"/>
                        <span className="text-white font-semibold">JavaScript</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <FaJava size={30} className="text-red-500"/>
                        <span className="text-white font-semibold">Java</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <FaHtml5 size={30} className="text-orange-600"/>
                        <span className="text-white font-semibold">HTML</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <SiReact size={30} className="text-cyan-400"/>
                        <span className="text-white font-semibold">React</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <SiTailwindcss size={30} className="text-sky-400"/>
                        <span className="text-white font-semibold">Tailwind</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <SiNodedotjs size={30} className="text-green-400"/>
                        <span className="text-white font-semibold">Node.js</span>
                    </div>

                    <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700 p-5 rounded-2xl flex flex-col items-center gap-2 hover:scale-110 hover:-translate-y-2 hover:bg-orange-500/20 transition-all duration-300">
                        <SiMongodb size={30} className="text-green-600"/>
                        <span className="text-white font-semibold">MongoDB</span>
                    </div>
                    </div>

                     <p className="text-gray-500 mt-10">
                        When I’m not coding, I enjoy music and creative thinking 🎤
                    </p>
                                    
                    
                
                
            </div>
            
        </div>
    )
}