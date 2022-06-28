import React,{createContext,useReducer} from 'react'
import CartReducer, { initialState } from '../Reducers/CartReducer'

export const cartContext = createContext()

export default function CartProvider({children}) {

    const [state,dispatch] = useReducer(CartReducer,initialState)

    return <cartContext.Provider value={{
        items:state.items,
        setItems:dispatch
    }}>
        {children}
    </cartContext.Provider>
}