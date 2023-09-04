import { Paddings } from './types'
import spacings from './spacings'

const paddings: Paddings = {
  dashboard: {
    desktop: {
      inline: spacings.s8,
      block: spacings.s8,
    },
    mobile: {
      inline: spacings.s6,
      block: spacings.s7,
    },
  },
  card: {
    desktop: {
      inline: spacings.s9,
      block: spacings.s9,
    },
    mobile: {
      inline: spacings.s6,
      block: spacings.s6,
    },
  },
  cardList: {
    desktop: {
      inline: spacings.s7,
      block: spacings.s6,
      gapColumn: spacings.s6,
      gapRow: spacings.s7,
    },
    mobile: {
      inline: spacings.s6,
      block: spacings.s6,
      gapColumn: spacings.s4,
      gapRow: spacings.s6,
    },
  },
  gap: {
    desktop: spacings.s9,
    mobile: spacings.s7,
  },
  gapList: {
    desktop: spacings.s6,
    mobile: spacings.s6,
  },
  buttons: {
    desktop: `0 ${spacings.s7}`,
    mobile: `0 ${spacings.s6}`,
  },
  dialog: spacings.s4,
  input: spacings.s9,
  icon: spacings.s4,
  cardTitle: `${spacings.s5} ${spacings.s8}`,
}

export default paddings
