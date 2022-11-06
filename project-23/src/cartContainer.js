import React from "react";
import Cart from "./cart";
import { Usecontext } from "./Context";

export default function CartContainer(){
    const {cartData} = Usecontext()
    return (
        <div className="cart__container">
            {cartData.map(el=>{
                return <Cart key={el.id} {...el}/>
            })}
        </div>
    )
}