import { ComponentProps, forwardRef, useState } from 'react'
import {
  StyledTextField,
  Prefix,
  StyledTextFieldContainer,
  StyledTextFieldWrapper,
  StyledTextFieldIcon,
} from './styles'
import { Typography } from '../typography'
import { Divider } from '../divider'
import { Check, Eye, EyeClosed } from 'phosphor-react'
import { pxToRem } from '@damaris-ui/utils'
import { palette } from '@damaris-ui/theme'
import { Box } from '../box'

type HelperText = {
  label: string
  messageType: 'error' | 'success' | 'warning'
}

export interface TextFieldProps extends ComponentProps<typeof StyledTextField> {
  prefix?: string
  isValid: boolean
  label: string
  isRequired: boolean
  helperText: HelperText
  customIcon: React.ReactNode
  iconClickAction: (() => void) | undefined
}

export const TextField = forwardRef(
  ({
    prefix,
    label,
    isValid,
    isRequired = false,
    helperText,
    customIcon,
    iconClickAction,
    type,
    ...props
  }: TextFieldProps) => {
    const [showPassword, setShowPassword] = useState(false)
    const inputType = type || 'text'
    const hasIcon = customIcon || isValid || type === 'password'

    const handleShowPassword = (): void => {
      if (setShowPassword) setShowPassword(!showPassword)
    }

    const handleIconClick = (e: { preventDefault: () => void }): void => {
      e.preventDefault()
      if (inputType === 'password') {
        handleShowPassword()
      } else {
        if (iconClickAction) iconClickAction()
      }
    }

    const handleType = (type: string): string => {
      if (type === 'password' && showPassword) {
        return 'text'
      }

      if (type === 'password' && !showPassword) {
        return 'password'
      }

      return type
    }

    return (
      <StyledTextFieldWrapper alignItems="flex-start">
        {label ? (
          <Box flexDirection="row">
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
          </Box>
        ) : null}
        <StyledTextFieldContainer {...{ helperText }}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <StyledTextField {...props} type={handleType(inputType)} />
          {hasIcon && (
            <StyledTextFieldIcon onClick={handleIconClick}>
              {inputType === 'password' && (
                <>
                  {showPassword ? (
                    <Eye
                      size={pxToRem(16)}
                      color={palette.primary.darker}
                      weight="bold"
                    />
                  ) : (
                    <EyeClosed
                      size={pxToRem(16)}
                      color={palette.primary.darker}
                      weight="bold"
                    />
                  )}
                </>
              )}
              {customIcon && customIcon}
              {!customIcon && inputType !== 'password' && !!isValid && (
                <Check
                  size={pxToRem(16)}
                  color={palette.primary.darker}
                  weight="bold"
                />
              )}
            </StyledTextFieldIcon>
          )}
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
