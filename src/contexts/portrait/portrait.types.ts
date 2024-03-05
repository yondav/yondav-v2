/**
 * This module defines type declarations related to portrait attributes and actions
 * for a React-based portrait generator.
 */

import type { Dispatch, ReactSVG, SVGProps } from 'react';
import type { Color } from 'react-color';

import type { Nullable } from '../../utils';

import type {
  defaultEyeFills,
  defaultEyebrowFills,
  defaultFacialHairFills,
  defaultGlassesFills,
  defaultHairFills,
  defaultHatFills,
  defaultMouthFills,
  defaultShirtFills,
  defaultSkinFills,
} from './portrait.constants';

// Type declaration for portrait attribute fills.
export type AttributeFills = {
  [key in 'primary' | 'secondary' | 'tertiary']?: Nullable<Color>;
};

// Type declaration for available portrait attributes.
export type Attribute = keyof Portrait;

// Type declarations for specific attribute types.
export type EyebrowType = keyof typeof defaultEyebrowFills | 'none';
export type EyeType = keyof typeof defaultEyeFills | 'none';
export type FacialHairType = keyof typeof defaultFacialHairFills | 'none';
export type GlassesType = keyof typeof defaultGlassesFills | 'none';
export type HairType = keyof typeof defaultHairFills | 'none';
export type HatType = keyof typeof defaultHatFills | 'none';
export type MouthType = keyof typeof defaultMouthFills | 'none';
export type ShirtType = keyof typeof defaultShirtFills | 'none';
export type SkinType = keyof typeof defaultSkinFills;

// Enumeration of portrait states.
export enum STATE {
  DEFAULT = 'default',
  COLOR = 'color',
  CUSTOM = 'custom',
  DATA = 'data',
}

// Enumeration of action types.
export enum ACTIONTYPE {
  COLOR = 'color',
  DEFAULT = 'default',
  EMPTY = 'empty',
  PORTRAIT = 'portrait',
  RANDOM = 'random',
  STATE = 'state',
}

// Generic action type for actions with payload.
export type Action<T extends ACTIONTYPE, P> = {
  type: T;
  payload: P;
};

// Type declaration for portrait attribute actions.
export type PortraitAction<A extends Attribute, T> = Action<
  ACTIONTYPE.PORTRAIT,
  {
    [key in A]: AttributeObject<T>;
  }
>;

// Type declarations for specific actions.
export type ColorAction = Action<ACTIONTYPE.COLOR, Color>;
export type DefaultAction = Action<ACTIONTYPE.DEFAULT, void>;
export type EmptyAction = Action<ACTIONTYPE.EMPTY, void>;
export type RandomAction = Action<ACTIONTYPE.RANDOM, void>;
export type StateAction = Action<ACTIONTYPE.STATE, STATE>;
export type EyeBrowAction = PortraitAction<'eyebrows', EyebrowType>;
export type EyeAction = PortraitAction<'eyes', EyeType>;
export type FacialHairAction = PortraitAction<'facialHair', FacialHairType>;
export type GlassesAction = PortraitAction<'glasses', GlassesType>;
export type HairAction = PortraitAction<'hair', HairType>;
export type HatAction = PortraitAction<'hat', HatType>;
export type MouthAction = PortraitAction<'mouth', MouthType>;
export type ShirtAction = PortraitAction<'shirt', ShirtType>;
export type SkinAction = PortraitAction<'skin', SkinType>;

// Type declaration for a union of all possible portrait actions.
export type PortraitActions =
  | ColorAction
  | DefaultAction
  | EmptyAction
  | StateAction
  | RandomAction
  | EyeBrowAction
  | EyeAction
  | FacialHairAction
  | GlassesAction
  | HairAction
  | HatAction
  | MouthAction
  | ShirtAction
  | SkinAction;

// Type declaration for an object representing a portrait attribute.
export type AttributeObject<T> = {
  type: T;
  fill: AttributeFills;
};

// Type declaration representinf the shape of an element object.
export type Element = {
  type: keyof ReactSVG;
  props: SVGProps<SVGElement>;
};

export type AttributeTypeAssociations = {
  eyebrows: EyebrowType;
  eyes: EyeType;
  facialHair: FacialHairType;
  glasses: GlassesType;
  hair: HairType;
  hat: HatType;
  mouth: MouthType;
  shirt: ShirtType;
  skin: SkinType;
}

export type AttributeTypeAssociation<T extends keyof AttributeTypeAssociations> = AttributeTypeAssociations[T]

// Type declaration for a function returning an array of objects representing svg elements to assemble portrait.
export type CreateElements<T> = (
  config: AttributeObject<T> & { stroke?: boolean, state: STATE, colorAction: (key: keyof AttributeFills) => void }
) => Array<{
  type: keyof ReactSVG;
  props: SVGProps<SVGElement>;
}>;

// Interface defining the structure of a portrait object.
export interface Portrait {
  eyebrows: AttributeObject<EyebrowType>;
  eyes: AttributeObject<EyeType>;
  facialHair: AttributeObject<FacialHairType>;
  glasses: AttributeObject<GlassesType>;
  hair: AttributeObject<HairType>;
  hat: AttributeObject<HatType>;
  mouth: AttributeObject<MouthType>;
  shirt: AttributeObject<ShirtType>;
  skin: AttributeObject<SkinType>;
}

// Interface defining the structure of the portrait context state.
export interface PortraitContextState {
  portrait: {
    state: STATE;
    selectedColor: Color;
    attributes: Portrait;
  };
  dispatch: Dispatch<PortraitActions>;
}

// const stateAction: StateAction = {
//   type: ACTIONTYPE.STATE,
//   payload: STATE.CUSTOM
// }

// const eyebrowAction: EyeBrowAction = {
//   type: ACTIONTYPE.PORTRAIT,
//   payload: {
//     eyebrows: {
//       type: 'bushy',
//       fill: {primary: '#444444'}
//     }
//   }
// }
