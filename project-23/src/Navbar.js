import React from "react";
import { useGlobalContext } from "./Context";
export default function Navbar() {
    const { amount } = useGlobalContext();
    return (
        <nav className="navbar">
            <h1>Cart</h1>
            <div className="cart__logo">👜
                <p className="cart__amount">{amount}</p>
            </div>
        </nav>
    )
}