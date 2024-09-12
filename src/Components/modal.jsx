import React from "react";
import ReactDOM from 'react-dom';
// Importa los iconos necesarios, por ejemplo:
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    const technologies = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
    ];

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-md">
            <div className="relative rounded-xl shadow-2xl p-6 w-full md:max-w-[40%] max-h-[90%] max-w-[95%] h-full border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-y-auto">
                <button className="absolute top-6 right-8 text-zinc-200 hover:text-zinc-400 transition-colors duration-300" onClick={closeModal}>
                    <span className="text-3xl">&times;</span>
                </button>
                <div className="flex flex-col gap-6">
                    <img src="https://t4.ftcdn.net/jpg/02/89/98/37/360_F_289983793_oZPL25vmImtNTwpBLCoC1wMgTUx0yDbd.jpg" alt="" className="w-full rounded-lg shadow-md object-cover h-64"></img>
                    <div className="space-y-4">
                        <h2 className="text-4xl text-zinc-50 font-bold text-center">
                            Título del Modal
                        </h2>
                        <p className="text-zinc-300 text-lg leading-relaxed">
                            Este es el contenido del modal. Puedes agregar cualquier cosa aquí. El diseño ha sido mejorado para una apariencia más estética y moderna.
                        </p>
                    </div>
                    
                    {/* Nueva sección de tecnologías */}
                    <div className="mt-8">
                        <h3 className="text-2xl text-zinc-50 font-semibold mb-4">Tecnologías</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {technologies.map((tech, index) => (
                                <div key={index} className="flex items-center space-x-2 bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors duration-300">
                                    <span className="text-3xl text-zinc-300">{tech.icon}</span>
                                    <span className="text-zinc-300">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') // Asegúrate de tener este contenedor en tu HTML
    );
};

export default Modal;
