import { Colors } from './types'

export const colors: Colors = {
  white: '#FFF',
  black: '#000',

  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',

  primary100: '#50e590',
  primary200: '#35c8a4',
  primary300: '#23a27f',

  blue100: '#6baabf',
  blue200: '#36a3cc',
  blue300: '#3498db',

  secondary100: '#F8D2DB',
  secondary200: '#DD1F4A',
  secondary300: '#B3193C',
}

export const primary = {
  darker: '#242F38',
  dark: '#10446a',
  main: '#145685',
  light: '#1B8DB3',
  lighter: '#75B8CF',
  lightest: '#CFDAE1',
}

export const secondary = {
  dark: '#B3193C',
  main: '#DD1F4A',
  light: '#F8D2DB',
}

export const grayScale = {
  50: '#FFFFFF',
  100: '#F1F2F3',
  200: '#EDEFF0',
  300: '#E1E3E5',
  400: '#D0D5D9',
  450: '#969899',
  500: '#ADB3B8',
  600: '#8B9399',
  700: '#707980',
  800: '#576066',
  900: '#1F2326',
}

export const system = {
  error: '#DD1F4A',
  warning: '#E67417',
  success: '#138057',
  badge: '#C4D787',
  neutral: grayScale[600],
}

export const text = {
  primary: primary.darker,
  secondary: primary.main,
  tertiary: secondary.main,
  disabled: grayScale[400],
  placeholder: grayScale[600],
  label: primary.darker,
  inverted: '#FFFFFF',
}

export const buttons = {
  primary: {
    contained: {
      default: {
        color: colors.white,
        background: primary.main,
        border: primary.main,
      },
      hover: {
        color: grayScale[50],
        background: primary.dark,
        border: primary.dark,
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    outlined: {
      default: {
        color: primary.main,
        background: 'transparent',
        border: primary.main,
      },
      hover: {
        color: primary.dark,
        background: 'transparent',
        border: primary.dark,
      },
      focus: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
    },
    text: {
      default: {
        color: primary.main,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        color: primary.dark,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: primary.dark,
        background: grayScale[50],
        border: primary.main,
      },
    },
    disabled: {
      contained: {
        color: grayScale[400],
        background: grayScale[200],
        border: grayScale[200],
      },
      outlined: {
        color: grayScale[400],
        background: 'transparent',
        border: grayScale[400],
      },
      text: {
        color: grayScale[400],
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
  secondary: {
    contained: {
      default: {
        color: grayScale[50],
        background: secondary.main,
        border: secondary.main,
      },
      hover: {
        color: grayScale[50],
        background: secondary.dark,
        border: secondary.dark,
      },
      focus: {
        color: primary.dark,
        background: grayScale[50],
        border: primary.main,
      },
    },
    outlined: {
      default: {
        color: secondary.main,
        background: 'transparent',
        border: secondary.main,
      },
      hover: {
        color: secondary.dark,
        background: 'transparent',
        border: secondary.dark,
      },
      focus: {
        color: secondary.main,
        background: grayScale[50],
        border: secondary.main,
      },
    },
    text: {
      default: {
        color: secondary.main,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        color: secondary.dark,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: primary.dark,
        background: grayScale[50],
        border: primary.main,
      },
    },
    disabled: {
      contained: {
        color: grayScale[500],
        background: grayScale[400],
        border: grayScale[400],
      },
      outlined: {
        color: grayScale[500],
        background: 'transparent',
        border: grayScale[500],
      },
      text: {
        color: grayScale[500],
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
}

export const palette = {
  primary,
  secondary,
  grayScale,
  system,
  buttons,
  text,
}

export default palette
