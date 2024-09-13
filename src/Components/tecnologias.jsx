import React from 'react';
// import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaPython } from 'react-icons/fa';
import { IconCloudDemo } from './prueba.jsx';

const Tecnologias = () => {
    return (
        <div className='h-screen w-full  max-w-4xl mx-auto mt-40'>
        <div className='justify-center grid gap-6'>
            <h1 className='text-5xl'>{'<'} <span className='text-zinc-50'>Tecnologías</span> {'/>'}</h1>
            <hr className='border-zinc-400'></hr>
        </div>
            

            <IconCloudDemo></IconCloudDemo>
        </div>
    );
}

export default Tecnologias;

