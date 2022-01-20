import { ButtonHTMLAttributes } from 'react'

import { StylizedButton } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({isOutlined = false, ...props}: ButtonProps) {

    return (
        <StylizedButton 
            isOutlined={isOutlined}
            // className={`button ${isOutlined ? 'outlined' : ''}`} 
            {...props} 
        />
    )

}

