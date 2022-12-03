import React, {useState} from 'react';
import './Modal.css'
import axios from "axios";
import logo from "../../components/Logo/Logo";
import {HiOutlineXCircle} from "react-icons/hi2";

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


    return (
        <div className='backdrop' onClick={() => setModalOpen(false)}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                <div className="modal_title">
                    <span>
                        Заказать звонок
                    </span>
                    <HiOutlineXCircle size={30} onClick={() => setModalOpen(false)} style={{cursor: 'pointer'}}/>
                </div>
                {/*<form >*/}
                {/*    <label htmlFor="">Введите ваше имя</label>*/}
                {/*        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>*/}
                {/*    <label htmlFor="">Введите ваш номер</label>*/}
                {/*        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>*/}
                {/*    <button onClick={submit} >Отправить</button>*/}
                {/*</form>*/}
            </div>
        </div>
    );
};

export default Modal;