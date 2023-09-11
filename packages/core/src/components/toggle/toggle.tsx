import { primary, system } from '@damaris-ui/theme'
import { pxToRem } from '@damaris-ui/utils'
import React, { forwardRef, Ref } from 'react'
import { Typography } from '../typography'
import {
  StyledToggleWrapper,
  StyledToggleBox,
  StyledToggle,
  StyledToggleLabel,
} from './styles'

export interface ToggleProps {
  isActive: boolean
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  label: string
  isError: boolean
}

export const Toggle = forwardRef(
  (props: ToggleProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const { isActive, setIsActive, label, isError } = props

    return (
      <StyledToggleWrapper
        data-testid="toggle-wrapper"
        flexDirection="row"
        gap={pxToRem(16)}
      >
        <StyledToggleBox
          alignItems="center"
          justifyContent="center"
          data-testid={`toggle-content-${isActive ? 'active' : 'inactive'}`}
          {...{ ref, isActive }}
        >
          <StyledToggle type="checkbox" name="option" id="option" />
          <StyledToggleLabel
            htmlFor="option"
            onClick={() => setIsActive(!isActive)}
            data-testid={`toggle-label-${isActive ? 'active' : 'inactive'}`}
          />
        </StyledToggleBox>
        <Typography
          variant="body"
          size="small"
          as="label"
          weight="medium"
          onClick={() => setIsActive(!isActive)}
          customStyles={{ color: isError ? system.error : primary.darker }}
        >
          {label}
        </Typography>
      </StyledToggleWrapper>
    )
  },
)

Toggle.displayName = 'Toggle'
export default Toggle
