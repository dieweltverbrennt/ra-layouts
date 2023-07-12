import React from 'react';
import ShopCard from './shopCard';
import { v4 as uuidv4 } from 'uuid';

const CardsView = ({ cards }) => {
    return (
        <div key={uuidv4()} className="cards-view">
            {cards.map((card) => (
                <ShopCard key={uuidv4()} name={card.name} price={card.price} color={card.color} img={card.img}/>
            )
            )}
        </div>
    );
}

export default CardsView;