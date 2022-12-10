import React from 'react';
import styles from './Description.module.scss'
import RequestButton from "../../UI/RequestButton/RequestButton";
import Modal from "../../UI/modal/Modal";
import WorkScheme from "../../components/WorkScheme/WorkScheme";
import Faq from "../../components/Faq/Faq";

const Description = () => {

    const [openModal, setModalOpen] = React.useState(false)

    return (
        <div className={styles.description}>
            <div className={styles.title}>
                <span>Ремонт бытовой техники от рублей</span>
                <span className={styles.before}>от 1500 рублей</span>
            </div>
            <div className={styles.descr}>
                <span>Срочный выезд на дом:</span>
                <ul>
                    <li>Мастер будет у вас в течении часа</li>
                    <li>Диагностика неисправности 20 минут!</li>
                    <li>Гарантия до 1 года</li>
                </ul>
            </div>
            <div className={styles.subtitle}>
                <span>Сломалась техника в доме? Мы занимаемся ремонтом любой сложности</span>
            </div>
            <div onClick={() => setModalOpen(true)} className={styles.btn_request}>
                <RequestButton title='Оставить заявку'/>
            </div>
            <WorkScheme/>
            <Faq/>
            {openModal && <Modal setModalOpen={setModalOpen}/>}
        </div>
    );
};

export default Description;