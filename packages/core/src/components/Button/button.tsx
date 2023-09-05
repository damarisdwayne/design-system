import React, { ButtonHTMLAttributes, forwardRef, Ref } from 'react'

import { StyledDisabledButton, StyledVariantButton } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  centered?: boolean
  'data-testid'?: string
  onClick?: (params?: any) => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  iconButton?: boolean
  endAdornment?: React.ReactNode
  startAdornment?: React.ReactNode
  navigationProps?: {
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'auto'
  }
  isSmall?: boolean
  isSticky?: boolean
  isLoading?: boolean
}

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const renderChildren = () => {
      const {
        iconButton,
        endAdornment,
        startAdornment,
        children,
        isLoading = false,
      } = props
      if (endAdornment || startAdornment || isLoading) {
        return (
          <>
            {iconButton && isLoading ? <span>loading</span> : children}
            {isLoading && !iconButton ? (
              <span>loading</span>
            ) : (
              endAdornment || startAdornment
            )}
          </>
        )
      }
      return children
    }

    const renderButton = () => {
      const { disabled, isLoading } = props

      if (isLoading || disabled) {
        return (
          <StyledDisabledButton
            {...{ ref, ...props }}
            onClick={(e: React.MouseEvent) => e.preventDefault()}
          >
            {renderChildren()}
          </StyledDisabledButton>
        )
      }

      return (
        <StyledVariantButton {...{ ref, ...props }}>
          {renderChildren()}
        </StyledVariantButton>
      )
    }

    return renderButton()
  },
)

Button.displayName = 'Button'

export default Button
