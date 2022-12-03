import React from 'react';
import './Description.css'
import RequestButton from "../../UI/RequestButton/RequestButton";
import Modal from "../../UI/modal/Modal";

const Description = () => {

    const [openModal, setModalOpen] = React.useState(false)

    return (
        <div className='description'>
            <div className="title">
                <span>Ремонт бытовой техники от рублей</span>
            </div>
            <div className="subtitle">
                <span>Сломалась техника в доме? Мы занимаемся ремонтом любой сложности</span>
            </div>
            <div onClick={() => setModalOpen(true)} className="btn_request">
                <RequestButton title='Оставить заявку'/>
            </div>
            {openModal && <Modal setModalOpen={setModalOpen}/>}
        </div>
    );
};

export default Description;