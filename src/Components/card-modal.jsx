
import React, { useState } from 'react';
import Modal from './modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub } from '@fortawesome/free-brands-svg-icons';

const CardModal = (titulo, texto, explicacion ,img) => {
    const [isModalOpen, setisModalOpen] = useState(false);
    return (
        <div className='mx-auto h-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 my-14 md:my-0 md:w-[70%] border border-zinc-600 hover:border-zinc-400 hover:bg-zinc-800 hover:scale-105 active:scale-105'>
            <button onClick={() => setisModalOpen(true)} className='w-full focus:outline-none'>
                <img src='https://t4.ftcdn.net/jpg/02/89/98/37/360_F_289983793_oZPL25vmImtNTwpBLCoC1wMgTUx0yDbd.jpg' alt='' className='w-full h-48 object-cover rounded-t-lg'></img>
            </button>
            <div className='p-4'>
                <h3 className='text-2xl font-semibold text-zinc-50 mb-2'>App Luna</h3>
                <p className='text-zinc-400 mb-4'>Aplicación web</p>
                <div className='flex justify-between items-center'>
                    <button onClick={() => setisModalOpen(true)} className='text-zinc-300 hover:text-zinc-50 transition-colors duration-300'>
                        Ver más
                    </button>
                    <a className="text-zinc-400 hover:text-zinc-50 transition-colors duration-300" href="google.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                </div>
            </div>
            <Modal isOpen={isModalOpen} closeModal={() => setisModalOpen(false)}/>
        </div>
    );
}

export default CardModal;
