import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Sobremi = () => {
    return (
        <div className=' mt-12 p-6 justify-center grid bg-slate-600 text-center w-1/4 h-auto mx-auto rounded-md border-2 border-slate-400'>
            <div className='grid w-full mx-auto'>
            <h1>Sobre mim</h1>
            <p>Sou um desenvolvedor front-end focado em ReactJS.</p>
            <p>Meu objetivo é compartilhar conhecimentos e tornar os meus projetos mais interessantes.</p>
            <p>Contato: <a href="mailto:seu_email@seudominio.com">seu_email@seudominio.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/seu_nome/">seu_nome</a></p>
            <hr className='my-2'></hr>
            <p>{'<'}  {'/'}{'>'}</p>
            <div className=' gap-3 flex justify-center'>
                <a><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a><FontAwesomeIcon icon={faGithub} /></a>
            </div>
            
            </div>
            
            
        </div>
    );
}

export default Sobremi;
