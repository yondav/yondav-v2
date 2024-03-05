/**
 * This module defines a function for constructing eye elements for a portrait generator.
 * It includes configurations for different eye types and fills.
 */

import { fillCursor } from '../../../styles';
import { defaultColors, defaultEyeFills } from '../portrait.constants';
import { STATE, type CreateElements, type Element, type EyeType } from '../portrait.types';

/**
 * Constructs eye elements based on the specified eye type, fill, and stroke.
 *
 * @param {Object} params - Parameters for constructing eye elements.
 * @param {EyeType} params.type - The type of eye (e.g., 'open', 'closed').
 * @param {AttributeFills} params.fill - The fill colors for the eyes.
 * @param {boolean | undefined} params.stroke - Whether to apply a stroke color to the eyes.
 * @returns {Element[]} - An array of SVG elements representing the eyes.
 */
export const eyes: CreateElements<EyeType> = ({
  type = 'open',
  fill,
  stroke = true,
  state = STATE.DEFAULT,
  colorAction
}) => {
  // SVG path data for different eye shapes.
  const d = {
    open: {
      right: `M417.2,284.8c-5,0.6-9.7,2.4-13.8,5.3 c-2.1,1.4-4,2.9-6,4.4c-0.5,0.4-2.5,2.4-3.9,3.3c-0.3,0.2-0.2,0.6,0.2,0.7c8.1,1.3,16.4,1.1,24.4-0.4c2.2-0.4,23.1-7.2,23-7.4 c-0.5-0.8-1.3-1.4-2.3-1.8C438.4,288.6,424.1,284.1,417.2,284.8z`,
      left: `M532.1,269.4c-5.3-1.2-10.8-1.6-16,0.3 c-3.2,1.3-6.3,3-9.1,5.1c-0.9,0.7-7.9,5.6-7.7,6.4c0.5,1.3,2,1.8,3.3,1.9c12,1.3,24.5-0.5,36-3.7c1.8-0.4,3.6-1.2,5.2-2.2 c0.3-0.2,1.9-1.7,2.8-2.5c0.2-0.2,0.1-0.6-0.2-0.7C541.5,272.9,537.2,270.5,532.1,269.4z`,
    },
    closed: {
      right: `M417.2,295.8 c-5,0.6-22.4,1-23.7,1.9c-0.3,0.2,16.5-0.2,24.6-1.7c2.2-0.4,23.1-5.2,23-5.4C440.6,289.8,424.1,295.1,417.2,295.8z`,
      left: `M516.1,279.7c-3.4,0.5-17,0.7-16.8,1.5 c0.5,1.3,46.3-5.7,47.2-6.5C546.8,274.5,521.7,278.8,516.1,279.7z`,
    },
    pupils: {
      right: `M426.5,286.6c-1.2-2-7.2-1-9.1-1 c-1.2,0-2.3,0-3.5,0.2c-2.2,0.4-6.2,1.5-7,3.9c-0.7,2.2,0.4,4.4,1.8,5.9c1.4,1.5,3.2,3,5.1,2.6c1.5-0.3,2.8-0.9,4.3-1.2 c1.7-0.4,3.5-0.3,5.2-0.9c3.3-1.1,3.9-6.2,3.5-9.3C426.9,286.4,426.7,287,426.5,286.6z`,
      left: `M532.4,270.2c0-1.3-8.2-1-9.2-1 c-3.1,0-6.2,0.6-9.1,1.8c-0.2,0.1-0.3,0.2-0.5,0.3c-0.1,0.2-0.2,0.4-0.3,0.6l-0.1,0.4c-0.5,1.1-0.8,2.3-0.8,3.5 c0.4,2.9,3.6,5.6,6.3,6.3c0.8,0.2,1.6,0.3,2.5,0.3c2.8,0.1,6.3-0.5,8.4-2.5c1-1,1.8-2.2,2.3-3.6 C532.7,274.4,532.3,272.1,532.4,270.2z`,
    },
  };

  // Determine the primary fill color for the eyes.
  const primary = type === 'none' ? '' : (
    fill?.primary ??
    defaultEyeFills[type as keyof typeof defaultEyeFills].primary ??
    ''
  ).toString();

  /**
   * Constructs an eye element with the specified path data.
   *
   * @param {string} d - The path data for the eye.
   * @returns {Element} - An SVG element representing the eye.
   */
  const constructEye = (d: string, sclera = false): Element => ({
    type: 'path',
    props: {
      fill: sclera ? defaultColors.white : primary,
      stroke: stroke ? defaultColors.neutral[300] : '',
      onClick: () => {
        if (!sclera && state === STATE.COLOR) colorAction('primary')
      },
      style: !sclera ? fillCursor(state) : {},
      d,
    },
  });

  // Generate and return eye elements based on the eye type.
  switch (type) {
    case 'closed':
      return [constructEye(d.closed.left), constructEye(d.closed.right)];

    case 'open':
      return [
        constructEye(d.open.left, true),
        constructEye(d.pupils.left),
        constructEye(d.open.right, true),
        constructEye(d.pupils.right),
      ];

    case 'winkLeft':
      return [
        constructEye(d.open.right, true),
        constructEye(d.pupils.right),
        constructEye(d.closed.left),
      ];

    case 'winkRight':
      return [
        constructEye(d.open.left, true),
        constructEye(d.pupils.left),
        constructEye(d.closed.right),
      ];

    case 'none':
      return []; // Return an empty array for no eyes.
  }
};
