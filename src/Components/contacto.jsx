import React from 'react';

const Contacto = () => {
    return (
        <div className='h-screen md:w-full w-[80%]  max-w-4xl mx-auto md:mt-20 mt-10 '>
        <div className='justify-center grid gap-2'>
            <h1 className='text-3xl md:text-5xl'>{'<'} <span className='text-zinc-50'>Contacto</span> {'/>'}</h1>
            <hr className='h-1 w-full border-zinc-400'></hr>
        </div>
        <form className='border py-4 rounded-md border-zinc-400 px-6 mt-10'>
            <label htmlFor='name' className='text-zinc-100 text-2xl  '>Nombre</label>
            <input type='text' id='name' placeholder='Nombre' className='w-full p-2 rounded-md mb-8 bg-zinc-900 border-2 border-zinc-400 text-zinc-100'></input>
            <label htmlFor='email' className='text-zinc-100 text-2xl'>Email</label>
            <input type='email' id='email' placeholder='Email' className='w-full p-2 rounded-md mb-8 bg-zinc-900 border-2 border-zinc-400 text-zinc-100'></input>
            <label htmlFor='message' className='text-zinc-100 text-2xl m'>Mensaje</label>
            <textarea id='message' placeholder='Mensaje' className='w-full p-2 rounded-md mb-8 bg-zinc-900 border-2 border-zinc-400 text-zinc-100'></textarea>
            <button type='submit' className='w-1/3 mx-auto justify-center flex my-3 p-2  rounded-md bg-zinc-900 border-2 border-zinc-400 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300'>Enviar</button>
        </form>
        </div>
    );
}

export default Contacto;
