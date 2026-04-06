import { FaCode, FaLaptopCode, FaPython, FaPaintBrush } from "react-icons/fa";

export default function Services() {
  return (
    
    <div className="min-h-screen px-6 md:px-20 py-16 text-white bg-black">




      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My Services
      </h1>

      <p className="text-center text-gray-400 mb-12">
        What I can do for you ❤️
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-center 
          hover:scale-105 hover:bg-orange-500/10 transition-all duration-300">

          <FaLaptopCode size={35} className="mx-auto mb-4 text-orange-400"/>
          <h2 className="text-xl font-semibold mb-2">Full Stack Development</h2>
          <p className="text-gray-400 text-sm">
            Build complete web applications using MERN stack with modern UI.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-center 
          hover:scale-105 hover:bg-orange-500/10 transition-all duration-300">

          <FaCode size={35} className="mx-auto mb-4 text-orange-400"/>
          <h2 className="text-xl font-semibold mb-2">Frontend Development</h2>
          <p className="text-gray-400 text-sm">
            Responsive and beautiful UI using React and Tailwind CSS.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-center 
          hover:scale-105 hover:bg-orange-500/10 transition-all duration-300">

          <FaPython size={35} className="mx-auto mb-4 text-orange-400"/>
          <h2 className="text-xl font-semibold mb-2">Python Automation</h2>
          <p className="text-gray-400 text-sm">
            Automate tasks, scripts, and backend logic using Python.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-center 
          hover:scale-105 hover:bg-orange-500/10 transition-all duration-300">

          <FaPaintBrush size={35} className="mx-auto mb-4 text-orange-400"/>
          <h2 className="text-xl font-semibold mb-2">UI Design</h2>
          <p className="text-gray-400 text-sm">
            Clean, modern and user-friendly interface designs.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-zinc-900 p-6 rounded-2xl text-center 
          hover:scale-105 hover:bg-orange-500/10 transition-all duration-300">

          <FaPaintBrush size={35} className="mx-auto mb-4 text-orange-400"/>
          <h2 className="text-xl font-semibold mb-2">BackEnd Development</h2>
          <p className="text-gray-400 text-sm">
            Efficient and secure backend logic using Express and Node.js.
          </p>
        </div>


      </div>
    </div>
  );
}