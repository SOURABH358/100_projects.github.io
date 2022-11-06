import React from "react";

export default function Cart(){
    return (
        <div className="cart">
            <div className="cart__image">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
            </div>
            <div>
                <h2 className="cart__title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                <p className="description">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <p className="price">109.95</p>
            </div>
            <div className="counters">
                <p>🔼</p>
                <p>0</p>
                <p>🔽</p>
            </div>
        </div>
    )
}