/**
 * This module defines a React context for managing the state of a portrait generator.
 * It includes default state values and utility functions for accessing the context.
 */

import { createContext, useContext } from 'react';

import { defaultColors, defaultAttributeFills } from './portrait.constants';
import { STATE, type PortraitContextState } from './portrait.types';

// Default state values for the portrait generator context.
export const defaultState: PortraitContextState = {
  portrait: {
    state: STATE.DEFAULT,
    selectedColor: defaultColors.black,
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
  },
  dispatch: () => null, // Placeholder dispatch function.
};

// Create a React context for the portrait generator state using the default state.
export const Context = createContext<PortraitContextState>(defaultState);

/**
 * Custom hook to access the portrait generator context in functional components.
 * @returns {PortraitContextState} The portrait generator context state.
 */
export function usePortraitContext(): PortraitContextState {
  return useContext(Context);
}
