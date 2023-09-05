import {
  borders,
  theme,
  fonts,
  grayScale,
  paddings,
  palette,
  primary,
  shadows,
  grid,
} from '@damaris-ui/theme'
import styled, { css } from 'styled-components'
import { setSVGStyles, getButtonWidth, getButtonHeight } from './utils'
import { ButtonProps } from './button'

export const StyledMasterButton = styled.button<ButtonProps>`
  ${({
    fullWidth = false,
    iconButton = false,
    variant = 'contained',
    endAdornment,
    startAdornment,
    centered = false,
    navigationProps,
    isSmall = false,
  }: Partial<ButtonProps>) => {
    const notTextButton = variant !== 'text'

    return css`
      text-transform: uppercase;
      font-weight: ${fonts.button.normal.fontWeight};
      font-size: ${fonts.button.normal.fontSize};
      font-family: 'Inter', sans-serif;
      display: flex;
      flex-direction: ${startAdornment ? 'row-reverse' : 'row'};
      justify-content: ${
        (endAdornment || startAdornment) && !centered
          ? 'space-between'
          : 'center'
      };
      gap: ${paddings.icon};
      align-items: center;
      transition: all 0.2s ease-in-out;
      width: ${getButtonWidth(iconButton, fullWidth, isSmall)};
      height: ${getButtonHeight(iconButton, isSmall)};
      min-height: ${isSmall ? '36px' : variant === 'text' ? '20px' : '53px'};
      border-radius: ${
        iconButton ? '100%' : !notTextButton ? 0 : borders.radius.button
      };
      padding: ${iconButton ? 0 : notTextButton ? paddings.buttons.desktop : 0};

      &:active {
        transform: scale(0.98);
        border:${navigationProps ? `2px solid ${primary.dark}` : 'none'};
      @media screen and (max-width: ${grid.vpBreakpoints.VPS}px) {
        padding: ${
          iconButton ? 0 : notTextButton ? paddings.buttons.mobile : 0
        };
      }
      
      @media print {
        display: none;
      }
    `
  }}
`

export const StyledVariantButton = styled(StyledMasterButton)<ButtonProps>`
  ${({ color = 'primary', variant = 'contained' }: Partial<ButtonProps>) => {
    const buttonProps = palette.buttons[color]
    const colorPalette = buttonProps[variant]

    const focusColor = colorPalette.focus.color
    const focusBackgroundColor = colorPalette.focus.background

    return css`
      background-color: ${colorPalette.default.background};
      color: ${colorPalette.default.color};
      border: 2px solid ${colorPalette.default.border};
      &:hover {
        background-color: ${colorPalette.hover.background};
        color: ${colorPalette.hover.color};
        border: 2px solid ${colorPalette.hover.border};
        ${setSVGStyles(colorPalette.hover.color)};
      }
      &:disabled {
        background-color: ${colorPalette.hover.background};
        color: ${colorPalette.hover.color};
        border: 2px solid ${colorPalette.hover.border};
      }
      &:focus-visible {
        ${variant === 'text' && `border-radius: 8px; padding: 2px 4px;`}
        border: ${variant === 'outlined'
          ? 'none'
          : `3px solid ${colorPalette.default.color}`};
        box-shadow: ${variant === 'outlined'
          ? theme.shadows.outlinedFocus(
              focusColor,
              focusBackgroundColor,
              focusColor,
              focusColor,
            )
          : theme.shadows.containedFocus(
              colorPalette.default.background,
              colorPalette.default.border,
            )};
      }
      ${setSVGStyles(colorPalette.default.color)};
    `
  }}
`

export const StyledDisabledButton = styled(StyledMasterButton)<ButtonProps>`
  ${({
    color = 'primary',
    variant = 'contained',
    navigationProps,
    isSticky,
  }: Partial<ButtonProps>) => {
    const buttonProps = palette.buttons[color].disabled
    const colorPalette = buttonProps[variant]
    return css`
      position: ${navigationProps?.position ? 'absolute' : 'relative'};
      pointer-events: none;
      user-select: none;
      background-color: ${isSticky ? grayScale[200] : colorPalette.background};
      color: ${isSticky ? grayScale[400] : colorPalette.color};
      border: 2px solid ${colorPalette.border};
      box-shadow: ${navigationProps?.position ? shadows.hover : 'none'};
      &:active,
      &:focus,
      &:hover {
        outline: none;
        box-shadow: none;
      }
      ${setSVGStyles(isSticky ? grayScale[400] : colorPalette.color)};
    `
  }}
`
