import React, { ButtonHTMLAttributes, FC } from 'react'
import * as S from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <S.Button {...props}>{children}</S.Button>
    )
}

export default Button