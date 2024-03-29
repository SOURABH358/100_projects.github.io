import React, {useState, useEffect, useReducer, useContext} from "react";
import reducer from "./Reducer";

const initialState = {
    loading: true,
    cartData: [],
    amount: 0,
    total: 0
}
const AppContext = React.createContext()
function AppProvider({children}){
    const [globalState, dispatch] = useReducer(reducer, initialState)

    async function fetchData(){
        dispatch({type: 'LOADING'})
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        let modifyData = data.map(el=>{
            el.amount = 1;
            return el
        }).slice(0,5)
        
        // console.log(modifyData)
        dispatch({type: 'FETCH_DATA', payload: [...modifyData]})
    }
    function increase(id){
        dispatch({type: 'INCREASE', payload: id})
    }
    function decrease(id){
        dispatch({type: 'DECREASE', payload: id})
    }
    function clearCart(){
        dispatch({type: 'CLEAR_CART'})
    }
    function remove(id){
        dispatch({type: 'REMOVE', payload: id})
    }
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
        dispatch({type: 'GET_TOTAL'})
    },[globalState.cartData])
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
const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppProvider, useGlobalContext}