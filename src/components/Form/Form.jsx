import React from 'react';
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import cl from './Form.module.css'

const Form = ({setProduct, createNewProduct, setVisible, product}) => {
    return (
        <form className={cl.form}>
            <Input value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} type="text" placeholder="Name" />
            <Input value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} type="text" placeholder="Description" />
            <Input value={product.count} onChange={(e) => setProduct({ ...product, count: e.target.value })} type="text" placeholder="Count" />
            <div>
                <Button onClick={(e) => createNewProduct(e)}>Add</Button>
                <Button onClick={(e) => setVisible({ creatingModal: false }, e)}>Cancel</Button>
            </div>
        </form>
    );
};

export default Form;