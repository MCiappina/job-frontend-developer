import React, { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from './style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}

export default Button