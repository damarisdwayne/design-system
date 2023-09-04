import styled, { css } from 'styled-components'
import { getButtonWidth, getButtonHeight, setSVGStyles } from './utils'
import { ButtonProps } from '.'
import { colors, fontWeights } from '@damaris-ui/theme'

export const StyledMasterButton = styled.button<ButtonProps>`
  ${({
    fullWidth = false,
    variant = 'contained',
    centered = false,
    isSmall = false,
  }: Partial<ButtonProps>) => {
    return css`
      text-transform: uppercase;
      font-family: 'Roboto', sans-serif;
      font-weight: ${fontWeights.bold};
      display: flex;
      flex-direction: 'row';
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      min-width: 210px;
      border-radius: 50px;
      width: ${getButtonWidth(fullWidth, isSmall)};
      height: ${getButtonHeight(isSmall)};
      min-height: ${isSmall ? '36px' : variant === 'text' ? '20px' : '53px'};

      &:active {
        transform: scale(0.98);
      
      @media print {
        display: none;
      }
    `
  }}
`

export const StyledVariantButton = styled(StyledMasterButton)<ButtonProps>`
  ${({
    variant = 'contained',
    bgColor,
    hoverColor,
    color,
  }: Partial<ButtonProps>) => {
    return css`
      position: relative;
      cursor: pointer;
      gap: 16px;
      background-color: ${variant === 'outlined' || variant === 'text'
        ? 'transparent'
        : bgColor};
      color: ${variant === 'outlined' ? bgColor : color};
      border: 2px solid ${variant === 'text' ? 'transparent' : bgColor};
      &:hover {
        background-color: ${variant === 'outlined' || variant === 'text'
          ? 'transparent'
          : hoverColor};
        color: ${color};
        border: 2px solid ${variant === 'text' ? 'transparent' : hoverColor};
        ${setSVGStyles(hoverColor)};
      }
      &:disabled {
        pointer-events: none;
        user-select: none;
        background-color: ${variant === 'outlined' || variant === 'text'
          ? 'transparent'
          : colors.gray200};
        border: 2px solid ${colors.gray200};

        &:active,
        &:focus,
        &:hover {
          outline: none;
          box-shadow: none;
        }
      }

      ${setSVGStyles(bgColor)};
    `
  }}
`
