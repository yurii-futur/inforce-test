import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../../components/Product/Product';
import cl from './Detail.module.css';

const Detail = ({products}) => {
    const params = useParams();
    const findedProductByParams = products.filter(product => +product.id === +params.id)

    return (
        <>
            <Link className={cl.detail__link} to="/offerwall">
                Back to offerwall
            </Link>
            <div className={cl.detail}>
                {findedProductByParams.map( p => {
                    return <Product solo={true} key={p.id} product={p} />
                })}
            </div>
        </>
        
        
    );
};

export default Detail;