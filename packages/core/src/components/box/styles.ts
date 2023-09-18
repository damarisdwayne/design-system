import {
  borders,
  grayScale,
  paddings,
  palette,
  defaultTheme as theme,
} from '@damaris-ui/theme'
import styled, { css, keyframes } from 'styled-components'
import { BoxProps } from './index'
import { flexPosition, getHeight, getWidth } from '@damaris-ui/utils'

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

export const StyledDefaultBox = styled.div<BoxProps>`
  ${({
    alignItems,
    justifyContent,
    flexDirection,
    alignSelf,
    justifySelf,
    withRound,
    withShadow,
    withBg,
    isBlurred,
    fadeIn,
    customStyles,
    bgColor,
    withHover,
    withPadding,
    minimal,
    width,
    fullWidth,
    fullHeight,
    fullScreen,
    height,
    gap,
    withWrap,
  }: BoxProps) => {
    return css`
    ${flexPosition(
      alignItems,
      justifyContent,
      flexDirection,
      alignSelf,
      justifySelf,
    )};
      height: ${getHeight({ fullHeight, fullScreen, height })};
      width: ${getWidth({ fullWidth, fullScreen, width })};
      gap: ${gap ?? '0'};
      flex-wrap: ${withWrap ? 'wrap' : 'nowrap'};
      margin: 0;
      padding-inline: ${
        withPadding ? paddings.card.desktop.inline : '0 !important'
      };
      padding-block: ${
        withPadding ? paddings.card.desktop.block : '0 !important'
      };
      border-radius: ${withRound ? borders.radius.card : 0};
      box-shadow: ${
        isBlurred
          ? theme.shadows.blurred
          : withShadow || minimal
          ? 'unset'
          : theme.shadows.default(grayScale[900])
      };
      background-color: ${
        withBg ? bgColor ?? palette.grayScale[50] : 'transparent'
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
          withPadding ? paddings.card.mobile.inline : '0 !important'
        };
        padding-block: ${
          withPadding ? paddings.card.mobile.block : '0 !important'
        };
      }
      ${customStyles ? { ...customStyles } : {}}
    `
  }}
`
