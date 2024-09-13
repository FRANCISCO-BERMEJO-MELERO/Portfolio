import React from 'react';



const Sobremi = () => {
    return (
        <>
            <div class="mx-auto  w-full max-w-4xl items-center  justify-center my-10">
            <div className='justify-start grid gap-6 mb-10'>
                <h1 className='md:text-5xl text-3xl '>{'<'} <span className='text-zinc-50'>Sobre mi</span> {'/>'}</h1>
                <hr className=' border-zinc-400'></hr>
            </div>
                <div className=' mt-12 justify-center grid h-auto mx-auto  z-10 relative p-[2.5px] w-full items-center overflow-hidden rounded-xl'>
                    <div className='relative z-20 grid w-full bg-transparent-900  '>
                        <p>Sou um desenvolvedor front-end focado em ReactJS.</p>
                        <p>Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.</p>
                        <p>Contato: <a href="mailto:seu_email@seudominio.com">seu_email@seudominio.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/seu_nome/">seu_nome</a></p>


                    </div>
                </div>
            </div>
            
        </>
        
    );
}

export default Sobremi;
