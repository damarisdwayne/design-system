import {
  grayScale,
  primary,
  shadows,
  spacings,
  system,
} from '@damaris-ui/theme'
import styled, { css } from 'styled-components'

import { Flexbox } from '../flexbox'
import { Typography } from '../typography'
import { CheckboxProps } from '.'
import { GetCheckboxActiveStyles, GetCheckboxHoverStyles } from './utils'

export const StyledSquareCheckbox = styled(Flexbox)`
  width: ${spacings.s4};
  height: ${spacings.s4};
  background-color: ${grayScale[50]};
  padding: ${spacings.s0};
  border: ${spacings.s0} solid ${grayScale[600]};
  border-radius: ${spacings.s0};
  svg {
    visibility: hidden;
  }
`

export const StyledLabelCheckbox = styled(Typography)`
  cursor: pointer;
`

export const StyledCheckboxWrapper = styled(Flexbox)`
  gap: ${spacings.s3};
`

export const StyledMessageStatus = styled(Typography)`
  color: ${grayScale[600]};
  line-height: ${spacings.s5};
  font-weight: 500;
`

export const StyledInputCheckbox = styled.input`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  height: 0;
  background-color: transparent;
  margin: -1px;
  padding: 0;
  border: 0;
  outline: 0;
`

export const StyledMasterCheckboxWrapper = styled(Flexbox)`
  ${(props: Partial<CheckboxProps>) => {
    return css`
      width: max-content;
      gap: ${spacings.s3};
      cursor: pointer;
      transition: color 0.3s;
      & * {
        transition: all 0.3s;
      }

      ${StyledCheckboxWrapper} {
        &:hover {
          ${GetCheckboxHoverStyles(props)}
        }
      }

      &:focus-visible {
        box-shadow: ${shadows.containedFocus(primary.dark, primary.dark)};
        border-radius: ${spacings.s1};

        ${GetCheckboxHoverStyles(props)}
      }

      ${GetCheckboxActiveStyles(props)}
    `
  }}
`

export const StyledDisabledCheckboxWrapper = styled(
  StyledMasterCheckboxWrapper,
)<Partial<CheckboxProps>>`
  ${({ isSelected = false }) => {
    const disabledStyles = css`
      ${StyledSquareCheckbox} {
        background-color: ${isSelected ? grayScale[100] : grayScale[50]};
        border-color: ${isSelected ? grayScale[100] : grayScale[400]};

        svg {
          visibility: ${isSelected ? 'visible' : 'hidden'};
        }
      }

      ${StyledMessageStatus} {
        display: none;
      }
    `
    return css`
      ${disabledStyles}
      &:hover {
        ${disabledStyles}
        cursor: not-allowed;
      }
    `
  }}
`

export const StyledErrorCheckboxWrapper = styled(StyledMasterCheckboxWrapper)`
  ${() => {
    const disabledStyles = css`
      ${StyledSquareCheckbox} {
        border-color: ${system.error};
      }

      ${StyledMessageStatus} {
        color: ${system.error};
      }
    `
    return css`
      ${disabledStyles}
      &:hover {
        ${disabledStyles}
      }
    `
  }}
`
