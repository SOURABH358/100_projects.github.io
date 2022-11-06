import React from "react"
import './App.css'
import {Usecontext} from './Context'
import CartContainer from "./cartContainer";
export default function App(){
    const {loading} = Usecontext();
    if(loading)
    {
        return (<h1 className="loading">
            Loading...
        </h1>)
    }
    return (<main>
        <CartContainer/>
    </main>)
}