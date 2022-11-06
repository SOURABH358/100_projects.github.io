import React from "react";

export default function Cart({title, price, description, image}){
    return (
        <div className="cart">
            <div className="cart__image">
                <img src={image}/>
            </div>
            <div>
                <h2 className="cart__title">{title}</h2>
                <p className="description">{description}</p>
                <p className="price">{price}</p>
            </div>
            <div className="counters">
                <p>🔼</p>
                <p>0</p>
                <p>🔽</p>
            </div>
        </div>
    )
}