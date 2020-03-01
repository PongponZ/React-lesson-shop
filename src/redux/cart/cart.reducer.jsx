import {CartActionTypes} from './cart.types'
import {addItemToCart , removeItemFormCart} from './cart.utils'
const INITIAL_STATE = {
    hidden:false,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log("STATE ITEM:",state)
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter( cartItems => cartItems.id !== action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFormCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}
export default cartReducer