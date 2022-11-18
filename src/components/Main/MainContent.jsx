import React from 'react';
import './MainContent.css'
import washing from '../../assets/wm.png'
import boiler from '../../assets/бойлер.jpg'
import over from '../../assets/духовка.png'
import gas from '../../assets/колонка.png'
import Modal from "../modal/Modal";

const MainContent = () => {

    const [openModal, setModalOpen] = React.useState(false)

    return (
        <section>
            <h1>Срочный ремонт и обслуживание бытовой техники!</h1>
            <div className='repair'>
                <div className='single'>
                    <img src={washing} alt=""/>
                </div>
                <div className='single'>
                    <img src={boiler} alt=""/>
                </div>
                <div className='single'>
                    <img src={over} alt=""/>
                </div>
                <div className='single'>
                    <img src={gas} alt=""/>
                </div>
            </div>
            <ul> Осуществляем ремонт
                <li>Газовых колонок</li>
                <li>Газовых плит</li>
                <li>Газовых котлов</li>
                <li>Бойлеров</li>
                <li>Посудомойек</li>
                <li>Электрических плит</li>
                <li>Вытяжек</li>
                <li>Кофемашин</li>
            </ul>
            <button onClick={() => setModalOpen(true)}>Оставить заявку</button>
            {openModal && <Modal setModalOpen={setModalOpen}/>}
        </section>
    );
};

export default MainContent;