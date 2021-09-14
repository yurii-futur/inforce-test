import React, {useState} from 'react';
import cl from './Modal.module.css'
import Form from '../Form/Form';

const Modal = ({visible, setVisible, addNewProduct }) => {
    const [product, setProduct] = useState({name: '', description: '', count: ''})
    let rootClasses = [cl.modal]

    if(visible) {
        rootClasses.push(cl.visible)
    }

    /* function that create new product using special function from props */
    const createNewProduct = (e) => {
        e.preventDefault()
        addNewProduct(product)
        setProduct({name: '', description: '', count: ''})
    }

    return (
        <div className={[...rootClasses].join(' ')}>
            <div className={cl.modal__content}>
                <Form setProduct={setProduct} createNewProduct={createNewProduct} setVisible={setVisible} product={product}/>
            </div>
        </div>
    );
};

export default Modal;