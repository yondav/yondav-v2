/**
 * This module defines a React context for managing the state of the ui theme.
 * It includes default state values and utility functions for accessing the context.
 */

import { createContext, useContext } from 'react';

import { CONTRASTTHEME, type ThemeContextState } from './theme.types';

// Default state values for the ui theme context.
export const defaultState: ThemeContextState = {
  contrast: CONTRASTTHEME.LIGHT,
  color: 'default',
  setter: () => null
};

// Create a React context for the ui theme state using the default state.
export const Context = createContext<ThemeContextState>(defaultState);

/**
 * Custom hook to access the ui theme context in functional components.
 * @returns {ThemeContextState} The ui theme context state.
 */
export function useThemeContext(): ThemeContextState {
  return useContext(Context);
}
