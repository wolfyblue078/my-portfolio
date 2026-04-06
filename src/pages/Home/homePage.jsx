import { Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";

export default function HomePage() {
    return (
        <div className="min-h-screen overflow-hidden bg-black flex flex-col">

        {/* Header */}
        <Header/>

        <Content/>


        </div>
    );
}





{/*<div className="flex ">





                    <a href="#about" className="p-4 text-white font-['Helvetica']">About</a>
                    <a href="#projects" className="p-4 text-white font-['Helvetica']">Projects</a>
                    <a href="#contact" className="p-4 text-white font-['Helvetica']">Contact</a>
                </div> */}