
export const addItemToCart = (cartItems, cartItemToAdd) =>{
    //Check exist item
    const existingCartItem = cartItems.find(cartItems => cartItems.id === cartItemToAdd.id);
    
    if(existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFormCart = (cartItems,cartItemToRemove ) => {
    const existingCartItem = cartItems.find(cartItems => cartItems.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItems => cartItems.id !==  cartItemToRemove.id)
    }

    return cartItems.map(
        cartItems => cartItems.id === cartItemToRemove.id ?
        {...cartItems , quantity:cartItems.quantity - 1 }
        : cartItems

    )
}