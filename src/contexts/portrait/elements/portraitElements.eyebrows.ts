/**
 * This module defines a function for constructing eyebrow elements for a portrait generator.
 * It includes configurations for different eyebrow types and fills.
 */

import { fillCursor } from '../../../styles';
import { defaultColors, defaultEyebrowFills } from '../portrait.constants';
import { STATE, type CreateElements, type Element, type EyebrowType } from '../portrait.types';

/**
 * Constructs eyebrow elements based on the specified eyebrow type, fill, and stroke.
 *
 * @param {Object} params - Parameters for constructing eyebrow elements.
 * @param {EyebrowType} params.type - The type of eyebrow (e.g., 'bushy', 'surprised').
 * @param {AttributeFills} params.fill - The fill colors for the eyebrows.
 * @param {boolean | undefined} params.stroke - Whether to apply a stroke color to the eyebrows.
 * @returns {Element[]} - An array of SVG elements representing the eyebrows.
 */
export const eyebrows: CreateElements<EyebrowType> = ({
  type = 'bushy',
  fill,
  stroke,
  state = STATE.DEFAULT,
  colorAction
}) => {
  // SVG path data for different eyebrow shapes.
  const d = {
    straight: {
      right: `M443.3,259.9c-0.4-0.2-0.9-0.4-1.3-0.6c-0.6-0.1-1.1-0.2-1.7-0.1c-4,0-8,0-12,0 c-6.8-0.1-13.6-0.1-20.4,0.1c-5.7,0.2-11.1,1.3-16.8,2.3c-5.2,0.9-7.7,4.9-12.1,7.4c-1.3,0.6-2.5,1.4-3.6,2.3l-0.1,0.1 c-1.2,1.1-5.1,5.6-3.2,7.4c0.5,0.4,1.2,0.5,1.8,0.5c3.3,0,6.6,0,9.9,0c2.8,0,6,0.6,8.3-1.2c6.1-4.7,15.7-6.1,23.2-6.5 c8.7-0.4,17.4,0.9,25.9,2.2c2.7,0.6,5.5-0.2,7.5-2.1c3.4-2.4,4.2-4.1,1.2-7.1C447.9,262.7,445.7,261.2,443.3,259.9z`,
      left: `M563.4,247.8c-0.2-0.4-0.4-0.7-0.8-1c-0.5-0.4-1.1-0.6-1.7-0.8c-13-3.8-28.3-6.7-41.8-4.6 c-11.3,1.8-22,6.4-31.2,13.2c-2.5,1.8-5.6,3.6-7.5,5.9c4.4,3.1,10.2,3.7,15.1,1.5c10.8-4.6,22.2-7.8,33.8-9.5 c7-0.8,14.2-1.1,21.2-0.8c3.2,0.1,7.6,1.1,10.7,0.3c1.9-0.5,1.7,0.4,2.5-1.4C563.9,249.8,563.8,248.7,563.4,247.8z`,
    },
    raised: {
      right: `M406.7,246.3c-3.7,1.4-11.3,5.1-16.1,11.4c-7.1,9.5-14.6,13.1-15.2,13.6l-0.1,0.1 c-1.2,1.1-5.1,5.6-3.2,7.4c0.5,0.4,1.2,0.5,1.8,0.5c3.3,0,11.1-1.8,13.4-3.6c6.1-4.7,9.2-13,23.6-15c8.6-1.2,21.7,11.8,30.3,13.1 c2.7,0.6,5.5-0.2,7.5-2.1c3.4-2.4,5.2-5.6,1.2-7.1C432.3,258.4,413.1,243.9,406.7,246.3z`,
      left: `M563.4,247.8c-0.2-0.4-0.4-0.7-0.8-1c-0.5-0.4-1.1-0.6-1.7-0.8c-13-3.8-24.4-18.7-37.8-16.6 c-11.3,1.8-26,18.4-35.2,25.3c-2.5,1.8-5.6,3.6-7.5,5.9c4.4,3.1,10.2,3.7,15.1,1.5c10.8-4.6,19.2-16.9,30.9-18.6 c7-0.8,17.1,8,24.2,8.4c3.2,0.1,7.6,1.1,10.7,0.3c1.9-0.5,1.7,0.4,2.5-1.4C563.9,249.8,563.8,248.7,563.4,247.8z`,
    },
    uni: `M438.9,259.3c-3.2,0-7.9,0-10.5,0c-6.8-0.1-13.6-0.1-20.4,0.1c-5.7,0.2-11.1,1.3-16.8,2.3 c-5,0.9-7.5,4.6-11.6,7.1c-0.3,0.2-0.7,0.4-1,0.6c-1.1,0.6-2.1,1.3-3.1,2l-0.1,0.1c-1.2,1.1-5.1,5.6-3.2,7.4 c0.5,0.4,1.2,0.5,1.8,0.5c3.3,0,6.6,0,9.9,0c2.8,0,6,0.6,8.3-1.2c6.1-4.7,15.7-6.1,23.2-6.5c8.7-0.4,24.8-1.7,35-2.3 c2.1-0.1,11.7-0.7,16.7-0.9c9.7-0.5,24.1-4.4,28.5-6.2c10.9-4.4,22.2-7.8,33.8-9.5c7-0.8,14.2-1.1,21.2-0.8 c3.2,0.1,7.6,1.1,10.7,0.3c1.9-0.5,1.7,0.4,2.5-1.4c0.3-1,0.2-2-0.3-3c-0.2-0.4-0.4-0.7-0.8-1c-0.5-0.4-1.1-0.6-1.7-0.8 c-13-3.8-28.3-6.7-41.8-4.6c-10.6,1.7-26.7,10.1-48.2,15.8C453.9,261.7,441.4,259.3,438.9,259.3z`,
  };

  // Determine the primary fill color for the eyebrows.
  const primary = type === 'none' ? '' : (
    fill?.primary ??
    defaultEyebrowFills[type as keyof typeof defaultEyebrowFills].primary ??
    ''
  ).toString();

  /**
   * Constructs an eyebrow element with the specified path data.
   *
   * @param {string} d - The path data for the eyebrow.
   * @returns {Element} - An SVG element representing the eyebrow.
   */
  const constructBrow = (d: string): Element => ({
    type: 'path',
    props: {
      fill: primary,
      stroke: stroke ? defaultColors.neutral[300] : '',
      style: fillCursor(state),
      onClick: () => {
        if (state === STATE.COLOR) colorAction('primary')
      },
      d,
    },
  });

  // Generate and return eyebrow elements based on the eyebrow type.
  switch (type) {
    case 'bushy':
      return [constructBrow(d.straight.right), constructBrow(d.straight.left)];

    case 'surprised':
      return [constructBrow(d.raised.right), constructBrow(d.raised.left)];

    case 'suspicious':
      return [constructBrow(d.straight.right), constructBrow(d.raised.left)];

    case 'uni':
      return [constructBrow(d.uni)];

    case 'none':
      return []; // Return an empty array for no eyebrows.
  }
};
