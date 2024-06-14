import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            email,
            login,
            password,
            comment
        }
        tg.sendData(JSON.stringify(data));
    }, [email, login, password, comment])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!login || !email || !password) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [email, login, password])

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangeLogin = (e) => {
        setLogin(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeComment = (e) => {
        setComment(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Почта'}
                value={email}
                onChange={onChangeEmail}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Login'}
                value={login}
                onChange={onChangeLogin}
            />
            <input
                className={'input'}
                type="password"
                placeholder={'Пароль'}
                value={password}
                onChange={onChangePassword}
            />
            <input 
                className={'input'}
                type="text"
                placeholder={'Комментарий'}
                value={comment}
                onChange={onChangeComment}
            />
        </div>
    );
};

export default Form;