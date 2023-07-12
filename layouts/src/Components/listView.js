import React from 'react';
import ShopItem from './shopItem';
import { v4 as uuidv4 } from 'uuid';

const ListView = ({ items }) => {
    return (
        <div key={uuidv4()} className="list-view">
            {items.map((item) => (
                <ShopItem key={uuidv4()} name={item.name} price={item.price} color={item.color} img={item.img}/>
            )
            )}
        </div>
    );
}

export default ListView;