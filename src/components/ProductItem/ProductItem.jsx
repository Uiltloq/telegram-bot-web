import React from 'react';
import {Button} from "../Button/Button";
import './ProductItem.css';

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}></div>
            <div className={'title'}>{product.title}</div>
            {/* <div className={'description'}>{product.description}</div> */}
            <div className={'price'}>
                <span>{product.price.toLocaleString('ru')}<b>₽</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить
            </Button>
        </div>
    );
};

export default ProductItem;