import React from 'react';

const ProductControl = ({router, product, removeProduct}) => {
    return (
        <div>
            <button onClick={() => router.push(`/offerwall/${product.id}`)}>Go to details</button>
            <button onClick={() => removeProduct(product)}>Remove product</button>
        </div>
    );
};

export default ProductControl;