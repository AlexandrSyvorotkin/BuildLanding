import React from 'react';
import './Modal.css'

const Modal = ({setModalOpen}) => {


    return (
        <div className='backdrop' onClick={() => setModalOpen(false)}>
            <div className='modal' onClick={e => e.stopPropagation()}>
            </div>
        </div>
    );
};

export default Modal;