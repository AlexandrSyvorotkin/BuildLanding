import React from 'react';
import styles from './WorkScheme.module.scss'
import step_1 from '../../assets/work_scheme/step1.png'
import step_2 from '../../assets/work_scheme/step2.png'
import step_3 from '../../assets/work_scheme/step3.png'
import step_4 from '../../assets/work_scheme/step4.png'
import step_5 from '../../assets/work_scheme/step5.png'
import step_6 from '../../assets/work_scheme/step6.png'

const workScheme = [
    {
        id: 1,
        number: 1,
        title: 'Консультация',
        description: 'Персональный менеджер ответит на все ваши вопросы и будет держать вас в курсе всех этапов работ',
        img: step_1
    },
    {
        id: 2,
        number: 2,
        title: 'Доставка',
        description: 'Курьер приедет в течении 1 часа или мы можем принять устройство в сервисе',
        img: step_2
    },
    {
        id: 3,
        number: 3,
        title: 'Диагностика',
        description: 'Осуществим диагностику за счет компании, даже если вы откажетесь от ремонтае',
        img: step_3
    },
    {
        id: 4,
        number: 4,
        title: 'Согласование',
        description: 'Персональный менеджер согласует с вами сроки и стоимость ремонта',
        img: step_4
    },
    {
        id: 5,
        number: 5,
        title: 'Выдача',
        description: 'Бесплатно доставим устройство к вам домой или вы можете забрать его сами',
        img: step_5
    },
    {
        id: 6,
        number: 6,
        title: 'Диагностика',
        description: 'Оплата производится после ремонта и проверки устройства клиентом',
        img: step_6
    },
]


const WorkScheme = () => {
    return (
        <section>
            <div className={styles.heading}>
                <span>Схема работы</span>
            </div>
            <div className={styles.work_scheme}>
                {workScheme.map(step =>
                    <div key={step.id} className={styles.wrapper}>
                        <div className={styles.header}>
                            <div className={styles.number}>{step.number}</div>
                            <div className={styles.title}>
                                <span>{step.title}</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <img src={step.img} alt=""/>
                            <p>{step.description}</p>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

export default WorkScheme;