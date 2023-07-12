import React from 'react';

const ShopItem = ({ name, price, color, img }) => {
    return (
        <div className='shop-item'>
            <img className='shop-item__img' src={img} alt={name}/>
            <h3 className='shop-item__name'>{name}</h3>
            <p className='shop-item__color'>{color}</p>
            <span className='shop-item__price'>&#36; {price}</span>
            <button className='shop-item__buy-button'>Add to card</button>
        </div>
    );
};

export default ShopItem;