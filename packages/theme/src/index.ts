import colors from './colors'
import fonts from './fonts'
import paddings from './paddings'
import spacings from './spacings'
import shadows from './shadows'
import borders from './borders'
import gridSystem from './grid'

export * from './borders'
export * from './colors'
export * from './fonts'
export * from './grid'
export * from './paddings'
export * from './spacings'
export * from './shadows'
export * from './types'

export { default as borders } from './borders'
export { default as colors } from './colors'
export { default as fonts } from './fonts'
export { default as gridSystem } from './grid'
export { default as paddings } from './paddings'
export { default as spacings } from './spacings'
export { default as shadows } from './shadows'

export const defaultTheme = {
  borders,
  colors,
  fonts,
  paddings,
  spacings,
  shadows,
  gridSystem,
}
