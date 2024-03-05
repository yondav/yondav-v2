/**
 * This custom hook simplifies adding an event listener to detect clicks outside a specified element.
 * It triggers a provided handler function when a click event occurs outside the element.
 * @param {RefObject} ref - A React ref to the target element that should trigger the handler.
 * @param {Function} handler - The event handler function to execute when a click occurs outside the element.
 * @param {string} mouseEvent - (Optional) The mouse event to listen for ('mousedown' or 'mouseup'). Default is 'mousedown'.
 */

// Import necessary values and types from React.
import { type RefObject } from 'react';

// Import the 'useEventListener' custom hook for event handling.
import useEventListener from './useEventListener';

// Define a type for the mouse event handler.
type Handler = (event: MouseEvent) => void;

/**
 * Custom hook for detecting clicks outside a specified element and triggering a handler function.
 * @param {RefObject} ref - A React ref to the target element.
 * @param {Function} handler - The event handler function to execute when a click occurs outside the element.
 * @param {string} mouseEvent - (Optional) The mouse event to listen for ('mousedown' or 'mouseup'). Default is 'mousedown'.
 */
export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  // Use the 'useEventListener' hook to add the click event listener.
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;

    // Do nothing if clicking on the ref's element or its descendent elements.
    if (!el || el.contains(event.target as Node)) {
      return;
    }

    // Trigger the provided handler function when a click occurs outside the element.
    handler(event);
  });
}
