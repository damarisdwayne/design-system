import {
  borders,
  grayScale,
  palette,
  spacings,
  system,
} from '@damaris-ui/theme'
import { pxToRem } from '@damaris-ui/utils'
import styled from 'styled-components'
import { Flexbox } from '../flexbox'
import { TextFieldProps } from './text-field'

export const getVariantColor = (
  messageType: TextFieldProps['helperText']['messageType'],
) => {
  switch (messageType) {
    case 'error':
      return system.error
    case 'warning':
      return system.warning
    default:
      return grayScale[500]
  }
}

export const StyledTextFieldContainer = styled.div<Partial<TextFieldProps>>`
  background-color: ${palette.grayScale[100]};
  padding: ${spacings.s4} ${spacings.s6};
  border-radius: ${borders.radius.button};
  box-sizing: border-box;
  border: 1px solid
    ${({ helperText }) =>
      helperText?.messageType
        ? getVariantColor(helperText.messageType)
        : palette.grayScale[650]};
  display: flex;
  align-items: center;

  > input {
    &::placeholder {
      color: ${({ helperText }) =>
        helperText?.messageType
          ? getVariantColor(helperText.messageType)
          : palette.grayScale[650]};
    }
  }

  &:has(input:focus) {
    border-color: ${palette.grayScale[800]};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Prefix = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: ${pxToRem(16)};
  color: ${palette.grayScale[900]};
  font-weight: normal;
`

export const StyledTextField = styled.input`
  font-family: 'Inter', sans-serif;
  font-size: ${pxToRem(16)};
  color: ${palette.grayScale[900]};
  font-weight: normal;
  background: transparent;
  border: 0;
  width: 100%;
  height: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const StyledTextFieldWrapper = styled(Flexbox)`
  position: relative;
  padding: 5px;
`

export const StyledTextFieldIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
`
