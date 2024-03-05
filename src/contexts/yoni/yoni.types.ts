import type { Dispatch, SVGProps, SetStateAction } from 'react';

import type { Nullable } from '../../utils';

// types of reducer actions
export enum ACTIONKIND {
  DEFAULT = 'default',
  EMPTY = 'empty',
  EYERBROWS = 'eyebrows',
  EYES = 'eyes',
  FACIALHAIR = 'facialHair',
  GLASSES = 'glasses',
  HAIR = 'hair',
  HAT = 'hat',
  MOUTH = 'mouth',
  SKIN = 'skin',
  SHIRT = 'shirt',
}

// differentiates between action types for specific attributes and for all of the attributes at once
export type OverallActionType = ACTIONKIND.DEFAULT | ACTIONKIND.EMPTY;
export type AttributeActionType =
  | ACTIONKIND.EYES
  | ACTIONKIND.EYERBROWS
  | ACTIONKIND.FACIALHAIR
  | ACTIONKIND.GLASSES
  | ACTIONKIND.HAIR
  | ACTIONKIND.HAT
  | ACTIONKIND.MOUTH
  | ACTIONKIND.SHIRT
  | ACTIONKIND.SKIN;

// different svg elements used to assemble attributes
export enum ELEMENTTYPE {
  CIRCLE = 'circle',
  PATH = 'path',
  POLYGON = 'polygon',
}

// opacities for svg elements used to assemble attributes
export enum ELEMENTOPACITY {
  LIGHTEST = 0.1,
  LIGHTER = 0.2,
  LIGHT = 0.3,
  MID = 0.5,
}

// default color values for svg elements used to assemble attributes
export enum DEFAULTCOLOR {
  HIGHLIGHT = '#FFFFFF',
  EYES1 = '#29201B',
  EYES2 = '#FAFAFA',
  EYEBROWS = '#191918',
  GLASSESCYCLOPSE1 = '#E00007',
  GLASSESELTON1 = '#FC54DC',
  GLASSESSHADES1 = '#C0BCA4',
  GLASSESSHADES2 = '#7F3E03',
  GLASSESSHADES3 = '#261C1E',
  GLASSESSHORE1 = '#E0A707',
  GLASSESVERSACE1 = '#6E3732',
  HATBASEBALLCAP1 = '#928B75',
  HATBASEBALLCAP2 = '#717B8C',
  HATBEANIE1 = '#B19BCF',
  HATCOWBOY1 = '#AA5033',
  HATCOWBOY2 = '#BD8867',
  MOUTH1 = '#794139',
  MOUTH2 = '#DBC7BA',
  SHADOW = '#000000',
  SHIRTBUTTONUP1 = '#103351',
  SHIRTBUTTONUP2 = '#E1E1E0',
  SHIRTHOODIE1 = '#50E1A5',
  SHIRTHOODIE2 = '#000000',
  SHIRTLONGSLEEVE1 = '#BF6776',
  SHIRTTURTLENECK1 = '#383637',
  SHIRTTANKTOP1 = '#2F7689',
  SHIRTVINTAGE1 = '#2B221F',
  SHIRTVINTAGE2 = '#CBC5AD',
  SHIRTVINTAGE3 = '#B26A3E',
  SKIN = '#BD8867',
  STROKE = '#343434',
}

// specific attribute types
export enum FACIALHAIRTYPE {
  BEARD = 'beard',
  BIGBEARD = 'big-beard',
  CIVILWAR = 'civil-war',
  GOATEE = 'goatee',
  HOGAN = 'hogan',
  STACHE = 'stache',
}

export enum GLASSESTYPE {
  CYCLOPSE = 'cyclopse',
  ELTON = 'elton',
  SHADES = 'shades',
  SHORE = 'shore',
  VERSACE = 'versace',
}

export enum HATTYPE {
  BASEBALLCAP = 'baseball-cap',
  BEANIE = 'beanie',
  COWBOY = 'cowboy',
}

export enum EYETYPE {
  CLOSED = 'closed',
  OPEN = 'open',
  WINKLEFT = 'wink-left',
  WINKRIGHT = 'wink-right',
}

export enum EYEBROWTYPE {
  BUSHY = 'bushy',
  SURPRISED = 'surprised',
  SUSPICIOUS = 'suspicous',
  UNI = 'uni',
}

export enum HAIRTYPE {
  BALDING = 'balding',
  BUSHY = 'bushy',
  FLAT = 'flat',
  LONG = 'long',
  MOHAWK = 'mohawk',
  SHORT = 'short',
}

export enum MOUTHTYPE {
  CLOSEDSMILE = 'closed-smile',
  FULLSMILE = 'full-smile',
  HALFSMILE = 'half-smile',
  NOSMILE = 'no-smile',
}

export enum SHIRTTYPE {
  VINTAGE = 'vintage',
  TANKTOP = 'tank-top',
  LONGSLEEVE = 'long-sleeve',
  BUTTONUP = 'button-up',
  TURTLENECK = 'turtle-neck',
  HOODIE = 'hoodie',
}

export type AttributeType =
  | SHIRTTYPE
  | MOUTHTYPE
  | EYEBROWTYPE
  | EYETYPE
  | HAIRTYPE
  | FACIALHAIRTYPE
  | GLASSESTYPE
  | HATTYPE
  | 'skin';

export type AttributeFill = Nullable<{
  primary?: Nullable<string>;
  secondary?: Nullable<string>;
  tertiary?: Nullable<string>;
}>;

export interface YoniAttributeProps<T extends AttributeType> {
  type: T;
  fill: Nullable<{
    primary?: Nullable<string>;
    secondary?: Nullable<string>;
    tertiary?: Nullable<string>;
  }>;
}

export interface YoniAttributes {
  [ACTIONKIND.SKIN]: YoniAttributeProps<'skin'>;
  [ACTIONKIND.SHIRT]: YoniAttributeProps<SHIRTTYPE>;
  [ACTIONKIND.MOUTH]: YoniAttributeProps<MOUTHTYPE>;
  [ACTIONKIND.EYERBROWS]: YoniAttributeProps<EYEBROWTYPE>;
  [ACTIONKIND.EYES]: YoniAttributeProps<EYETYPE>;
  [ACTIONKIND.HAIR]: YoniAttributeProps<HAIRTYPE>;
  [ACTIONKIND.FACIALHAIR]: YoniAttributeProps<FACIALHAIRTYPE>;
  [ACTIONKIND.GLASSES]: YoniAttributeProps<GLASSESTYPE>;
  [ACTIONKIND.HAT]: YoniAttributeProps<HATTYPE>;
}

// shape of reducer actions
export type OverallAction = {
  type: OverallActionType;
  payload: {};
};

export type AttributeAction = {
  type: AttributeActionType;
  payload: Partial<YoniAttributes>;
};

export type YoniContextAction = OverallAction | AttributeAction;

export enum YONISTATE {
  COLOR = 'color',
  CUSTOM = 'custom',
}

// context object
export interface YoniContextState {
  state: Nullable<YONISTATE>;
  setState: Dispatch<SetStateAction<Nullable<YONISTATE>>>;
  attributeTypes: { [key in AttributeActionType]: { [k in 'keys' | 'values']: never[] } };
  dispatch: Dispatch<YoniContextAction>;
  attributes: YoniAttributes;
}

export const constructElement = ({
  type = ELEMENTTYPE.PATH,
  svgProps,
}: {
  type?: ELEMENTTYPE;
  svgProps: SVGProps<SVGElement>;
}) => ({ type, props: svgProps });
