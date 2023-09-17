import { forwardRef, Ref } from 'react'
import { palette } from '@damaris-ui/theme'
import {
  StyledMasterCheckboxWrapper,
  StyledDisabledCheckboxWrapper,
  StyledErrorCheckboxWrapper,
  StyledSquareCheckbox,
  StyledLabelCheckbox,
  StyledCheckboxWrapper,
  StyledMessageStatus,
  StyledInputCheckbox,
} from './styles'
import { Check } from 'phosphor-react'

export interface CheckboxProps {
  label: string
  id?: string
  name?: string
  disabled?: boolean
  error?: boolean
  messageStatus?: string
  isSelected: boolean
  setIsSelected: (isSelected: boolean) => void
}

export const Checkbox = forwardRef(
  (props: CheckboxProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      label,
      error,
      disabled,
      isSelected,
      setIsSelected,
      messageStatus = 'Message Status',
      ...rest
    } = props

    const defaultMessageStatus = error ? messageStatus : undefined

    const WrapperComponent = !disabled
      ? !error
        ? StyledMasterCheckboxWrapper
        : StyledErrorCheckboxWrapper
      : StyledDisabledCheckboxWrapper

    const handleClick = () => {
      !disabled && setIsSelected(!isSelected)
    }

    return (
      <WrapperComponent
        data-testid="checkbox-wrapper"
        alignItems="flex-start"
        {...{ isSelected, error, disabled, ref }}
      >
        <StyledCheckboxWrapper
          flexDirection="row"
          alignItems="center"
          onClick={() => handleClick()}
        >
          <StyledSquareCheckbox
            data-testid={`square-checkbox${isSelected ? '-true' : '-false'}`}
            alignItems="center"
            justifyContent="center"
          >
            <Check size="12px" color={palette.grayScale[50]} weight="bold" />
          </StyledSquareCheckbox>
          <StyledLabelCheckbox
            data-testid="label-checkbox"
            variant="body"
            size="small"
            weight="medium"
            colorScheme={{
              type: 'text',
              color: 'label',
            }}
          >
            <StyledInputCheckbox
              data-testid="input-checkbox"
              checked={isSelected}
              onChange={() => setIsSelected(!isSelected)}
              {...rest}
            />
            {label}
          </StyledLabelCheckbox>
        </StyledCheckboxWrapper>
        {defaultMessageStatus && (
          <StyledMessageStatus
            variant="body"
            size="small"
            data-testid="message-status"
            colorScheme={{
              type: 'text',
              color: 'label',
            }}
            weight="medium"
          >
            {defaultMessageStatus}
          </StyledMessageStatus>
        )}
      </WrapperComponent>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
