import React from "react";
import { Usecontext } from "./Context";
export default function Cart({id, title, price, description, image, amount}){
    const {remove, increase, decrease} = Usecontext();
    return (
        <div className="cart">
            <div className="cart__image">
                <img src={image}/>
            </div>
            <div>
                <h2 className="cart__title">{title}</h2>
                <p className="description">{description}</p>
                <p className="price">{price}</p>
                <button type = "button" onClick={()=>remove(id)}>remove</button>
            </div>
            <div className="counters">
                <button type = "button" onClick={()=>increase(id)}>🔼</button>
                <p>{amount}</p>
                <button type = "button" onClick = {()=>decrease(id)}>🔽</button>
            </div>
        </div>
    )
}