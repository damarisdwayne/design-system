import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react'

import { StyledVariantButton } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'contained' | 'outlined' | 'text'
  color: string
  bgColor: string
  hoverColor: string
  centered?: boolean
  'data-testid'?: string
  onClick?: (params?: any) => void
  fullWidth?: boolean
  isSmall?: boolean
  isLoading?: boolean
}

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const renderChildren = () => {
      const { children, isLoading = false } = props
      if (isLoading) {
        return <>{isLoading ? <span>loading</span> : children}</>
      }
      return children
    }

    return (
      <StyledVariantButton {...{ ref, ...props }}>
        {renderChildren()}
      </StyledVariantButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
