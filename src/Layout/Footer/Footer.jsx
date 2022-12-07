import React from 'react';
import styles from './Footer.module.scss'
import footer_img from '../../assets/footer/footer.png'
import PhoneNumber from "../../components/PhoneNumber/PhoneNumber";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.logo}>
                    <img src={footer_img} alt=""/>
                    <div className={styles.footer_description}>
                        <p>Нужна консультация специалиста?</p>
                        <p>Нажмите на кнопку для звонка нашему специалисту!</p>
                    </div>
                </div>
                <PhoneNumber/>
            </div>

        </footer>
    );
};

export default Footer;