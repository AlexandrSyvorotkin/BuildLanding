import React from 'react';
import styles from './Prices.module.scss'
import washMachine from '../../assets/Стиральные_машины.png'
import sush from '../../assets/Сушильные_машины.png'
import panel from '../../assets/Электрические_варочные_панели.png'
import air from '../../assets/ac-png-25245.png'

const prices = [
    {
        id: 1,
        title: 'газовые котлы',
        description: '',
        price: 'от 2500 руб',
        img: ''
    },
    {
        id: 2,
        title: 'газовые колонки',
        description: '',
        price: 'от 2500 руб',
        img: ''
    },
    {
        id: 3,
        title: 'газовые колонки',
        description: '',
        price: 'от 2500 руб',
        img: ''},
    {
        id: 4,
        title: 'бойлеры',
        description: '',
        price: 'от 2500 руб',
        img: ''
    },
    {
        id: 5,
        title: 'кофемашины',
        description: '',
        price: 'от 2500 руб',
        img: 'https://assets.stickpng.com/thumbs/58adf59fe612507e27bd3c3d.png'
    },
    {
        id: 6,
        title: 'посудомойки',
        description: '',
        price: 'от 2500 руб',
        img: sush
    },
    {
        id: 7,
        title: 'стиральные машины',
        description: '',
        price: 'от 2500 руб',
        img: washMachine
    },
    {
        id: 8,
        title: 'духовые шкафы',
        description: '',
        price: 'от 2500 руб',
        img: 'https://www.pngmart.com/files/2/Microwave-Oven-PNG-Photos.png'
    },
    {
        id: 8,
        title: 'варочные панели(газовые и электрические)',
        description: '',
        price: 'от 2500 руб',
        img: panel
    },
    {
        id: 8,
        title: 'кондиционеры',
        description: '',
        price: 'от 2500 руб',
        img: air
    },
    {
        id: 8,
        title: 'электрические котлы и колонки',
        description: '',
        price: 'от 2500 руб'
    },
]


const Prices = () => {
    return (
        <div className={styles.prices}>
            {prices.map(price =>
                <div className={styles.price}>
                    <div className={styles.header}>
                        <span>{price.title}</span>
                        <span>{price.price}</span>
                        <div className={styles.img}>
                            <img src={price.img} alt=""/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Prices;