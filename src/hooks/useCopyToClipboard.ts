/**
 * This custom hook provides a way to copy text to the clipboard and tracks the copied state.
 * It returns a tuple containing the copied text and a copy function.
 * @returns {Array} An array with two elements: the copied text and the copy function.
 */

import { useState } from 'react';

// Define types for copied value and copy function.
type CopiedValue = string | null;
type CopyFn = (text?: string) => Promise<boolean>; // Returns success status

/**
 * Custom hook for copying text to the clipboard and tracking the copied state.
 * @returns {Array} An array containing the copied text and the copy function.
 */
export default function useCopyToClipboard(): [CopiedValue, CopyFn] {
  // Initialize state to track copied text.
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  // Define the copy function that attempts to copy text to the clipboard.
  const copy: CopyFn = async (text) => {
    // Check if there is text available to copy.
    if (!text) {
      console.warn('No text available to copy');
      return false;
    }

    // Check if the Clipboard API is supported by the browser.
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    // Try to save the text to the clipboard and update the state if successful.
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true; // Copy succeeded.
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false; // Copy failed.
    }
  };

  // Return a tuple containing the copied text and the copy function.
  return [copiedText, copy];
}
