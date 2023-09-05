import { ReactNode, Ref } from 'react'
import { FlexboxProps } from '../flexbox'

export interface PaperProps extends FlexboxProps {
  minimal?: boolean
  noPadding?: boolean
  ref?: Ref<HTMLDivElement>
  alertProps?: {
    variant?: 'error' | 'warning' | 'success' | 'badge'
    message: ReactNode
    isVisible?: boolean
  }
  cardActionsProps?: {
    children?: ReactNode
    className?: string
  }
  cardTitleProps?: {
    title?: string | ReactNode
    endAdornment?: ReactNode
    children?: ReactNode
    className?: string
  }
  noRound?: boolean
  noShadow?: boolean
  noBg?: boolean
  isBlurred?: boolean
  fadeIn?: boolean
  bgColor?: string
  isDialog?: boolean
  withHover?: boolean
}
