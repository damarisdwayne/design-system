import { pxToRem } from '@damaris-ui/utils'
import spacings from './spacings'
import { Borders } from './types'

export const size: Borders['size'] = {
  default: '1px solid',
}

export const radius: Borders['radius'] = {
  alert: pxToRem(8.8),
  button: pxToRem(50),
  cardButton: spacings.s2,
  card: spacings.s2,
  input: spacings.s3,
  dropdown: pxToRem(13.008),
  tag: spacings.s6,
  round: '50%',
  full: '100%',
}

const borders: Borders = {
  size,
  radius,
}

export default borders
