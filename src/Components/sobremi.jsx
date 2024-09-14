import React from 'react';



const Sobremi = () => {
    return (
        <>
            <div className="mx-auto md:w-full w-[80%] max-w-4xl items-center justify-center mb-10  " id='sobremi'>
                <div className='md:justify-start justify-center grid gap-6 mb-10 w-full'>
                    <h1 className='md:text-5xl text-3xl'>{'<'}<span className='text-zinc-50'>Sobre mi</span>{'/>'}</h1>
                    <hr className='h-1 w-full border-zinc-400'></hr>
                </div>
                <div className='mt-12 justify-center grid h-auto mx-auto z-10 relative p-4 w-full items-center overflow-hidden rounded-xl bg-zinc-800/30 border border-zinc-700'>
                    <div className='relative z-20 grid w-full gap-4'>
                        <p className='text-lg'>Sou um desenvolvedor front-end focado em ReactJS.</p>
                        <p className='text-base'>Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes. Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes. Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.</p>
                        <p className='text-sm'>Contato: <a href="mailto:seu_email@seudominio.com" className='text-blue-400 hover:underline'>seu_email@seudominio.com</a></p>
                        <p className='text-sm'>LinkedIn: <a href="https://www.linkedin.com/in/seu_nome/" className='text-blue-400 hover:underline'>seu_nome</a></p>
                    </div>
                </div>
                
                <div className='mt-16'>
                    <h2 className='text-3xl mb-6'>Trayectoria Profesional</h2>
                    <div className='space-y-8'>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center'>
                            <div className='w-full sm:w-1/4 font-bold text-zinc-300'>2023 - Presente</div>
                            <div className='w-full sm:w-3/4'>
                                <h3 className='text-xl font-semibold'>Desarrollador Front-end Senior</h3>
                                <p className='text-zinc-400'>Empresa Actual S.A.</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center'>
                            <div className='w-full sm:w-1/4 font-bold text-zinc-300'>2020 - 2023</div>
                            <div className='w-full sm:w-3/4'>
                                <h3 className='text-xl font-semibold'>Desarrollador React</h3>
                                <p className='text-zinc-400'>Empresa Anterior Inc.</p>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center'>
                            <div className='w-full sm:w-1/4 font-bold text-zinc-300'>2018 - 2020</div>
                            <div className='w-full sm:w-3/4'>
                                <h3 className='text-xl font-semibold'>Desarrollador Web Junior</h3>
                                <p className='text-zinc-400'>Primera Empresa Ltda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Sobremi;
