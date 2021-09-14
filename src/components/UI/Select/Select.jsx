import React from 'react';

const Select = ({onChange}) => {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value="name">Name</option>
            <option value="count">Count</option>
        </select>
    );
};

export default Select;