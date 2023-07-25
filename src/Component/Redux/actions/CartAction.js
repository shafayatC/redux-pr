export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART"; 

export const AddToCart = (id, name) => {
    return{type:ADD_TO_CART, id, name }
}

export const RemoveToCart = cartId => {
    return {type: REMOVE_TO_CART, cartId}
}