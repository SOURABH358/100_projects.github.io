import React from "react";
import Cart from "./cart";
import { Usecontext } from "./Context";

export default function CartContainer(){
    const {cartData} = Usecontext()
    return (
        <div className="cart__container">
            <Cart/>
        </div>
    )
}