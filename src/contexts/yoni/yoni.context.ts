import { createContext, useContext } from 'react';

import { typedObjectMap } from '../../utils/utils.typedObjectMap';

import {
  EYEBROWTYPE,
  EYETYPE,
  FACIALHAIRTYPE,
  GLASSESTYPE,
  HAIRTYPE,
  HATTYPE,
  MOUTHTYPE,
  SHIRTTYPE,
  type YoniContextState,
} from './yoni.types';

export const defaultYoniState: YoniContextState = {
  state: null,
  setState: () => null,
  attributeTypes: {
    shirt: typedObjectMap(SHIRTTYPE),
    mouth: typedObjectMap(MOUTHTYPE),
    eyes: typedObjectMap(EYETYPE),
    eyebrows: typedObjectMap(EYEBROWTYPE),
    hair: typedObjectMap(HAIRTYPE),
    facialHair: typedObjectMap(FACIALHAIRTYPE),
    glasses: typedObjectMap(GLASSESTYPE),
    hat: typedObjectMap(HATTYPE),
    skin: { keys: [], values: [] },
  },
  dispatch: () => null,
  attributes: {
    skin: { type: 'skin', fill: null },
    shirt: { type: SHIRTTYPE.VINTAGE, fill: null },
    mouth: { type: MOUTHTYPE.HALFSMILE, fill: null },
    eyes: { type: EYETYPE.OPEN, fill: null },
    eyebrows: { type: EYEBROWTYPE.BUSHY, fill: null },
    hair: { type: HAIRTYPE.SHORT, fill: null },
    facialHair: { type: FACIALHAIRTYPE.BEARD, fill: null },
    glasses: { type: GLASSESTYPE.VERSACE, fill: null },
    hat: { type: HATTYPE.BASEBALLCAP, fill: null },
  },
};

export const YoniContext = createContext<YoniContextState>(defaultYoniState);

export function useYoniContext(): YoniContextState {
  return useContext(YoniContext);
}
