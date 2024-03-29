export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                :  cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, cartItemToREmove) => {
    return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToREmove.id
    )
};

export const removeITemFromCart = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity > 1){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToRemove.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                :  cartItem
        )
    }

    return clearItemFromCart(cartItems, cartItemToRemove);
};