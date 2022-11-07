import React from "react";
import { useGlobalContext } from "./Context";
export default function Cart({id, title, price, description, image, amount}){
    const {remove, increase, decrease} = useGlobalContext();
    return (
        <div className="cart">
            <div className="cart__image">
                <img src={image}/>
            </div>
            <div className="cart__item">
                <h2 className="cart__title">{title}</h2>
                <p className="description">{description.substr(0,200)}...</p>
                <p className="price">Price - {price}</p>
                <button type = "button" className = "remove__btn" onClick={()=>remove(id)}>remove</button>
            </div>
            <div className="counters">
                <button type = "button" onClick={()=>increase(id)} className = "inc__btn">🔼</button>
                <p>{amount}</p>
                <button type = "button" onClick = {()=>decrease(id)} className = "dec__btn">🔽</button>
            </div>
        </div>
    )
}