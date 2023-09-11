import { forwardRef, Ref } from 'react'
import { RadioButtonProps } from './types'

import {
  StyledMasterRadioButtonWrapper,
  StyledDisabledCheckboxWrapper,
  StyledErrorCheckboxWrapper,
  StyledCircleRadioButton,
  StyledLabelRadioButton,
  StyledRadioButtonWrapper,
  StyledInputRadioButton,
  StyledMessageStatus,
  StyledFilledContentRadionButton,
} from './styles'

export const RadioButton = forwardRef(
  (props: Partial<RadioButtonProps>, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      label,
      error,
      disabled,
      isSelected,
      setIsSelected = () => false,
      messageStatus = 'Message status',
      ...rest
    } = props

    const defaultMessageStatus = error ? messageStatus : undefined

    const WrapperComponent = !disabled
      ? !error
        ? StyledMasterRadioButtonWrapper
        : StyledErrorCheckboxWrapper
      : StyledDisabledCheckboxWrapper

    return (
      <WrapperComponent
        alignItems="flex-start"
        {...{ error, disabled, isSelected, ref }}
        data-testid="radio-button-wrapper"
      >
        <StyledRadioButtonWrapper
          flexDirection="row"
          alignItems="center"
          onClick={() => setIsSelected(!isSelected)}
        >
          <StyledCircleRadioButton
            data-testid={`radio-circle${isSelected ? '-true' : '-false'}`}
          >
            <StyledFilledContentRadionButton {...props} />
          </StyledCircleRadioButton>
          <StyledLabelRadioButton
            variant="body"
            size="small"
            data-testid="radio-button-label"
          >
            <StyledInputRadioButton
              checked={isSelected}
              onChange={() => setIsSelected(!isSelected)}
              {...rest}
            />
            {label}
          </StyledLabelRadioButton>
        </StyledRadioButtonWrapper>
        {defaultMessageStatus && (
          <StyledMessageStatus
            data-testid="radio-message"
            variant="body"
            size="small"
          >
            {messageStatus}
          </StyledMessageStatus>
        )}
      </WrapperComponent>
    )
  },
)

RadioButton.displayName = 'RadioButton'

export default RadioButton
