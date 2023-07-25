import React from 'react';
import './style.css';

const Product = (props) => {
    const {products, AddToCart} = props; 

    return (
        <div>
            <div className="prdocutWrap">
                <div className="pr">
                <h2>{products.name}</h2>
                <p>Details: {products.ram} , {products.hdd}</p>
                <button onClick={()=>{AddToCart(products.id, products.name)}}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Product;