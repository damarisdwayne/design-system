import { primary, system } from '@damaris-ui/theme'
import { css } from 'styled-components'
import { StyledSquareCheckbox } from './styles'
import { CheckboxProps } from './types'

export const GetCheckboxHoverStyles = ({
  error,
  disabled,
  isSelected,
}: Partial<CheckboxProps>) => {
  if (!error && !disabled) {
    return css`
      ${StyledSquareCheckbox} {
        border-color: ${primary.dark};
        ${isSelected &&
        css`
          background-color: ${primary.dark};
        `};
      }
    `
  }
}

export const GetCheckboxActiveStyles = ({
  isSelected,
  error,
}: Partial<CheckboxProps>) => {
  if (isSelected) {
    return css`
      ${StyledSquareCheckbox} {
        border-color: ${primary.light};
        background-color: ${error ? system.error : primary.light};
        svg {
          visibility: visible;

          polyline[id='Checkmark'] {
            stroke-width: 4;
          }
        }
      }
    `
  }
}
