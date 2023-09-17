import { forwardRef, Ref } from 'react'
import { StyledFlexbox } from './styles'
import { ComponentProps } from '../../types'

export interface FlexboxProps extends ComponentProps {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | string
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | string
  justifySelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | string
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | string
  flexDirection?: 'row' | 'column' | string
  bgColor?: string
  gap?: string
  noWrap?: boolean
  height?: string | number
  fullHeight?: boolean
  width?: string | number
  fullWidth?: boolean
  fullScreen?: boolean
}

export const Flexbox = forwardRef(
  (props: FlexboxProps, ref: Ref<HTMLDivElement>) => {
    const {
      children,
      alignItems = 'center',
      justifyContent = 'flex-start',
      flexDirection = 'column',
      ...rest
    } = props
    return (
      <StyledFlexbox
        {...{ alignItems, justifyContent, flexDirection, ref, ...rest }}
      >
        {children}
      </StyledFlexbox>
    )
  },
)

Flexbox.displayName = 'Flexbox'

export default Flexbox
