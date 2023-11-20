import React, { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import * as S from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
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
        <S.InputWrapper>
            <label>{label}</label>
            <S.Input {...props} onChange={onChange} />
        </S.InputWrapper>
    )
}

export default Input