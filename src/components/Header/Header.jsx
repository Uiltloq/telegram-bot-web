import React from 'react';
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

export const Header = () => {
    const {user} = useTelegram();

    return (
        <div className={'header'}>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};