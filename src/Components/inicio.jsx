import React from 'react';

const Inicio = () => {
    return (
        <div>
            <div className="z-0 grid items-center mx-auto max-w-4xl min-h-screen">
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto">
                    <img alt="una imagen" src="https://static8.depositphotos.com/1028979/1058/i/950/depositphotos_10580841-stock-photo-handsome-smiling-man-isolated-over.jpg" className="w-2/3 md:w-1/3 rounded-full border-4 border-zinc-500 cursor-pointer mb-6 md:mb-0"/>
                    <span className="w-full md:w-2/4 text-center md:text-left">
                        <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-zinc-100">Francisco Bermejo Melero</h1>
                        <hr className="my-4"/>
                        <p className="text-base md:text-lg my-2">Estudiante de Desarrollo de Aplicaciones Multiplataforma</p>
                        <div className='gap-3 flex justify-center md:justify-start mt-4'>
                            <a className="text-xl" href="google.com"><img src='/icons/linkedin.svg' className="iconos hover:scale-110 w-8 h-8" alt="linkedin"/></a>
                            <a href="google.com"><img src='icons/github-dark.svg' className="iconos hover:scale-110 w-8 h-8" alt="github"/></a>
                        </div>
                    </span>
                </div>
                <div className="w-full md:w-30 mx-auto  md:justify-center flex lg:justify-center md:mt-0">
                    <button className="w-full md:w-auto rounded-xl bg-slate-300 cursor-pointer font-bold border-none">
                        <a className="block rounded-xl bg-zinc-900 box-border border-2 border-zinc-300 py-3 px-6 text-white -translate-y-1 duration-100 hover:-translate-y-[0.33em] active:translate-y-0" download={'CV.pdf'} href='./download/cv.pdf'>Descargar CV</a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
