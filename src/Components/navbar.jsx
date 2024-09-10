import React from 'react';
import "../Styles/global.css";

const Navbar = () => {
    return (
        <>
        <div className=' w-full z-50 fixed border-b bg-slate-900' >
            <div className=' mx-auto w-4/12 justify-center my-5 flex gap-8 rounded-full  text-xs '>
                <button> <p className=' opacity-60 p-2 links relative cursor-pointer'> {'<'} Inicio{'/'}{'>'} </p></button>
                <button><p className=' opacity-60 p-2 links relative '> {'<'} Sobre mi{'/'}{'>'} </p></button>
                <button><p className=' opacity-60 p-2 links relative'> {'<'} Sobre mi{'/'}{'>'} </p></button>
            </div>
        </div>
        <div className='  mb-20 ' >
            <div className=' p-8 '>
            </div>
        </div>
        </>
        

    );
}

export default Navbar;
