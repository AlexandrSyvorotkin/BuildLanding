import React from 'react';
import styles from './Prices.module.scss'

const prices = [
    {id: 1, title: 'газовые котлы', description: '', price: 'от 2500 руб'},
    {id: 2, title: 'газовые колонки', description: '', price: 'от 2500 руб'},
    {id: 3, title: 'газовые колонки', description: '', price: 'от 2500 руб'},
    {id: 4, title: 'бойлеры', description: '', price: 'от 2500 руб'},
    {id: 5, title: 'кофемашины', description: '', price: 'от 2500 руб'},
    {id: 6, title: 'посудомойки', description: '', price: 'от 2500 руб'},
    {id: 7, title: 'стиральные машины', description: '', price: 'от 2500 руб'},
    {id: 8, title: 'духовые шкафы', description: '', price: 'от 2500 руб'},
    {id: 8, title: 'варочные панели(газовые и электрические)', description: '', price: 'от 2500 руб'},
    {id: 8, title: 'кондиционеры', description: '', price: 'от 2500 руб'},
    {id: 8, title: 'электрические котлы и колонки', description: '', price: 'от 2500 руб'},
]


const Prices = () => {
    return (
        <div className={styles.prices}>
            {prices.map(price =>
                <div className={styles.price}>
                    <div className={styles.header}>
                        <span>{price.title}</span>
                        <span>{price.price}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Prices;