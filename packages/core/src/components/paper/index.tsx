import { forwardRef, Ref, ReactNode } from 'react'
import {
  StyledDefaultPaper,
  StyledPaperActions,
  StyledPaperEndAdornment,
  StyledPaperFooterAlert,
  StyledPaperTitle,
  StyledPaperTitleWrapper,
} from './styles'

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

export const Paper = forwardRef(
  (
    { width, height, bgColor = undefined, ...rest }: PaperProps,
    ref: Ref<HTMLDivElement>,
  ): JSX.Element => {
    const {
      minimal = false,
      alertProps = null,
      cardActionsProps = null,
      cardTitleProps = null,
      isDialog = false,
      children,
    } = rest

    return (
      <StyledDefaultPaper
        ref={ref}
        data-testid="paper-wrapper"
        noPadding={rest.noPadding ?? Boolean(cardTitleProps)}
        justifyContent={
          isDialog && cardActionsProps
            ? 'space-between'
            : isDialog && !cardActionsProps
            ? 'flex-start'
            : rest.justifyContent ?? 'stretch'
        }
        {...{ width, height, bgColor, minimal, ...rest }}
      >
        {cardTitleProps && (
          <StyledPaperTitleWrapper
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            fullWidth
            {...rest}
          >
            {cardTitleProps.children ? (
              <>{cardTitleProps.children}</>
            ) : (
              <>
                <StyledPaperTitle {...rest}>
                  {cardTitleProps.title}
                </StyledPaperTitle>
                {cardTitleProps.endAdornment && (
                  <StyledPaperEndAdornment>
                    {cardTitleProps.endAdornment}
                  </StyledPaperEndAdornment>
                )}
              </>
            )}
          </StyledPaperTitleWrapper>
        )}
        {children}
        {cardActionsProps && (
          <StyledPaperActions
            {...rest}
            justifyContent="flex-end"
            flexDirection="row"
            width="100%"
          >
            {cardActionsProps.children}
          </StyledPaperActions>
        )}
        {alertProps && (
          <StyledPaperFooterAlert {...rest}>
            {alertProps.message}
          </StyledPaperFooterAlert>
        )}
      </StyledDefaultPaper>
    )
  },
)

Paper.displayName = 'Paper'

export default Paper
