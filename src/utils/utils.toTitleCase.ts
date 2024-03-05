/**
 * Converts a string to title case.
 *
 * Title case capitalizes the first letter of each word and converts the rest of the letters to lowercase.
 * Words are separated by spaces or non-alphanumeric characters.
 *
 * @param {string} input - The input string to convert to title case.
 * @returns {string} The input string in title case format.
 */
export function toTitleCase(input: string): string {
  return input
    .trimStart() // Remove leading spaces
    .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
    .toLowerCase() // Convert to lowercase
    .split(/[^a-z|A-Z|0-9]+/) // Split into words using non-alphanumeric characters
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
    .join(' ') // Join the words with spaces
    .trim(); // Remove trailing spaces
}

export default toTitleCase;
