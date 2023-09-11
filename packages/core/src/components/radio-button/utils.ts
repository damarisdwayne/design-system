import { primary } from '@damaris-ui/theme'
import { css } from 'styled-components'
import {
  StyledCircleRadioButton,
  StyledFilledContentRadionButton,
} from './styles'
import { RadioButtonProps } from './types'

export const GetLabelHoverStyles = ({
  error,
  disabled,
  isSelected,
}: Partial<RadioButtonProps>) => {
  if (!error && !disabled) {
    return css`
      ${StyledCircleRadioButton} {
        border-color: ${primary.dark};
      }

      ${isSelected &&
      css`
        ${StyledFilledContentRadionButton} {
          background-color: ${primary.dark};
        }
      `}
    `
  }
}

export const GetRadioButtonActiveStyles = ({
  isSelected,
}: Partial<RadioButtonProps>) => {
  if (isSelected) {
    return css`
      ${StyledCircleRadioButton} {
        border-color: ${primary.light};
      }

      ${StyledFilledContentRadionButton} {
        background-color: ${primary.light};
      }
    `
  }
}
