import { Spacings } from './types'
import { pxToRem } from '@damaris-ui/utils'

const spacings: Spacings = {
  s0: pxToRem(2), // 0.125rem
  s1: pxToRem(4), // 0.25rem
  s2: pxToRem(8), // 0.5rem
  s3: pxToRem(12), // 0.75rem
  s4: pxToRem(16), // 1rem
  s5: pxToRem(20), // 1.25rem
  s6: pxToRem(24), // 1.5rem
  s7: pxToRem(32), // 2rem
  s8: pxToRem(40), // 2.5rem
  s9: pxToRem(48), // 3rem
  s10: pxToRem(56), // 3.5rem
  s11: pxToRem(64), // 4rem
  s12: pxToRem(80), // 5rem
}

export default spacings
