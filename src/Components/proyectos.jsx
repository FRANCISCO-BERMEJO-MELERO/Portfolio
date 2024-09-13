import React from 'react';
import CardModal from './card-modal';

const Proyectos = () => {
    return (
        <div className='mt-52 mb-20 mx-auto max-w-4xl '>
            <div className='md:justify-start justify-center grid gap-6 mb-10'>
                <h1 className='md:text-5xl text-3xl '>{'<'} <span className='text-zinc-50'>Proyectos</span> {'/>'}</h1>
                <hr className='h-1 w-full border-zinc-400'></hr>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                <CardModal titulo='Coming Soon' texto='El proyecto aun no esta desarrollado' explicacion='El proyecto se encuentra en desarrollo, pronto se publicara y se podra ver en la web' img='/img/coming-soon.bmp' link='https://github.com/' iconos={["React", "Nodejs"]} />
                <CardModal titulo='Coming Soon' texto='El proyecto aun no esta desarrollado' explicacion='El proyecto se encuentra en desarrollo, pronto se publicara y se podra ver en la web' img='/img/coming-soon.bmp' link='' iconos={["React", "Nodejs"]} />
                <CardModal titulo='Coming Soon' texto='El proyecto aun no esta desarrollado' explicacion='El proyecto se encuentra en desarrollo, pronto se publicara y se podra ver en la web' img='/img/coming-soon.bmp' link='https://github.com/' iconos={["React", "Nodejs"]} />
                <CardModal titulo='Coming Soon' texto='El proyecto aun no esta desarrollado' explicacion='El proyecto se encuentra en desarrollo, pronto se publicara y se podra ver en la web' img='/img/coming-soon.bmp' link='https://github.com/' iconos={["React", "Nodejs"]} />
                <CardModal titulo='Coming Soon' texto='El proyecto aun no esta desarrollado' explicacion='El proyecto se encuentra en desarrollo, pronto se publicara y se podra ver en la web' img='/img/coming-soon.bmp' link='https://github.com/' iconos={["React", "Nodejs"]} />
                <CardModal titulo='Coming Soon' texto='El proyecto aun no esta desarrollado' explicacion='El proyecto se encuentra en desarrollo, pronto se publicara y se podra ver en la web' img='/img/coming-soon.bmp' link='https://github.com/' iconos={["React", "Nodejs"]} />
            </div>
        </div>
    );
}

export default Proyectos;
