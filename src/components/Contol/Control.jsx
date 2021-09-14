import React from 'react';
import Button from '../UI/Button/Button';
import Select from '../UI/Select/Select';
import cl from './Control.module.css';

const Control = ({setVisible, onChange}) => {
    return (
        <div className={cl.control}>
            <Select onChange={onChange}/>
            <Button onClick={(e) => setVisible({creatingModal: true}, e)}>Create product</Button>
        </div>
    );
};

export default Control;