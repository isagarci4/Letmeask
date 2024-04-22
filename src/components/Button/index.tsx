import { ButtonHTMLAttributes } from "react"

import { ButtonComponent } from "./styles"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props }: ButtonProps) {
    return(
        <ButtonComponent
            className={`button ${isOutlined ? 'outlined' : '' }`} 
            {...props}
        />
    )
}