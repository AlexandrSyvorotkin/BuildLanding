import React from 'react';
import './Header.css'
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import Logo from "../../components/Logo/Logo";

const Header = () => {
    return (
        <header className='header'>

            <Logo/>
            <div className="location">Москва и МО</div>
            <PhoneNumber/>
        </header>
    );
};

export default Header;
