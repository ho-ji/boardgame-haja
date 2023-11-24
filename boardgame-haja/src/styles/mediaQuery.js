export const BREAKPOINT_TABLET = 'tablet'
export const BREAKPOINT_MOBILE = 'mobile'

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
}
export const getplaceImageSize = () => {
  if (window.innerWidth < breakpoints[BREAKPOINT_MOBILE]) return 30
  else if (window.innerWidth < breakpoints[BREAKPOINT_TABLET]) return 45
  else return 60
}
export const mediaQueris = (breakpoint) => {
  return `@media screen and (max-width: ${breakpoints[breakpoint]}px)`
}
