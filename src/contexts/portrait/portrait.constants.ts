/**
 * This module defines a set of default colors and fills for generating portrait attributes.
 * These default colors and fills can be used as a starting point for creating different
 * portrait variations.
 */

import { constructFills } from './portrait.utils';

// Default colors used for various parts of the portrait.
export const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  neutral: {
    100: '#fafafa',
    200: '#e1e1e0',
    300: '#343434',
    400: '#29201b',
    500: '#191918',
  },
  brown: {
    100: '#dbc7ba',
    200: '#bd8867',
    300: '#b26a3e',
    400: '#aa5033',
    500: '#6e3732',
    600: '#794139',
  },
  sage: {
    100: '#cbc5ad',
    200: '#c0bca4',
    300: '#928b75',
  },
  yellow: {
    100: '#e0a707',
  },
  red: {
    100: '#e00007',
  },
  pink: {
    100: '#bf6776',
    200: '#d13fb6',
  },
  purple: {
    100: '#b19bcf',
  },
  blue: {
    100: '#717b8c',
    200: '#2f7689',
    300: '#103351',
  },
  aqua: {
    100: '#50e1a5',
  },
} as const;

// Default fills for eyebrow variations.
export const defaultEyebrowFills = {
  bushy: constructFills({ primary: defaultColors.neutral[500] }),
  surprised: constructFills({ primary: defaultColors.neutral[500] }),
  suspicious: constructFills({ primary: defaultColors.neutral[500] }),
  uni: constructFills({ primary: defaultColors.neutral[500] }),
} as const;

// Default fills for eye variations.
export const defaultEyeFills = {
  closed: constructFills({ primary: defaultColors.neutral[400] }),
  open: constructFills({ primary: defaultColors.neutral[400] }),
  winkLeft: constructFills({ primary: defaultColors.neutral[400] }),
  winkRight: constructFills({ primary: defaultColors.neutral[400] }),
} as const;

// Default fills for glasses variations.
export const defaultGlassesFills = {
  cyclops: constructFills({
    primary: defaultColors.red[100],
    secondary: defaultColors.black,
  }),
  elton: constructFills({ primary: defaultColors.pink[200] }),
  shades: constructFills({
    primary: defaultColors.sage[200],
    secondary: defaultColors.brown[500],
    tertiary: defaultColors.neutral[400],
  }),
  shore: constructFills({ primary: defaultColors.yellow[100] }),
  versace: constructFills({
    primary: defaultColors.brown[500],
    secondary: defaultColors.sage[100],
    tertiary: defaultColors.neutral[400],
  }),
} as const;

// Default fills for facial hair variations.
export const defaultFacialHairFills = {
  beard: constructFills({ primary: defaultColors.neutral[300] }),
  bigBeard: constructFills({ primary: defaultColors.neutral[300] }),
  civilWar: constructFills({ primary: defaultColors.neutral[300] }),
  goatee: constructFills({ primary: defaultColors.neutral[300] }),
  hogan: constructFills({ primary: defaultColors.neutral[300] }),
  stache: constructFills({ primary: defaultColors.neutral[300] }),
} as const;

// Default fills for hair variations.
export const defaultHairFills = {
  balding: constructFills({ primary: defaultColors.neutral[300] }),
  bushy: constructFills({ primary: defaultColors.neutral[300] }),
  flat: constructFills({ primary: defaultColors.neutral[300] }),
  long: constructFills({ primary: defaultColors.neutral[300] }),
  mohawk: constructFills({ primary: defaultColors.neutral[300] }),
  short: constructFills({ primary: defaultColors.neutral[300] }),
} as const;

// Default fills for hat variations.
export const defaultHatFills = {
  baseballCap: constructFills({
    primary: defaultColors.sage[300],
    secondary: defaultColors.blue[100],
  }),
  beanie: constructFills({ primary: defaultColors.purple[100] }),
  cowboy: constructFills({ primary: defaultColors.brown[400] }),
} as const;

// Default fills for mouth variations.
export const defaultMouthFills = {
  closedSmile: constructFills({
    primary: defaultColors.brown[600],
    secondary: defaultColors.brown[100],
  }),
  fullSmile: constructFills({
    primary: defaultColors.brown[600],
    secondary: defaultColors.brown[100],
  }),
  halfSmile: constructFills({
    primary: defaultColors.brown[600],
    secondary: defaultColors.brown[100],
  }),
  noSmile: constructFills({
    primary: defaultColors.brown[600],
    secondary: defaultColors.brown[100],
  }),
} as const;

// Default fills for shirt variations.
export const defaultShirtFills = {
  buttonUp: constructFills({
    primary: defaultColors.blue[300],
    secondary: defaultColors.neutral[200],
  }),
  hoodie: constructFills({
    primary: defaultColors.aqua[100],
    secondary: defaultColors.black,
  }),
  longSleeve: constructFills({ primary: defaultColors.pink[100] }),
  tankTop: constructFills({ primary: defaultColors.blue[200] }),
  turtleNeck: constructFills({ primary: defaultColors.neutral[500] }),
  vintage: constructFills({
    primary: defaultColors.neutral[400],
    secondary: defaultColors.sage[100],
    tertiary: defaultColors.brown[300],
  }),
} as const;

// Default fills for skin variations.
export const defaultSkinFills = {
  skin: constructFills({ primary: defaultColors.brown[200] }),
} as const;

// Default fills for all portrait attributes.
export const defaultAttributeFills = {
  eyebrows: defaultEyebrowFills,
  eyes: defaultEyeFills,
  facialHair: defaultFacialHairFills,
  glasses: defaultGlassesFills,
  hair: defaultHairFills,
  hat: defaultHatFills,
  mouth: defaultMouthFills,
  shirt: defaultShirtFills,
  skin: defaultSkinFills,
} as const;

// Default opacities for portrait accents.
export const defaultOpacities = {
  mid: 0.5,
  light: 0.3,
  lighter: 0.2,
  lightest: 0.1,
} as const;
