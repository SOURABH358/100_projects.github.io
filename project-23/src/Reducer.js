export default function reducer(state, action){
    // 
    if(action.type==='FETCH_DATA')
    {
        return {...state, loading: false, cartData: action.payload}
    }
}