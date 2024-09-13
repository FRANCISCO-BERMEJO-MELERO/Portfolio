import React from 'react';
// import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaPython } from 'react-icons/fa';
import { IconCloudDemo } from './prueba.jsx';

const Tecnologias = () => {
    return (
        <div className='h-screen w-full  max-w-4xl mx-auto mt-40'>
        <div className='justify-center grid gap-6 md:mb-10 mb-6'>
            <h1 className='md:text-5xl text-3xl '>{'<'} <span className='text-zinc-50'>Tecnologías</span> {'/>'}</h1>
            <hr className='border-zinc-400'></hr>
            <p className='text-zinc-400'>Estas son las tecnologías que he utilizado en los proyectos personales y en mi aprendizaje.</p>
        </div>
            <IconCloudDemo></IconCloudDemo>
        </div>
    );
}

export default Tecnologias;

