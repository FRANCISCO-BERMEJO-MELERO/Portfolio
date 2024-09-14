import React, { useEffect, useState } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import "../Styles/global.css";

const Navbar = () => {
    // const [isDarkMode, setIsDarkMode] = useState(true);
    // const [language, setLanguage] = useState('ES');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    // const toggleLanguage = () => setLanguage(language === 'ES' ? 'EN' : 'ES');
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
            setIsMenuOpen(false);
        };

        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <>
        <nav className="w-full z-50 fixed border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
            <div className="mx-auto max-w-4xl flex justify-end items-center py-2 px-4">
                {/* <div className="flex justify-start gap-2">
                    <button onClick={toggleDarkMode} className={`px-3 py-2 rounded-full  transition-all duration-300 shadow-md border  ${isDarkMode ? 'bg-zinc-200 text-zinc-800 border-zinc-300 hover:bg-zinc-400' : 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700'}`}>
                        {isDarkMode ? <FaSun className="text-zinc-800 text-lg" /> : <FaMoon className="text-zinc-300 text-lg" />}
                    </button>
                    <button onClick={toggleLanguage} className="px-3 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 transition-all duration-300 border border-zinc-700 hover:border-zinc-600">
                        <span className="text-white font-bold">{language === 'ES' ? 'EN' : 'ES'}</span>
                    </button>
                </div> */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="p-2 rounded-md bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-all duration-300">
                        <FaBars />
                    </button>
                </div>
                <div className="hidden md:flex gap-6">
                    <a href="#sobremi" className="opacity-60 p-1 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Sobre mí{'>'}
                    </a>
                    <a href="#proyectos" className="opacity-60 p-1 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Proyectos{'>'}
                    </a>
                    <a href="#tecnologias" className="opacity-60 p-1 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Tecnologías{'>'}
                    </a>
                    <a href="#contacto" className="opacity-60 p-1 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                        {'<'}Contacto{'>'}
                    </a>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 border-b border-zinc-800">
                    <div className="flex flex-col items-center py-4">
                        <a href="#sobremi" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                            {'<'}Sobre mí{'>'}
                        </a>
                        <a href="#proyectos" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                            {'<'}Proyectos{'>'}
                        </a>
                        <a href="#tecnologias" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                            {'<'}Tecnologías{'>'}
                        </a>
                        <a href="#contacto" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300 hover:text-zinc-300">
                            {'<'}Contacto{'>'}
                        </a>
                    </div>
                </div>
            )}
        </nav>
        
        <div className="h-10 md:h-12"></div>
        </>
    );
}

export default Navbar;
