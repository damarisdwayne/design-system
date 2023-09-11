import { palette } from '@damaris-ui/theme'
import styled, { css } from 'styled-components'
import { DividerProps } from './divider'

export const StyledDivider = styled.div`
  ${({ width, height, noBorder, borderColor, customStyles }: DividerProps) => {
    return css`
      display: block;
      width: ${width ?? '100%'};
      height: ${height ?? '1px'};
      border-bottom: ${noBorder
        ? 'none'
        : `1px solid ${borderColor ?? palette.grayScale[600]}`};
      ${customStyles ? { ...customStyles } : {}}
    `
  }}
`
