import React from 'react';
import CardModal from './card-modal';




const Proyectos = () => {
    return (
        <div className='mt-52 mb-20 mx-auto h-screen max-w-4xl'>
            <div className='justify-start grid gap-6 mb-10'>
                <h1 className='text-5xl'>{'<'} <span className='text-zinc-50'>Proyectos</span> {'/'}{'>'}</h1>
                <hr className=' border-zinc-400'></hr>
                </div>
            <div >
                <div className=' md:flex md:space-y-0 sm:space-y-7  md:space-x-5  md:columns-3 sm:columns-1 lg:columns-3 mx-auto mb-7'>
                    <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
                    <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
                    <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
                </div>
                <div className=' md:flex md:space-y-0 sm:space-y-7  md:space-x-5  md:columns-3 sm:columns-1 lg:columns-3  mx-auto mt-7'>
                    <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
                    <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
                    <CardModal titulo='App Luna' texto='' explicacion='' img='' ></CardModal>
                </div>
            </div>
           
        </div>
    );
}

export default Proyectos;
