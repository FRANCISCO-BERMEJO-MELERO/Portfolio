import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Sobremi = () => {
    return (
        <>
            <div class="mx-auto flex w-full items-center max-w-3xl justify-center my-20">
                <div className=' mt-12 justify-center grid h-auto mx-auto  z-10 relative p-[1.5px] w-full items-center overflow-hidden rounded-xl'>
                    <div class="animate-rotate absolute inset-0 h-auto w-auto rounded-full bg-[conic-gradient(#af9d00_20deg,transparent_120deg)]"></div>
                    <div className='relative z-20 grid w-full rounded-[0.60rem] p-2 bg-slate-600'>
                        <h1 className='text-2xl'>Sobre mim</h1>
                        <p>Sou um desenvolvedor front-end focado em ReactJS.</p>
                        <p>Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.
                        Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.</p>
                        <p>Contato: <a href="mailto:seu_email@seudominio.com">seu_email@seudominio.com</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/seu_nome/">seu_nome</a></p>
                        <hr className='my-2'></hr>
                        <p className='text-center'>{'<'} Contacto {'/'}{'>'}</p>
                        <div className=' gap-3 flex justify-center'>
                            <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
        
    );
}

export default Sobremi;
