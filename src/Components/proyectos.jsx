import React from 'react';
import CardModal from './card-modal';

const Proyectos = () => {
    return (
        <div className='mt-52 mb-20 mx-auto max-w-4xl'>
            <div className='justify-start grid gap-6 mb-10'>
                <h1 className='text-5xl'>{'<'} <span className='text-zinc-50'>Proyectos</span> {'/'}{'>'}</h1>
                <hr className='border-zinc-400'></hr>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                <CardModal titulo='App Luna' texto='' explicacion='' img='' iconos={["React", "Nodejs"]} />
                <CardModal titulo='App Luna' texto='' explicacion='' img='' iconos={["React", "Nodejs"]} />
                <CardModal titulo='App Luna' texto='' explicacion='' img='' iconos={["React", "Nodejs"]} />
                <CardModal titulo='App Luna' texto='' explicacion='' img='' iconos={["React", "Nodejs"]} />
                <CardModal titulo='App Luna' texto='' explicacion='' img='' iconos={["React", "Nodejs"]} />
                <CardModal titulo='App Luna' texto='' explicacion='' img='' iconos={["React", "Nodejs"]} />
            </div>
        </div>
    );
}

export default Proyectos;
