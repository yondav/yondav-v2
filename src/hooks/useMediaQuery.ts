import { useEffect, useState } from 'react';

/**
 * A custom React hook to track changes in a media query.
 * @param {string} query - The media query string to track.
 * @returns {boolean} - Whether the current media query matches or not.
 */
export default function useMediaQuery(query: string): boolean {
  // Function to check if the provided media query matches the current window.
  const getMatches = (queryMatch: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(queryMatch).matches;
    }

    return false;
  };

  // State to hold the current matches status.
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  // Function to update matches based on media query changes.
  const handleChange = (): void => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    // Create a media query listener.
    const matchedMedia = window.matchMedia(query);

    // Initialize matches state.
    handleChange();

    // Add a listener for changes to the media query.
    matchedMedia.addEventListener('change', handleChange);

    // Clean up the listener when the component unmounts or the query changes.
    return () => {
      matchedMedia.removeEventListener('change', handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
