import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    handleChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ label, handleChange, ...props }) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        if (handleChange) {
            handleChange(value)
        }
    }

    return (
        <div>
            <label>{label}</label>
            <input {...props} onChange={onChange} />
        </div>
    )
}

export default Input