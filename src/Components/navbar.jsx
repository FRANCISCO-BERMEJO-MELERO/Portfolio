import React from 'react';
import "./global.css";

const Navbar = () => {
    return (
        <div className=' w-full z-50 mb-20' >
            <div className=' mx-auto w-4/12 justify-center my-5 flex gap-8 p-2 rounded-full  text-xs'>
                <button> <p className=' opacity-60 p-2 links relative cursor-pointer'> {'<'} Inicio{'/'}{'>'} </p></button>
                <button><p className=' opacity-60 p-2 links relative '> {'<'} Sobre mi{'/'}{'>'} </p></button>
                <button><p className=' opacity-60 p-2 links relative'> {'<'} Sobre mi{'/'}{'>'} </p></button>
            </div>
        </div>
    );
}

export default Navbar;
