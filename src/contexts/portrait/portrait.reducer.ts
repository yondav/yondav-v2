import {
  defaultAttributeFills,
  defaultEyeFills,
  defaultEyebrowFills,
  defaultFacialHairFills,
  defaultGlassesFills,
  defaultHairFills,
  defaultHatFills,
  defaultMouthFills,
  defaultShirtFills,
} from './portrait.constants';
import {
  ACTIONTYPE,
  type EyeType,
  type EyebrowType,
  type FacialHairType,
  type GlassesType,
  type HairType,
  type HatType,
  type MouthType,
  type ShirtType,
  type PortraitActions,
  type PortraitContextState,
  STATE,
} from './portrait.types';
import { getRandomAttribute, getRandomColor } from './portrait.utils';

export function reducer(
  state: PortraitContextState['portrait'],
  { type, payload }: PortraitActions
): PortraitContextState['portrait'] {
  switch (type) {
    case ACTIONTYPE.COLOR:
      return { ...state, selectedColor: payload };

    case ACTIONTYPE.DEFAULT:
      return {
        ...state,
        attributes: {
          eyebrows: { type: 'bushy', fill: defaultAttributeFills.eyebrows.bushy },
          eyes: { type: 'open', fill: defaultAttributeFills.eyes.open },
          facialHair: { type: 'beard', fill: defaultAttributeFills.facialHair.beard },
          glasses: { type: 'versace', fill: defaultAttributeFills.glasses.versace },
          hair: { type: 'short', fill: defaultAttributeFills.hair.short },
          hat: { type: 'baseballCap', fill: defaultAttributeFills.hat.baseballCap },
          mouth: { type: 'halfSmile', fill: defaultAttributeFills.mouth.halfSmile },
          shirt: { type: 'vintage', fill: defaultAttributeFills.shirt.vintage },
          skin: { type: 'skin', fill: defaultAttributeFills.skin.skin },
        },
      };

    case ACTIONTYPE.EMPTY:
      return state; // TODO: handle white fills and strokes for all applicable paths.

    case ACTIONTYPE.STATE:
      return { ...state, state: state.state === payload ? STATE.DEFAULT : payload };

    case ACTIONTYPE.PORTRAIT:
      return { ...state, attributes: { ...state.attributes, ...payload } };

    case ACTIONTYPE.RANDOM:
      const eyebrows = ['none', ...Object.keys(defaultEyebrowFills)] as EyebrowType[];
      const eyes = ['none', ...Object.keys(defaultEyeFills)] as EyeType[];
      const facialHair = [
        'none',
        ...Object.keys(defaultFacialHairFills),
      ] as FacialHairType[];
      const glasses = ['none', ...Object.keys(defaultGlassesFills)] as GlassesType[];
      const hair = ['none', ...Object.keys(defaultHairFills)] as HairType[];
      const hat = ['none', ...Object.keys(defaultHatFills)] as HatType[];
      const mouth = ['none', ...Object.keys(defaultMouthFills)] as MouthType[];
      const shirt = ['none', ...Object.keys(defaultShirtFills)] as ShirtType[];
      return {
        ...state,
        attributes: {
          eyebrows: getRandomAttribute(eyebrows),
          eyes: getRandomAttribute(eyes),
          facialHair: getRandomAttribute(facialHair),
          glasses: getRandomAttribute(glasses),
          hair: getRandomAttribute(hair),
          hat: getRandomAttribute(hat),
          mouth: getRandomAttribute(mouth),
          shirt: getRandomAttribute(shirt),
          skin: { type: 'skin', fill: { primary: getRandomColor(false) } },
        },
      };
    default:
      return state;
  }
}
