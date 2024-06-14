import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect} from "react";
import Form from '../Form/Form';

const products = [
    {id: '1', title: 'Буст аккаунта', price: 5000, description: 'Повышение рейтинга вашего аккаунта'},
    {id: '2', title: 'Колибровка', price: 12000, description: 'Колибровка вашего акканута 10 побед'},
    {id: '3', title: 'Покупка аккаунта', price: 5000, description: 'Вабор аккаунта с рейтингом'},
    {id: '4', title: 'Буст побед', price: 122, description: 'До 20 побед'},
    {id: '5', title: 'Буст порядочности', price: 5000, description: 'Повышение лояльности в игре'},
    {id: '6', title: 'Обучение', price: 600, description: 'Обучение. Отдельно'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

export const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();
    const [isSend, setIsSend] = useState(false);
    const onSendData = useCallback(() => {

        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        setIsSend(true);
        // fetch('http://85.119.146.179:8000/web-data', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <>
            {!isSend && <div className={'list'}>
                {products.map(item => (
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))}
            </div>}
            {isSend && <Form/>}
        </>
    );
};
