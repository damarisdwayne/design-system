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
import { RadioButtonProps } from '.'
import { GetLabelHoverStyles, GetRadioButtonActiveStyles } from './utils'

export const StyledCircleRadioButton = styled(Flexbox)`
  width: ${spacings.s4};
  height: ${spacings.s4};
  background-color: ${grayScale[50]};
  padding: ${spacings.s0};
  border: ${spacings.s0} solid ${grayScale[600]};
  border-radius: 50%;
  transition: color 0.3s;
  align-items: center;
  justify-content: center;
`

export const StyledFilledContentRadionButton = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${grayScale[50]};
  border-radius: 50%;
`

export const StyledLabelRadioButton = styled(Typography)`
  cursor: pointer;
  line-height: ${spacings.s5};
  color: ${grayScale[900]};
`

export const StyledRadioButtonWrapper = styled(Flexbox)`
  gap: ${spacings.s3};
`

export const StyledMessageStatus = styled(Typography)`
  color: ${grayScale[600]};
  line-height: ${spacings.s5};
  font-weight: 500;
`

export const StyledInputRadioButton = styled.input`
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

export const StyledMasterRadioButtonWrapper = styled(Flexbox)`
  ${(props: Partial<RadioButtonProps>) => {
    return css`
      width: max-content;
      gap: ${spacings.s3};
      cursor: pointer;
      transition: color 0.3s;
      padding: ${spacings.s1};
      & * {
        transition: all 0.3s;
      }

      ${StyledRadioButtonWrapper} {
        &:hover {
          ${GetLabelHoverStyles(props)}
        }
      }

      &:focus-visible,
      &:focus-within {
        border: 2px solid ${primary.dark};
        box-shadow: ${shadows.containedFocus(primary.dark, primary.dark)};
        border-radius: ${spacings.s2};

        ${GetLabelHoverStyles(props)}
      }

      ${GetRadioButtonActiveStyles(props)}
    `
  }}
`

export const StyledDisabledCheckboxWrapper = styled(
  StyledMasterRadioButtonWrapper,
)`
  ${() => {
    const disabledStyles = css`
      ${StyledCircleRadioButton} {
        background-color: ${grayScale[50]};
        border-color: ${grayScale[400]};
      }

      ${StyledMessageStatus} {
        display: none;
      }

      ${StyledFilledContentRadionButton} {
        background-color: ${grayScale[50]};
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

export const StyledErrorCheckboxWrapper = styled(
  StyledMasterRadioButtonWrapper,
)`
  ${() => {
    const disabledStyles = css`
      ${StyledCircleRadioButton} {
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
