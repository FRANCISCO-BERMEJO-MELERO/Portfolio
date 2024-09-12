import React from 'react';
import "../Styles/global.css";

const Navbar = () => {
    return (
        <>
        <nav className="w-full z-50 fixed border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
            <div className="mx-auto max-w-4xl flex justify-end gap-6 py-4 px-6">
                <a href="#inicio" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300">
                    {'<'} Inicio {'/'}{'>'}
                </a>
                <a href="#sobre-mi" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300">
                    {'<'} Sobre mí {'/'}{'>'}
                </a>
                <a href="#proyectos" className="opacity-60 p-2 links relative cursor-pointer text-sm hover:opacity-100 transition-opacity duration-300">
                    {'<'} Proyectos {'/'}{'>'}
                </a>
            </div>
        </nav>
        <div className="h-16"></div>
        </>
        

    );
}

export default Navbar;
