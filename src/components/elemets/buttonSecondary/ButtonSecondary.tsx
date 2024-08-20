import React from 'react'

type Props = {
    children?: React.ReactNode
    onClick?: any
    className?: string
    type?: string
    disabled?: boolean

}

const ButtonSecondary = ({ children, onClick, className, disabled, }: Props) => {
    return (
        <button disabled={disabled} className={` px-4 py-2 text-white border-2 border-primary ${className}`} onClick={onClick}  >
            {children}
        </button >
    )
}

export default ButtonSecondary