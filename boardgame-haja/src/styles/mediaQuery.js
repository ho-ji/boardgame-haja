export const BREAKPOINT_TABLET = 'tablet'
export const BREAKPOINT_MOBILE = 'mobile'

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
}
export const mediaQueris = (breakpoint) => {
  return `@media screen and (max-width: ${breakpoints[breakpoint]}px)`
}
