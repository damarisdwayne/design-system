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
    width,
    fullWidth,
    fullHeight,
    fullScreen,
    height,
    gap,
    noWrap,
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
      flex-wrap: ${noWrap ? 'nowrap' : 'wrap'};
    margin: 0;
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
      ${customStyles ? { ...customStyles } : {}}
    `
  }}
`
