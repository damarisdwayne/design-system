import { pxToRem } from '@damaris-ui/utils'
import spacings from './spacings'
import { Fonts } from './types'

export const fonts: Fonts = {
  highlight: {
    lg: {
      fontWeight: 600,
      fontSize: spacings.s9,
      lineHeight: spacings.s10,
    },
    md: {
      fontWeight: 600,
      fontSize: spacings.s8,
      lineHeight: spacings.s9,
    },
    sm: {
      fontWeight: 600,
      fontSize: pxToRem(36),
      lineHeight: pxToRem(44),
    },
  },
  heading: {
    h1: {
      fontWeight: 600,
      fontSize: spacings.s6,
      lineHeight: spacings.s7,
    },
    h2: {
      fontWeight: 600,
      fontSize: spacings.s5,
      lineHeight: pxToRem(28),
    },
    h3: {
      fontWeight: 600,
      fontSize: pxToRem(18),
      lineHeight: pxToRem(26),
    },
    h4: {
      fontWeight: 600,
      fontSize: spacings.s4,
      lineHeight: spacings.s6,
    },
    h5: {
      fontWeight: 600,
      fontSize: pxToRem(14),
      lineHeight: spacings.s5,
    },
    h6: {
      fontWeight: 600,
      fontSize: spacings.s3,
      lineHeight: pxToRem(18),
    },
  },
  body: {
    lead: {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(26),
    },
    normal: {
      fontSize: spacings.s4,
      lineHeight: spacings.s6,
    },
    small: {
      fontSize: pxToRem(14),
      lineHeight: spacings.s5,
    },
    tiny: {
      fontSize: spacings.s3,
      lineHeight: pxToRem(18),
    },
    weights: {
      light: 300,
      medium: 500,
    },
  },
  button: {
    small: {
      fontWeight: 700,
      fontSize: spacings.s3,
      lineHeight: pxToRem(18),
    },
    normal: {
      fontWeight: 700,
      fontSize: pxToRem(14),
      lineHeight: spacings.s5,
    },
    large: {
      fontWeight: 600,
      fontSize: spacings.s8,
      lineHeight: spacings.s9,
    },
  },
  defaultFontFamily:
    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');",
}

export default fonts
