import { ComponentProps, forwardRef } from 'react'
import {
  StyledTextField,
  Prefix,
  StyledTextFieldContainer,
  StyledTextFieldWrapper,
} from './styles'
import { Typography } from '../typography'
import { Divider } from '../divider'
import { Flexbox } from '../flexbox'

type HelperText = {
  label: string
  messageType: 'error' | 'success' | 'warning'
}

export interface TextFieldProps extends ComponentProps<typeof StyledTextField> {
  prefix?: string
  noLabel?: boolean
  label: string
  isRequired: boolean
  helperText: HelperText
}

export const TextField = forwardRef(
  ({
    prefix,
    label,
    isRequired = false,
    helperText,
    ...props
  }: TextFieldProps) => {
    return (
      <StyledTextFieldWrapper alignItems="flex-start">
        {label ? (
          <Flexbox flexDirection="row">
            <Divider width="17px" noBorder />
            <Typography
              as="label"
              variant="body"
              size="small"
              weight="light"
              gutterBottom="8px"
              colorScheme={{
                type: 'text',
                color: 'label',
              }}
              data-testid="text-field-label"
              isRequired={isRequired}
            >
              {label}
            </Typography>
          </Flexbox>
        ) : null}
        <StyledTextFieldContainer {...{ helperText }}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <StyledTextField {...props} />
        </StyledTextFieldContainer>
        {helperText && (
          <Typography
            variant="body"
            size="small"
            as="small"
            weight="medium"
            gutterLeft="19px"
            gutterTop="8px"
            colorScheme={{
              type: 'system',
              color: 'error',
            }}
          >
            {helperText.label}
          </Typography>
        )}
      </StyledTextFieldWrapper>
    )
  },
)

TextField.displayName = 'TextField'

export default TextField
