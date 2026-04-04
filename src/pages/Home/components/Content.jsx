export default function Content(){
    return(
        <div className="h-[calc(100vh-200px)] flex items-center justify-center px-6 md:px-16">
        
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

            {/*left content */}
            <div className="order-2 text-center md:text-left px-24 md:order-1">
                <h1 className="text-white text-[clamp(3.4rem,2vw,_1.5rem)] mb-2">Hi! I am </h1>

                <h1 className="text-orange-500 font-bold leading-tight 
                                text-[clamp(2rem,_5vw,_3rem)]">
                    Sithija Himantha
                </h1>            
                <p>Fullstack Application Development</p>

                
            
            </div>





        {/* Right content */}
        <div className="order-1 flex justify-center items-center md:justify-center m-5">
        <div className="relative">



            {/* My Photo */}
            <img
                src="/src/assets/image_black.png"
                alt="profile"
                className="relative z-10 w-[250px] sm:w-[320px] md:w-[500px]"
            />

        </div>
        </div>

        </div>
          
        
        
        </div>
    )
}
