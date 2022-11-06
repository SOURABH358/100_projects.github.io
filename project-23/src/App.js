import React from "react"
import './App.css'
import {Usecontext} from './Context'
import CartContainer from "./cartContainer";
import Cart from "./cart";
export default function App(){
    const {loading, fetchData} = Usecontext();
    // fetchData()
    // if(loading)
    // {
    //     return (<h1 className="loading">
    //         Loading...
    //     </h1>)
    // }
    return (<main>
        <CartContainer/>
    </main>)
}