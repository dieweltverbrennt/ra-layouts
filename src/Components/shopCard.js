import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShopCard = ({ name, price, color, img }) => {
    return (
        <div className='shop-card'>
            <h3 className='shop-card__name'>{name}</h3>
            <p className='shop-card__color'>{color}</p>
            <img className='shop-card__img' src={img} alt={name}/>
            <div className='shop-card__buy'>
                <span className='shop-card__price'>&#36; {price}</span>
                <button className='shop-card__buy-button'>Add to card</button>
            </div>
        </div>
    );
};

export default ShopCard;