import React, { useState } from 'react';
import '../App.css';
import IconSwitch from './iconSwitch';
import CardsView from './cardsView';
import ListView from './listView';

const Store = () => {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];

      const layouts = ["view_list", "view_module"];
      let [selected, setSelected] = useState(layouts[0]);
      const onSwitch = () => {
        if(selected === layouts[0]) {
            selected = layouts[1];
            setSelected(layouts[1])
        } else {
            selected = layouts[0];
            setSelected(layouts[0])
        }
      }

      return (
        <div className='container'>
            <IconSwitch icon={selected} onSwitch={onSwitch}/>
            {selected === layouts[0]
            ? <CardsView cards={products}/>
            : <ListView items={products}/> 
            }
        </div>
      );
}

export default Store;