import {ADD_TO_CART, REMOVE_TO_CART} from '../actions/CartAction'; 

const intialState = {
    cart : [], 
    products : [
                {
                    id: "1", 
                    name: "Asus", 
                    ram : "4gb", 
                    hdd : "1tb"
                },{
                    id: "2", 
                    name: "Acer", 
                    ram : "8gb", 
                    hdd : "2tb"
                },{
                    id: "3", 
                    name: "Dell", 
                    ram : "4gb", 
                    hdd : "500gb"
                },{
                    id: "4", 
                    name: "Lenovo", 
                    ram : "8gb", 
                    hdd : "2tb"
                }
            ]
}


const CartReducer = (state = intialState, action) => {

    switch (action.type){
        case ADD_TO_CART: 
            const newItem = {
                productId : action.id,
                name : action.name,
                cartId: state.cart.length + 1
            }
            const item = [...state.cart, newItem]; 
            return {...state, cart:item}; 
        case REMOVE_TO_CART: 
           /// const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !==  action.cartId);
            return {...state, cart: remainingCart}
        default: 
          return state; 
    }
}

export default CartReducer; 