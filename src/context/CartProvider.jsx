import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = []

export const CartProvider = ({ children }) => {

    const shopReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad Compra':
                return state.map(item => {
                    const cant = item.quantity + 1
                    if (item.id === action.payload) return { ...item, quantity: cant }
                    return item
                })
            case '[CARRITO] Disminuir Cantidad Compra':
                return state.map(item => {
                    const cant = item.quantity - 1
                    if (item.id === action.payload && item.quantity > 1) return { ...item, quantity: cant }
                    return item
                })
            case '[CARRITO] Eliminar Compra':
                return state.filter(purchase => purchase.id !== action.payload)
            case '[CARRITO] Comprar':
                return state = initialState
            default:
                return state
        }
    }

    const [shopList, dispatch] = useReducer(shopReducer, initialState)

    const addPurchase = (purchase) => {
        purchase.quantity = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: purchase
        }
        dispatch(action)

    }
    const increase = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
        }
        dispatch(action)

    }
    const decrease = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad Compra',
            payload: id
        }
        dispatch(action)

    }
    const deletePurchase = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    const buy = () => {
        const action = {
            type: '[CARRITO] Comprar',
        }
        dispatch(action)
    }

    return (
        <CartContext.Provider value={{ shopList, addPurchase, increase, decrease, deletePurchase, buy }}>
            {children}
        </CartContext.Provider>
    )
}
