import React from "react";
import Cart from "./cart";
import { useGlobalContext } from "./Context";

export default function CartContainer() {
    const { cartData, total, clearCart } = useGlobalContext()
    if(cartData.length===0){
        return (<h2 className="empty__bag">Your Bag is empty</h2>)
    }
    return (
        <>
            <div className="cart__container">
                {cartData.map(el => {
                    return <Cart key={el.id} {...el} />
                })}
            </div>
            <div className="footer">
                <div className="total"><div>Total</div><div>$ {total}</div></div>
                <button className="clear__btn" type="button" onClick={()=>{clearCart()}}>Clear Cart</button>
            </div>
        </>
    )
}