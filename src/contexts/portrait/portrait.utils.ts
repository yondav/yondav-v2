import type { AttributeFills, AttributeObject } from './portrait.types';

/**
 * Constructs portrait attribute fills with primary, secondary, and tertiary colors.
 *
 * @param {AttributeFills} fills - An object containing primary, secondary, and tertiary colors.
 * @returns {AttributeFills} - An object with primary, secondary, and tertiary fills.
 */
export const constructFills = ({ primary, secondary, tertiary }: AttributeFills) => ({
  primary: primary ?? null,
  secondary: secondary ?? null,
  tertiary: tertiary ?? null,
});

export const getRandomColor = (solid = true) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  if (!solid) return `#${randomColor.padStart(6, '0')}`
  return `#${randomColor.padStart(6, '0')}`;
};

export const getRandomAttribute = <T>(attributes: Array<T>): AttributeObject<T> => {
  const item = attributes[Math.floor(Math.random() * attributes.length)];

  return {
    type: item,
    fill: {
      primary: getRandomColor(),
      secondary: getRandomColor(),
      tertiary: getRandomColor(),
    }
  }
};
