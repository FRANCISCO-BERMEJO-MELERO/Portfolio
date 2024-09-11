
import React, { useState } from 'react';
import Modal from './modal';

const CardModal = () => {
    const [isModalOpen, setisModalOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setisModalOpen(true) }>modal</button>
            <Modal isOpen={isModalOpen} closeModal={() => setisModalOpen(false)}/>
        </div>
    );
}

export default CardModal;
