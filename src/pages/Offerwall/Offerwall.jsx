import React from 'react';
import Product from '../../components/Product/Product';
import Control from '../../components/Contol/Control';
import cl from './Offerwall.module.css'

const Offerwall = ({products, setVisible, removeProduct, onChange}) => {
    return (
        <>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}>Products</h1>
            <Control onChange={onChange} setVisible={setVisible} />
            {products.length > 0 ?
            
            <div className={cl.offerwall}>
                {products.map(product => {
                    return <Product removeProduct={removeProduct} solo={false} key={product.id} product={product} />
                })}
                
            </div>  :
            <h2>No products!</h2>
            }
        </>
        
    );
};

export default Offerwall;