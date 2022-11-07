import React from "react";
import Cart from "./cart";
import { useGlobalContext } from "./Context";

export default function CartContainer(){
    const {cartData} = useGlobalContext()
    return (
        <div className="cart__container">
            {cartData.map(el=>{
                return <Cart key={el.id} {...el}/>
            })}
        </div>
    )
}