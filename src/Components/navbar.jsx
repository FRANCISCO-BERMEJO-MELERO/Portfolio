import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "../Styles/global.css";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [language, setLanguage] = useState('ES');

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const toggleLanguage = () => setLanguage(language === 'ES' ? 'EN' : 'ES');

    return (
        <>
        <nav className="w-full z-50 fixed border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
            <div className="mx-auto max-w-4xl flex justify-between items-center py-2 ">
                <div className="flex justify-start gap-2">
                    <button onClick={toggleDarkMode} className={`px-3 py-2 rounded-full  transition-all duration-300 shadow-md border  ${isDarkMode ? 'bg-zinc-200 text-zinc-800 border-zinc-300 hover:bg-zinc-400' : 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700'}`}>
                        {isDarkMode ? <FaSun className="text-zinc-800 text-lg" /> : <FaMoon className="text-zinc-300 text-lg" />}
                    </button>
                    <button onClick={toggleLanguage} className="px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 transition-all duration-300 border border-zinc-700 hover:border-zinc-600">
                        <span className="text-white font-bold">{language === 'ES' ? 'EN' : 'ES'}</span>
                    </button>
                </div>
                <div className="flex gap-2 md:gap-6">
                    <a href="#sobre-mi" className="opacity-60 p-1 links relative cursor-pointer text-xs md:text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Sobre mí{'>'}
                    </a>
                    <a href="#proyectos" className="opacity-60 p-1 links relative cursor-pointer text-xs md:text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Proyectos{'>'}
                    </a>
                    <a href="#proyectos" className="opacity-60 p-1 links relative cursor-pointer text-xs md:text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Contacto{'>'}
                    </a>
                </div>
            </div>
        </nav>
        
        <div className="h-10 md:h-12"></div>
        </>
    );
}

export default Navbar;
