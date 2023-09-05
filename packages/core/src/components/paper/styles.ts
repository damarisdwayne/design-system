import {
  borders,
  fonts,
  grayScale,
  paddings,
  palette,
  spacings,
  theme,
} from '@damaris-ui/theme'
import { pxToRem } from '@damaris-ui/utils'
import styled, { css, keyframes } from 'styled-components'
import { ButtonProps } from '../button/button'
import { Flexbox, FlexboxProps } from '../flexbox'
import { PaperProps } from './types'

export type CustomPaperProps = PaperProps &
  ButtonProps & {
    isSmall?: boolean
  }

export const fadeInAnimation = keyframes`
  0% {  
    opacity: 0;
    transform: translate3d(0, -10%, 0); 
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`

export const StyledDefaultPaper = styled(Flexbox)<PaperProps>`
  ${({
    noRound,
    noShadow,
    noBg,
    isBlurred,
    fadeIn,
    customStyles,
    bgColor,
    withHover,
    noPadding,
    minimal,
  }: PaperProps) => {
    return css`
      padding-inline: ${
        noPadding ? '0 !important' : paddings.card.desktop.inline
      };
      padding-block: ${
        noPadding ? '0 !important' : paddings.card.desktop.block
      };
      border-radius: ${noRound || minimal ? 0 : borders.radius.card};
      box-shadow: ${
        isBlurred
          ? theme.shadows.blurred
          : noShadow || minimal
          ? 'unset'
          : theme.shadows.default(grayScale[900])
      };
      background-color: ${
        noBg || minimal ? 'transparent' : bgColor ?? palette.grayScale[50]
      };
      pointer-events: ${isBlurred ? 'none' : 'all'};
      transition: all 0.3s ease-in-out;
      animation: ${
        fadeIn
          ? css`
              ${fadeInAnimation} 0.5s linear
            `
          : 'none'
      };
      filter: ${isBlurred ? 'blur(5px)' : 'none'};
      ${
        withHover &&
        css`
          cursor: pointer;
          &:hover {
            box-shadow: ${theme.shadows.hover};
          }
        `
      }
      
        }
      @media (max-width: ${theme.gridSystem.vpBreakpoints.VPL - 1}px) {
        padding-inline: ${
          noPadding ? '0 !important' : paddings.card.mobile.inline
        };
        padding-block: ${
          noPadding ? '0 !important' : paddings.card.mobile.block
        };
      }
    `
  }}
`

type TitleProps = Partial<FlexboxProps & PaperProps>
export const StyledPaperTitleWrapper = styled(Flexbox)<TitleProps>`
  border-bottom: ${`1px solid ${palette.grayScale[100]}`};
  padding: ${({ noPadding }): string | undefined =>
    noPadding ? '0' : paddings.cardTitle};
`

export const StyledPaperTitle = styled.h4`
  font-weight: ${fonts.heading.h1.fontWeight};
  font-size: ${fonts.heading.h1.fontSize};
  line-height: ${fonts.heading.h1.lineHeight};
  text-align: left;
`

export const StyledPaperActions = styled(Flexbox)`
  padding: ${spacings.s9};
  gap: ${spacings.s7};
`

export const StyledPaperFooterAlert = styled.div<{
  alertProps: Partial<PaperProps>
}>`
  ${({ alertProps }) => {
    const variant = alertProps?.alertProps?.variant || 'success'
    return css`
      background-color: ${palette.system[variant]};
      font-size: ${fonts.body.small.fontSize};
      color: ${['error', 'success'].includes(variant)
        ? palette.grayScale[50]
        : palette.grayScale[900]};
      width: 100%;
      padding: ${`${pxToRem(10)} ${spacings.s5}`};
      font-size: ${spacings.s3};
      text-align: left;
      border-radius: ${`0 0 ${borders.radius.card} ${borders.radius.card}`};
    `
  }}
`

export const StyledPaperEndAdornment = styled(Flexbox)`
  padding: ${`${pxToRem(10)} ${spacings.s5}`};
`
