import React from 'react';
import './style.css';
import {connect} from 'react-redux'; 
import { RemoveToCart } from '../Redux/actions/CartAction';

const Cart = (props) => {

    const {cart, RemoveToCart} =  props; 

    return (
        <div>
            <div className="cartWrap">
              <h1>Total Product Add :</h1>
                <div className="selectedProducts">
                    <ul>
                    {
                    cart.map(pd => <li 
                        key ={pd.cartId}
                        >{pd.name} <button 
                        onClick = {() => RemoveToCart(pd.cartId)}
                        >X</button></li>)
                }
                 </ul>
                </div>

            </div>
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    RemoveToCart: RemoveToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);