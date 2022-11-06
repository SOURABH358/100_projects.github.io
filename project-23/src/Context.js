import React, {useState, useEffect, useReducer, useContext} from "react";
import reducer from "./Reducer";

const intialState = {
    loading: true,
    cartData: [],
    amount: 0,
    total: 0
}
const AppContext = React.createContext()
function AppProvider({children}){
    const [globalState, dispatch] = useReducer(reducer, intialState)

    async function fetchData(){
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        dispatch({type: 'FETCH_DATA', payload: [...data]})
    }
    function increase(){

    }
    function decrease(){

    }
    function clearCart(){

    }
    function remove(){

    }
    // useEffect(()=>{
    //     fetchData();
    // },[])
    return <AppContext.Provider
    value = {{
        ...globalState,
        increase,
        decrease,
        clearCart,
        remove}}>
        {children}
    </AppContext.Provider>

    


}
const Usecontext =()=>{
    return useContext(AppContext)
}
export {AppProvider, Usecontext}