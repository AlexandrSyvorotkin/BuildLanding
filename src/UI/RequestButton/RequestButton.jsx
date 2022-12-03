import React from 'react';
import './RequestButton.css'

const RequestButton = ({title}) => {
    return (
        <a href='#' className='btn'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {title}
        </a>
    );
};

export default RequestButton;