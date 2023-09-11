import { ReactNode } from 'react'
import { CSSProp } from 'styled-components'
import { FlexboxProps } from '../flexbox'

export enum ThemeColorsPaper {
  error,
  warning,
  success,
  badge,
}

export type ColorPropsPaper = keyof typeof ThemeColorsPaper

export interface PaperProps extends FlexboxProps {
  minimal?: boolean
  noPadding?: boolean
  ref?: React.Ref<HTMLDivElement>
  alertProps?: {
    variant?: ColorPropsPaper
    message?: ReactNode
    isVisible?: boolean
  }
  cardActionsProps?: {
    children?: ReactNode
    className?: string
    customStyles?: CSSProp
  }
  cardTitleProps?: {
    title?: string | ReactNode
    endAdornment?: ReactNode
    children?: ReactNode
    className?: string
    customStyles?: CSSProp
  }
  noRound?: boolean
  noShadow?: boolean
  noBg?: boolean
  isBlurred?: boolean
  fadeIn?: boolean
  isDialog?: boolean
  withHover?: boolean
}
