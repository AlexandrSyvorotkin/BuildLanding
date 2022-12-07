import React from 'react';
import {FiPhoneCall} from "react-icons/fi";
import './PhoneNumber.css'


const PhoneNumber = ({type}) => {
    return (
        <div className='number'>
            <FiPhoneCall size={30}/>
            <a href='tel:+9(916)-441-96-05'>{type === 'header' ? '+7 (916) 441-96-05' : 'ПОЗВОНИТЬ'}</a>
        </div>
    );
};

export default PhoneNumber;