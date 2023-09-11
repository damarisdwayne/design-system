export type ButtonCSSProps = {
  color: string
  background: string
  border: string
}
export type ButtonBehaviorProps = {
  default: ButtonCSSProps
  hover: ButtonCSSProps
  focus: ButtonCSSProps
}

export type ButtonVariantProps = {
  contained: ButtonBehaviorProps
  outlined: ButtonBehaviorProps
  text: ButtonBehaviorProps
  disabled: {
    contained: ButtonCSSProps
    outlined: ButtonCSSProps
    text: ButtonCSSProps
  }
}

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

export type Palette = {
  primary: {
    darker: string
    dark: string
    main: string
    light: string
    lighter: string
    lightest: string
  }
  secondary: {
    dark: string
    main: string
    light: string
  }
  grayScale: {
    50: string
    100: string
    200: string
    300: string
    400: string
    450: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  system: {
    error: string
    warning: string
    success: string
    badge: string
    neutral: string
  }
  text: {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
    placeholder: string
    label: string
    white: string
  }
  buttons: {
    primary: ButtonVariantProps
    secondary: ButtonVariantProps
  }
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

export type FontProps = {
  fontSize: string
  lineHeight: string
  fontWeight: string | number
}

export type BodyFontProps = Omit<FontProps, 'fontWeight'>

export type FontsProps = {
  highlight: {
    lg: FontProps
    md: FontProps
    sm: FontProps
  }
  heading: {
    h1: FontProps
    h2: FontProps
    h3: FontProps
    h4: FontProps
    h5: FontProps
    h6: FontProps
  }
  body: {
    lead: BodyFontProps
    normal: BodyFontProps
    small: BodyFontProps
    tiny: BodyFontProps
    weights: {
      light: string | number
      medium: string | number
    }
  }
  button: {
    small: FontProps
    normal: FontProps
    large: FontProps
  }
}

export type Fonts = {
  highlight: FontsProps['highlight']
  heading: FontsProps['heading']
  body: FontsProps['body']
  button: FontsProps['button']
  defaultFontFamily: string
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
