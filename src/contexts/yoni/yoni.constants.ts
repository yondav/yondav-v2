import {
  ACTIONKIND,
  EYEBROWTYPE,
  EYETYPE,
  GLASSESTYPE,
  HAIRTYPE,
  HATTYPE,
  MOUTHTYPE,
  SHIRTTYPE,
} from './yoni.types';

export const portraitDefaultColors = {
  white: '#ffffff',
  black: '#000000',
  neutral: {
    100: '#fafafa',
    200: '#E1E1E0',
    300: '#383637',
    400: '#343434',
    500: '#29201b',
    600: '#191918',
  },
  glasses: {
    cyclopse: { 100: '#e00007' },
    elton: { 100: '#fc54dc' },
    shades: { 100: '#c0bca4', 200: '#6e3732', 300: '#261c1e' },
    shore: { 100: '#e0a707' },
  },
  hat: {
    baseball: { 100: '#928b75', 200: '#717b8c' },
    beanie: { 100: '#b19bcf' },
    cowboy: { 100: '#aa5033' },
  },
  mouth: { 100: '#794139', 200: '#dbc7ba' },
  shirt: {
    button: { 100: '#103351' },
    hoodie: { 100: '#50e1a5' },
    long: { 100: '#bf6776' },
    tank: { 100: '#2f7689' },
    vintage: { 100: '#2b221f', 200: '#cbc5ad', 300: '#b26a3e' },
  },
  skin: { 100: '#bd8867' },
} as const;

const {
  black,
  neutral,
  glasses: { cyclopse, elton, shades, shore },
  hat: { baseball, beanie, cowboy },
  mouth,
  shirt: { button, hoodie, long, tank, vintage },
  skin,
} = portraitDefaultColors;

const nullFills = { primary: null, secondary: null, tertiary: null };

export const portraitDefaults = {
  [ACTIONKIND.EYERBROWS]: [
    {
      type: EYEBROWTYPE.BUSHY,
      fill: { ...nullFills, primary: neutral[600] },
    },
    {
      type: EYEBROWTYPE.SURPRISED,
      fill: { ...nullFills, primary: neutral[600] },
    },
    {
      type: EYEBROWTYPE.SUSPICIOUS,
      fill: { ...nullFills, primary: neutral[600] },
    },
    {
      type: EYEBROWTYPE.UNI,
      fill: { ...nullFills, primary: neutral[600] },
    },
  ],
  [ACTIONKIND.EYES]: [
    {
      type: EYETYPE.CLOSED,
      fill: { ...nullFills, primary: neutral[500], secondary: neutral[100] },
    },
    {
      type: EYETYPE.OPEN,
      fill: { ...nullFills, primary: neutral[500], secondary: neutral[100] },
    },
    {
      type: EYETYPE.WINKLEFT,
      fill: { ...nullFills, primary: neutral[500], secondary: neutral[100] },
    },
    {
      type: EYETYPE.WINKRIGHT,
      fill: { ...nullFills, primary: neutral[500], secondary: neutral[100] },
    },
  ],
  [ACTIONKIND.FACIALHAIR]: [
    {
      type: HAIRTYPE.BALDING,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.BUSHY,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.FLAT,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.LONG,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.MOHAWK,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.SHORT,
      fill: { ...nullFills, primary: neutral[400] },
    },
  ],
  [ACTIONKIND.GLASSES]: [
    {
      type: GLASSESTYPE.CYCLOPSE,
      fill: { ...nullFills, primary: cyclopse[100], secondary: black },
    },
    {
      type: GLASSESTYPE.ELTON,
      fill: { ...nullFills, primary: elton[100] },
    },
    {
      type: GLASSESTYPE.SHADES,
      fill: {
        ...nullFills,
        primary: shades[100],
        secondary: shades[200],
        tertiary: shades[300],
      },
    },
    {
      type: GLASSESTYPE.SHORE,
      fill: { ...nullFills, primary: shore[100] },
    },
    {
      type: GLASSESTYPE.VERSACE,
      fill: {
        ...nullFills,
        primary: shades[100],
        secondary: shades[200],
        tertiary: shades[300],
      },
    },
  ],
  [ACTIONKIND.HAIR]: [
    {
      type: HAIRTYPE.BALDING,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.BUSHY,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.FLAT,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.LONG,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.MOHAWK,
      fill: { ...nullFills, primary: neutral[400] },
    },
    {
      type: HAIRTYPE.SHORT,
      fill: { ...nullFills, primary: neutral[400] },
    },
  ],
  [ACTIONKIND.HAT]: [
    {
      type: HATTYPE.BASEBALLCAP,
      fill: { ...nullFills, primary: baseball[100], secondary: baseball[200] },
    },
    {
      type: HATTYPE.BEANIE,
      fill: { ...nullFills, primary: beanie[100] },
    },
    {
      type: HATTYPE.COWBOY,
      fill: { ...nullFills, primary: cowboy[100], secondary: skin[100] },
    },
  ],
  [ACTIONKIND.MOUTH]: [
    {
      type: MOUTHTYPE.CLOSEDSMILE,
      fill: { ...nullFills, primary: mouth[100], secondary: mouth[200] },
    },
    {
      type: MOUTHTYPE.FULLSMILE,
      fill: { ...nullFills, primary: mouth[100], secondary: mouth[200] },
    },
    {
      type: MOUTHTYPE.HALFSMILE,
      fill: { ...nullFills, primary: mouth[100], secondary: mouth[200] },
    },
    {
      type: MOUTHTYPE.NOSMILE,
      fill: { ...nullFills, primary: mouth[100], secondary: mouth[200] },
    },
  ],
  [ACTIONKIND.SHIRT]: [
    {
      type: SHIRTTYPE.BUTTONUP,
      fill: { ...nullFills, primary: button[100], secondary: neutral[200] },
    },
    {
      type: SHIRTTYPE.HOODIE,
      fill: { ...nullFills, primary: hoodie[100], secondary: black },
    },
    {
      type: SHIRTTYPE.LONGSLEEVE,
      fill: { ...nullFills, primary: long[100] },
    },
    {
      type: SHIRTTYPE.TANKTOP,
      fill: { ...nullFills, primary: tank[100] },
    },
    {
      type: SHIRTTYPE.TURTLENECK,
      fill: { ...nullFills, primary: neutral[300] },
    },
    {
      type: SHIRTTYPE.VINTAGE,
      fill: { primary: vintage[100], secondary: vintage[200], tertiary: vintage[300] },
    },
  ],
  [ACTIONKIND.SKIN]: [{ type: 'skin', fill: { ...nullFills, primary: skin[100] } }],
} as const;
