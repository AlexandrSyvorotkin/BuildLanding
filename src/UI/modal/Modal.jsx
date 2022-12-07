import React, {useState} from 'react';
import styles from './Modal.module.scss'
import axios from "axios";
import logo from "../../components/Logo/Logo";
import {HiOutlineXCircle} from "react-icons/hi2";
import {useForm} from "react-hook-form";

const Modal = ({ setModalOpen }) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    console.log(name)
    console.log(number)

    const CHAT_ID = "-838184401"
    const BOT_ID = '5907832459:AAG9ur0pjQF49R2T41eYrwp71pNaE37J1jA'

    const URL = `https://api.telegram.org/bot${ BOT_ID }/sendMessage`

    const submit = (e, URL) => {
        e.preventDefault()

        const message = `<b>Заявка с сайта!</b>/n <br/> <b>Отправитель: ${name}</b> <br/> <b>Номер телефона: ${number}</b>`

        axios.post(URL, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })

    }

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <div className={styles.backdrop} onClick={() => setModalOpen(false)}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.modal_title}>
                    <span>
                        Заказать звонок
                    </span>
                    <HiOutlineXCircle size={30} onClick={() => setModalOpen(false)} style={{cursor: 'pointer'}}/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <label className={styles.label}>
                        Введите ваше имя
                        <input type="text"/>
                    </label>
                    <label className={styles.label}>
                        Введите ваш номер телефона
                        <input type="text"/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
};

export default Modal;