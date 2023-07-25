import React from 'react';
import Product from '../Product/Product';
import {AddToCart} from '../Redux/actions/CartAction';
import {connect} from 'react-redux';

const Shop = (props) => {
    const {products, AddToCart} = props

    return (
        <div>
            {
            products.map(data => <Product products={data} AddToCart={AddToCart}></Product>)
            }
        </div>
    );
};
const mapStateToProps = state =>{
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    AddToCart: AddToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);