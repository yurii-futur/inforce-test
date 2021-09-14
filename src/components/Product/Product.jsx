import React from 'react';
import { useHistory } from 'react-router-dom';
import ProductControl from '../ProductControl/ProductControl';
import ProductData from '../ProductData/ProductData';
import Button from '../UI/Button/Button';
import cl from './Product.module.css'

const Product = ({ product, solo, removeProduct }) => {
    const router = useHistory();

    return (
        <div className={cl.product}>
            <div>
                <img src={product.imageUrl} alt="" />
            </div>
            <h3>{product.name}</h3>
            <p>
                {product.description}
            </p>
            <p>Count: {product.count}</p>
            <div>
                {solo 
                    ? 
                    <ProductData product={product}/>
                    :
                    <ProductControl router={router} product={product} removeProduct={removeProduct} />
                }
            </div>

        </div>
    );
};

export default Product;