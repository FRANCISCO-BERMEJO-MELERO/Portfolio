import React from "react";

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
            <div className="relative   rounded-lg shadow-lg p-3 w-full md:max-w-[35%] max-h-[80%] max-w-[99%] h-full border ">
            <div className="border h-full  rounded-lg bg-slate-700">
                <button  className="absolute top-6 right-6 text-white hover:text-gray-500 " onClick={closeModal}>
                    <span className="text-xl ">✕</span>
                </button>
                <div className=" gap-8 grid">
                    <img src="https://t4.ftcdn.net/jpg/02/89/98/37/360_F_289983793_oZPL25vmImtNTwpBLCoC1wMgTUx0yDbd.jpg" alt="" className="max-w-[99.5%] rounded-t-lg mx-auto"></img>
                    <span className="mx-3">
                        <h2 className="text-2xl  text-gray-50 ">
                            Título del Modal
                        </h2>
                        <p className="mt-2 text-gray-400 ">
                            Este es el contenido del modal. Puedes agregar cualquier cosa aquí.
                        </p>
                    </span>
                    
                </div>
            </div>
                
            </div>
        </div>
    );
};

export default Modal;
