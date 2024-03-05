/**
 * This custom hook provides an isomorphic version of the 'useLayoutEffect' hook,
 * which ensures consistent behavior between server and client-side rendering.
 * @param {Function} effect - The effect function to execute.
 * @param {Array} deps - (Optional) An array of dependencies for the effect.
 */

// Import necessary values from React.
import { useEffect, useLayoutEffect } from 'react';

// Determine whether to use 'useLayoutEffect' or 'useEffect' based on window existence.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
