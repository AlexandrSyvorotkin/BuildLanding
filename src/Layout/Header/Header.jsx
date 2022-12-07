import React from 'react';
import styles from './Header.module.scss'
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";
import Logo from "../../components/Logo/Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Logo/>
                <div className={styles.location}>Москва и МО</div>
                <PhoneNumber type='header'/>
            </div>

        </header>
    );
};

export default Header;
