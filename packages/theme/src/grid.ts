export const breakpoints = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
}

export const vpBreakpoints = {
  VPS: 375,
  VPL: 1440,
}

export const paddingsSimulator = {
  xs: 16,
  sm: 20,
  md: 20,
  lg: 20,
  xl: 20,
}

export const paddingsGeneral = {
  ...paddingsSimulator,
  lg: 40,
}

export const marginsGeneral = {
  xs: 20,
  sm: 40,
  md: 80,
  lg: 80,
  xl: 80,
}

export const grid = {
  breakpoints,
  paddings: paddingsGeneral,
  margins: marginsGeneral,
  vpBreakpoints,
}

export default grid
