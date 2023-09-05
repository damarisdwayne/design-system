export type Borders = {
  size: {
    default: string
  }
  radius: {
    alert: string
    button: string
    cardButton: string
    card: string
    input: string
    dropdown: string
    tag: string
    round: string
    full: string
  }
}

export type Shadows = {
  default: (color: string) => string
  hover: string
  pressed: string
  blurred: string
  infoShadow: (firstColor: string) => string
  containedFocus: (firstColor: string, secondColor: string) => string
  outlinedFocus: (
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    fourthColor: string,
  ) => string
}

export type Breakpoints = {
  xl: number
  lg: number
  xs: number
  sm: number
  md: number
}

export interface Colors {
  white: string
  black: string

  gray100: string
  gray200: string
  gray400: string
  gray500: string
  gray600: string
  gray700: string
  gray800: string
  gray900: string

  primary100: string
  primary200: string
  primary300: string

  blue100: string
  blue200: string
  blue300: string

  secondary100: string
  secondary200: string
  secondary300: string
}

export type GridDefaults = {
  breakpoints: Breakpoints
  paddings: Breakpoints
  margins: Breakpoints
}

export type Grid = {
  paddingsGeneral: Breakpoints
  paddingsSimulator: Breakpoints
  defaultGrid: GridDefaults
  simulatorGrid: GridDefaults
  marginsGeneral: Breakpoints
}

export type Paddings = {
  dashboard: {
    desktop: {
      inline: string
      block: string
    }
    mobile: {
      inline: string
      block: string
    }
  }
  card: {
    desktop: {
      inline: string
      block: string
    }
    mobile: {
      inline: string
      block: string
    }
  }
  cardList: {
    desktop: {
      inline: string
      block: string
      gapColumn: string
      gapRow: string
    }
    mobile: {
      inline: string
      block: string
      gapColumn: string
      gapRow: string
    }
  }
  gap: {
    desktop: string
    mobile: string
  }
  gapList: {
    desktop: string
    mobile: string
  }
  buttons: {
    desktop: string
    mobile: string
  }
  dialog: string
  input: string
  icon: string
  cardTitle: string
}

// PADDINGS
export type Spacings = {
  s0: string
  s1: string
  s2: string
  s3: string
  s4: string
  s5: string
  s6: string
  s7: string
  s8: string
  s9: string
  s10: string
  s11: string
  s12: string
}
