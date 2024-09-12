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
            <div className="mx-auto max-w-4xl flex justify-between items-center py-4 ">
                <div className="flex justify-start gap-4">
                    <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 border border-zinc-700">
                        {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-300" />}
                    </button>
                    <button onClick={toggleLanguage} className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 border border-zinc-700">
                        <span className="text-zinc-300 text-sm">{language === 'ES' ? 'EN' : 'ES'}</span>
                    </button>
                </div>
                <div className="flex gap-6">
                    <a href="#inicio" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'} Inicio {'/'}{'>'}
                    </a>
                    <a href="#sobre-mi" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'} Sobre mí {'/'}{'>'}
                    </a>
                    <a href="#proyectos" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'} Proyectos {'/'}{'>'}
                    </a>
                </div>
            </div>
        </nav>
        <div className="h-16"></div>
        </>
    );
}

export default Navbar;
