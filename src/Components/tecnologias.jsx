import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaPython } from 'react-icons/fa';

const Tecnologias = () => {
    return (
        <div className='h-screen w-full max-w-4xl mx-auto mt-40'>
            <h1 className='text-4xl'>{'<'}<span className='text-blue-500'>Tecnologías</span> {'/>'}</h1>
            <hr className='w-full h-1 bg-blue-500 my-4'></hr>
            
            <div className='flex justify-center items-center gap-8 mt-10'>
                <FaReact className='text-6xl text-blue-400 hover:text-blue-600 transition-colors' />
                <FaHtml5 className='text-6xl text-orange-500 hover:text-orange-700 transition-colors' />
                <FaCss3Alt className='text-6xl text-blue-500 hover:text-blue-700 transition-colors' />
                <FaJs className='text-6xl text-yellow-400 hover:text-yellow-600 transition-colors' />
                <FaNode className='text-6xl text-green-500 hover:text-green-700 transition-colors' />
                <FaPython className='text-6xl text-green-500 hover:text-green-700 transition-colors' />
            </div>
        </div>
    );
}

export default Tecnologias;

