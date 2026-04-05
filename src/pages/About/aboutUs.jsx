export default function About() {
    return (
        <div className="w-full h-screen overflow-hidden bg-black justify-center px-10 py-6">

            {/* Header */}
            <div className="h-15 ">
                <button className="bg-orange-500 w-30 h-9 rounded-lg flex items-center justify-center hover:bg-orange-600 transition text-['Helvetica']">
                    <span className="text-white">
                        Home
                    </span>
                </button>
            </div>

            {/* content */}
            <div className="flex flex-col items-center justify-center text-white gap-6">
                <span className="text-white text-5xl">About Me</span>
                <div className="flex flex-col items-center justify-center gap-2 w-2xl">
                    <p className="text-xl">
                        Hi! I'm Sithija 👋
                    </p> 
                    <p className="text-xl">
                        I'm a FullStack Developer and a creative problem solver who loves to 
                        translate simple and complex problems
                        into eyecatching, user friendly but powerful solutions.
                    </p>

                    <p className="text-xl">
                        I'm Currently an undergraduate student at the University of Kelaniya, and I spend 
                        a lot of time of my day to learn new things and develop my skills.
                        
                    </p>
                    
                </div>
                
            </div>
            
        </div>
    )
}