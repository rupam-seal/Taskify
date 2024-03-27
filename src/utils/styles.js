/**
 * Media query breakpoints
 */
export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

/**
 * Concatenate classNames together
 */
export function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}
