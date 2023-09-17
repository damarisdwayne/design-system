import { grayScale, primary, shadows, spacings } from '@damaris-ui/theme'
import { pxToRem } from '@damaris-ui/utils'
import styled, { css } from 'styled-components'
import { Flexbox } from '../flexbox'
import { ToggleProps } from '.'

export const StyledToggle = styled.input`
  visibility: hidden;
  position: absolute;
  margin-left: -9999px;
`

export const StyledToggleLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  user-select: none;
  width: ${spacings.s9};
  height: ${pxToRem(28)};
  border-radius: ${pxToRem(500)};

  &::before,
  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    bottom: 3px;
    content: '';
  }

  &::before {
    background-color: ${grayScale[600]};
    border-radius: 60px;
    transition: all 0.4s;
  }

  &::after {
    width: ${pxToRem(22)};
    height: ${pxToRem(22)};
    background-color: ${grayScale[100]};
    border-radius: ${pxToRem(500)};
    transition: all 0.4s;
  }
`

export const StyledToggleBox = styled(Flexbox)<Partial<ToggleProps>>`
  margin: 0 auto;
  width: ${spacings.s9};
  height: ${pxToRem(28)};
  border-radius: ${pxToRem(500)};
  background-color: ${grayScale[600]};
  transition: all 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${primary.light};
      ${StyledToggleLabel}::before {
        background-color: ${primary.light};
      }
      ${StyledToggleLabel}::after {
        transform: translateX(20px);
      }
    `}
`

export const StyledToggleWrapper = styled(Flexbox)`
  padding: 4px;
  transition: all 0.2s;

  &:focus-visible,
  &:focus-within {
    box-shadow: ${shadows.containedFocus(primary.dark, primary.dark)};
    border-radius: ${spacings.s1};
  }
`
