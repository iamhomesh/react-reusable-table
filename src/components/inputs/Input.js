import React, { useState } from 'react'

export default function Input(props) {
    const [value, setValue] = useState(props.value ?? '');

    const { label, type, name, required, disabled, readonly, errorMessage, placeholder } = props;

    const randomId = Math.round(Math.random() * 100000);

    const handleOnChange = event => {
        setValue(event.target.value)
        if (props.onChangeCallback) {
            props.onChangeCallback(event)
        }
    }

    const handleOnBlur = event => {
        setValue(event.target.value)
        if (props.onBlurCallback) {
            props.onBlurCallback(event)
        }
    }
    return (
        <>
            <div className="form-group mb-3">
                {
                    label && <label htmlFor={`${name}-${randomId}`}>{label}</label>
                }
                <input
                    type={type ?? 'text'}
                    name={name}
                    id={`${name}-${randomId}`}
                    value={value}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    className="form-control"
                    placeholder={`${placeholder ? placeholder : name} ${required ? '*' : ''}`}
                    required={required}
                    disabled={disabled}
                    readOnly={readonly}
                />
            </div>
            {
                errorMessage && <div className="text-danger">{errorMessage}</div>
            }
        </>
    )
}
