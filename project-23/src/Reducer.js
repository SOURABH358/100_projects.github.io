export default function reducer(state, action) {
    // 
    if(action.type === 'LOADING')
    {
        return {...state, loading: true}
    }
    if (action.type === 'FETCH_DATA') {
        return { ...state, loading: false, cartData: action.payload }
    }
    if (action.type === 'INCREASE') {
        return {
            ...state,
            cartData: state.cartData.map(el => {
                if (el.id === action.payload) {
                    return { ...el, amount: el.amount + 1 }
                }
                return el
            })
        }
    }
    if (action.type === 'DECREASE') {
        return {
            ...state,
            cartData: state.cartData.map(el => {
                if (el.id === action.payload) {
                    if (el.amount > 1)
                        return { ...el, amount: el.amount - 1 }
                }
                return el
            })
        }
    }
    if (action.type === 'REMOVE') {
        return {
            ...state,
            cartData: state.cartData.filter(el => {
                return el.id !== action.payload
            })
        }
    }
}