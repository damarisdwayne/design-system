import { css } from 'styled-components'

export const SetPosition = (position: string) => {
  switch (position) {
    case 'bottom-left':
      return css`
        bottom: 5%;
        left: 5%;
      `
    case 'bottom-right':
      return css`
        bottom: 5%;
        right: 5%;
      `
    case 'top-left':
      return css`
        top: 5%;
        left: 5%;
      `
    case 'top-right':
      return css`
        top: 5%;
        right: 5%;
      `

    default:
      return css`
        position: initial;
      `
  }
}

export const setSVGStyles = (
  color?: string,
  width?: string,
  height?: string,
) => {
  return css`
    & svg {
      ${width && `width: ${width};`}
      ${height && `height: ${height};`}
    }
    ${color
      ? css`
          & svg path[fill*='#'],
          & svg rect[fill*='#'] {
            fill: ${color};
          }
          & svg path[stroke*='#'],
          & svg rect[stroke*='#'] {
            stroke: ${color};
          }
        `
      : null}
  `
}

export const getButtonWidth = (isFullWidth: boolean, isSmall: boolean) => {
  if (isSmall) {
    return '36px'
  }

  if (isFullWidth) {
    return '100%'
  }

  return '53px'
}

export const getButtonHeight = (isSmall: boolean) => {
  return isSmall ? '36px' : '53px'
}
