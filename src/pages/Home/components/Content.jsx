import { useState, useEffect } from "react";

export default function Content(){

        const words = [
        "FrontEnd Developer",
        "BackEnd Developer",
        "Rock Singer",
        "Guitarist",
        "Script Writer",
    ];

    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
        i = (i + 1) % words.length;
        setCurrentWord(words[i]);
        }, 2000); // change word every 2 seconds

        return () => clearInterval(interval); // cleanup
    }, []);


    return(
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-16">
        
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

            {/*left content */}
            <div className="order-2 text-center md:text-left px-24 md:order-1">
                <h1 className="text-white text-[clamp(3.4rem,2vw,_2rem)] mb-2">Hi! I am </h1>

                <h1 className="text-orange-500 font-bold leading-tight 
                                text-[clamp(2rem,_5vw,_2rem)]">
                    Sithija Himantha
                </h1>            
                <div className="flex justify-center md:justify-start md:flex-row items-center space-x-2 text-xl font-semibold mt-4">
                    <span className="text-white">{currentWord}</span>
                    <span className="border-l-2 border-red-600 animate-[blink_1s_steps(3)_infinite] h-6"></span>
                
                </div>


                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
                        Hire me
                    </button>

                    <button className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition">
                        Download CV
                    </button>
                </div>
                
                
                

                

                
            
            </div>





        {/* Right content */}
        <div className="order-1 flex justify-center items-center md:justify-center m-5">
        <div className="relative">



            {/* My Photo */}
            <img
                src="./images/image_black.png"
                alt="profile"
                className="relative md:-mt-15 z-10 w-[250px] sm:w-[300px] md:w-[550px]"
            />


        </div>
        </div>

        

        </div>
          
        
        
        </div>
    )
}
