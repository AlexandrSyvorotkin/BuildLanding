import React from 'react';
import './Logo.css'
import {HiOutlineWrench} from "react-icons/hi2";

const Logo = () => {
    return (
        <div className='logo'>
            {/*<img src="src/Layout/Header/Header" alt="logo"/>*/}
            <HiOutlineWrench/>
            Ремонт бытовой техники
        </div>
    );
};

export default Logo;