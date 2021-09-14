import React from 'react';
import cl from './ProductData.module.css'

const ProductData = ({product}) => {
    return (
        <div className={cl.productData}>
            <div>Size: <span>{product.size.width}(wh)</span> x <span>{product.size.height}(hg)</span></div>
            <div>Weight: <span>{product.weight}</span></div>
            <div className={cl.productData__comment}>{product.comments.map((c, index) => {
                return <div key={index}>{c}</div>
            })}</div>
        </div>
    );
};

export default ProductData;