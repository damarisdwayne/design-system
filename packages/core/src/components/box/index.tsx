import { forwardRef, Ref } from 'react'
import { StyledDefaultBox } from './styles'

import { ComponentProps } from '../../types'

export interface BoxProps extends ComponentProps {
  minimal?: boolean
  noPadding?: boolean
  ref?: React.Ref<HTMLDivElement>
  flexDirection?: 'row' | 'column' | string
  bgColor?: string
  gap?: string
  noWrap?: boolean
  height?: string | number
  fullHeight?: boolean
  width?: string | number
  fullWidth?: boolean
  fullScreen?: boolean
  noRound?: boolean
  noShadow?: boolean
  noBg?: boolean
  isBlurred?: boolean
  fadeIn?: boolean
  withHover?: boolean
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | string
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | string
  justifySelf?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | string
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | string
}

export const Box = forwardRef(
  (
    { width, height, bgColor = undefined, ...rest }: BoxProps,
    ref: Ref<HTMLDivElement>,
  ): JSX.Element => {
    const { minimal = false, children } = rest

    return (
      <StyledDefaultBox
        ref={ref}
        data-testid="box-wrapper"
        noPadding={rest.noPadding}
        justifyContent={rest.justifyContent ?? 'stretch'}
        {...{ width, height, bgColor, minimal, ...rest }}
      >
        {children}
      </StyledDefaultBox>
    )
  },
)

Box.displayName = 'Box'

export default Box
