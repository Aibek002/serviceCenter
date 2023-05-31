import React from 'react';

const FormInput = (props) => {
    const {  onChange, id, ...inputProps } = props;

    return (

        <div>
            <input
            {...inputProps} onChange={onChange}
            />

        </div>
    )
}
export default FormInput