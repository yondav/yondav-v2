
/**
 * This custom hook simplifies adding event listeners to various elements (e.g., window, DOM elements).
 * It supports media query lists, window events, element events, and document events.
 * @param {string} eventName - The name of the event to listen for (e.g., 'click', 'resize').
 * @param {Function} handler - The event handler function to execute when the event occurs.
 * @param {RefObject} element - (Optional) The target element to attach the event listener to.
 * @param {boolean|AddEventListenerOptions} options - (Optional) Additional options for the event listener.
 */

import { useEffect, useRef, type RefObject } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

// MediaQueryList Event based useEventListener interface
function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  element: RefObject<MediaQueryList>,
  options?: boolean | AddEventListenerOptions
): void;

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void;

// Element Event based useEventListener interface
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions
): void;

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  // Create a ref that stores the handler function.
  const savedHandler = useRef(handler);

  // Use an isomorphic layout effect to update the saved handler ref.
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target element or default to the window.
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    // Create an event listener that calls the handler function stored in the ref.
    const listener: typeof handler = event => savedHandler.current(event);

    // Add the event listener to the target element.
    targetElement.addEventListener(eventName, listener, options);

    // Remove the event listener on cleanup to prevent memory leaks.
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

export default useEventListener;
