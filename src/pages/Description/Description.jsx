import React from 'react';
import './Description.css'
import RequestButton from "../../UI/RequestButton/RequestButton";

const Description = () => {
    return (
        <div className='description'>
            <div className="title">
                <span>Ремонт бытовой техники от рублей</span>
            </div>
            <div className="subtitle">
                <span>Сломалась техника в доме? Мы занимаемся ремонтом любой сложности</span>
            </div>
            <div className="btn_request">
                <RequestButton title='Оставить заявку'/>
            </div>
        </div>
    );
};

export default Description;