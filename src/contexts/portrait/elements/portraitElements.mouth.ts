/**
 * This module defines a function for constructing mouth elements for a portrait generator.
 * It includes configurations for different mouth types and fills.
 */

import { fillCursor } from '../../../styles';
import { defaultColors, defaultMouthFills } from '../portrait.constants';
import { STATE, type CreateElements, type Element, type MouthType } from '../portrait.types';

/**
 * Constructs mouth elements based on the specified mouth type, fill, and stroke.
 *
 * @param {Object} params - Parameters for constructing mouth elements.
 * @param {MouthType} params.type - The type of mouth (e.g., 'closedSmile', 'noSmile').
 * @param {AttributeFills} params.fill - The fill colors for the mouth.
 * @param {boolean | undefined} params.stroke - Whether to apply a stroke color to the mouth.
 * @returns {Element[]} - An array of SVG elements representing the mouth.
 */
export const mouth: CreateElements<MouthType> = ({
  type = 'halfSmile',
  fill,
  stroke,
  state = STATE.DEFAULT,
  colorAction
}) => {
  // SVG path data for different mouth shapes.
  const d = {
    closed: {
      shadow: `M428.4,396.2c0.6,0.2,1.3,0.4,1.9,0.5c0.7,0.1,1.4,0.3,2,0.5c0.3,0.1,0.7,0.3,1,0.5l3.1,1.5c3.3,1.7,7.1,2.2,10.8,2.5 c3.4,0.3,6.8,0.5,10.2,0.5c3.2,0.1,6.4,0,9.6-0.3c2.3-0.3,4.6-1,6.9-1.5c4.4-0.9,8.6,0.4,13-0.1c5.6-0.6,10.8-3.9,16.3-4.9 c6.3-1.1,12.4-2.5,18.5-4.4c3.5-1.2,6.8-2.9,9.8-5.2c2.9-2.2,5.8-4.9,8.4-7.5c-2,1.2-13.6,5.2-21.6,7.2 c-9.8,2.5-27.4,9.6-34.6,9.8s-33.1,0.7-41.6,0.5c-11.5-0.3-14.9-0.6-15.9-0.8c0.5,0.2,1.2,0.8,1.6,0.8L428.4,396.2z`,
      lips: `M537.7,375.5c-1-1.6-2.6-1.4-4.2-0.9c-11,3.1-48.3,14.3-53.8,15.8 c-6.2,1.7-34.7,2.4-41.8,1.7c-7.1-0.7-12.3,2.9-12.3,2.9c0.3,0.8,1.5,2.1,1.6,3c0,0.3,0,0.7,0.1,1c0.2,1,0.6,2,1,2.9 c1.5,3,3.7,5.6,6.5,7.5c2.7,1.9,5.6,3.4,8.7,4.5c2.9,1.1,5.9,1.9,8.9,2.5c9.7,1.8,19.8,1.3,29.5,0.2c9.4-0.9,18.7-3.1,27.4-6.7 c7.1-2.9,13.6-7.1,19.2-12.3c2.9-2.7,5.4-5.7,7.5-9c1-1.6,1.8-3.3,2.6-5c0.7-1.7,1.5-5.1,1.5-5.1v-0.5L537.7,375.5z M531.4,385.9 c-3,2.2-6.3,4-9.8,5.2c-6.1,1.8-12.3,3.3-18.5,4.4c-5.5,1-10.7,3.3-16.3,3.9c-4.4,0.5-8.6,0.1-13,1.1c-2.3,0.5-4.5,1.1-6.9,1.5 c-3.2,0.3-6.4,0.4-9.6,0.3c-3.4,0-6.8-0.2-10.2-0.5c-3.7-0.4-7.5-0.8-10.8-2.5l-3.1-1.5c-0.3-0.2-0.7-0.3-1-0.5 c-0.7-0.2-1.4-0.4-2-0.5c-0.6-0.2-1.3-0.4-1.9-0.5l-0.8-0.1c-0.4,0-1.1-0.6-1.6-0.8c0.7,0.1,2.9,0.7,7.9,2.1 c2.9,0.8,3.4,2.3,7.6,3.1c3.2,0.7,8.8,1.4,14.7,1.5c10.3,0.2,22.8-4.3,27.3-4.4c7.2-0.2,27.9-4.6,37.7-7.1 c8.1-2.1,16.6-10.7,18.6-11.9C537.1,381,534.3,383.7,531.4,385.9z`,
    },
    smile: {
      shadow: `M428.4,396.2c0.6,0.2,1.3,0.4,1.9,0.5c0.7,0.1,1.4,0.3,2,0.5c0.3,0.1,0.7,0.3,1,0.5l3.1,1.5c3.3,1.7,7.1,2.2,10.8,2.5 c3.4,0.3,6.8,0.5,10.2,0.5c3.2,0.1,6.4,0,9.6-0.3c2.3-0.3,4.6-1,6.9-1.5c4.4-0.9,8.6-0.6,13-1.1c5.6-0.6,10.8-2.9,16.3-3.9 c6.3-1.1,12.4-2.5,18.5-4.4c3.5-1.2,6.8-2.9,9.8-5.2c2.9-2.2,5.8-4.9,8.4-7.5c-2,1.2-13.6,5.2-21.6,7.2 c-9.8,2.5-27.4,12.6-34.6,12.8s-33.1-2.3-41.6-2.5c-11.5-0.3-14.9-0.6-15.9-0.8c0.5,0.2,1.2,0.8,1.6,0.8L428.4,396.2z`,
      lips: `M537.7,375.5c-1-1.6-2.6-1.4-4.2-0.9c-11,3.1-48.3,14.3-53.8,15.8 c-6.2,1.7-34.7,2.4-41.8,1.7c-7.1-0.7-12.3,2.9-12.3,2.9c0.3,0.8,1.5,2.1,1.6,3c0,0.3,0,0.7,0.1,1c0.2,1,0.6,2,1,2.9 c1.5,3,3.7,5.6,6.5,7.5c2.7,1.9,5.6,3.4,8.7,4.5c2.9,1.1,5.9,1.9,8.9,2.5c9.7,1.8,19.8,1.3,29.5,0.2c9.4-0.9,18.7-3.1,27.4-6.7 c7.1-2.9,13.6-7.1,19.2-12.3c2.9-2.7,5.4-5.7,7.5-9c1-1.6,1.8-3.3,2.6-5c0.7-1.7,1.5-5.1,1.5-5.1v-0.5L537.7,375.5z M531.4,385.9 c-3,2.2-6.3,4-9.8,5.2c-6.1,1.8-12.3,3.3-18.5,4.4c-5.5,1-10.7,3.3-16.3,3.9c-4.4,0.5-8.6,0.1-13,1.1c-2.3,0.5-4.5,1.1-6.9,1.5 c-3.2,0.3-6.4,0.4-9.6,0.3c-3.4,0-6.8-0.2-10.2-0.5c-3.7-0.4-7.5-0.8-10.8-2.5l-3.1-1.5c-0.3-0.2-0.7-0.3-1-0.5 c-0.7-0.2-1.4-0.4-2-0.5c-0.6-0.2-1.3-0.4-1.9-0.5l-0.8-0.1c-0.4,0-1.1-0.6-1.6-0.8c1,0.2,4.4,0.6,15.9,0.8 c8.5,0.2,34.4,2.7,41.6,2.5s24.8-10.3,34.6-12.8c8.1-2.1,19.6-6,21.6-7.2C537.1,381,534.3,383.7,531.4,385.9z`,
      teeth: {
        1: `M445.1,397.4c-0.1-0.2-1.7-1.9-1.7-1.9l-1,1.2c-0.7,0.9-0.5,2.3-0.5,3.5c0.1,0.8,4.2,1.3,4.3,0.4 c0-0.3,0-0.6-0.2-0.9C445.8,398.9,445.5,398.2,445.1,397.4z`,
        2: `M449.8,398.3c-0.2-0.2-2-1.6-2-1.6c-0.2,0.5-0.5,0.9-0.7,1.4c-0.5,1.1,0,2.4,0.2,3.5 c0.3,0.7,4.3,0.5,4.3-0.4c0-0.3-0.1-0.6-0.3-0.8C450.9,399.6,450.4,398.9,449.8,398.3z`,
        3: `M455.2,398.5c-0.1-0.2-1.5-2.1-1.5-2.1l-1.1,1.1c-0.8,0.8-0.7,2.2-0.9,3.4c0.1,0.8,4,1.7,4.3,0.9 c0.1-0.3,0-0.6-0.1-0.9C455.8,400.1,455.5,399.3,455.2,398.5z`,
        4: `M458.8,398.3c-0.2-0.2-2-1.6-2-1.6c-0.2,0.5-0.5,0.9-0.7,1.4c-0.5,1.1,0,2.4,0.2,3.5 c0.3,0.7,4.3,0.5,4.3-0.4c0-0.3-0.1-0.6-0.3-0.8C459.9,399.6,459.4,398.9,458.8,398.3z`,
        5: `M464.1,398.5c-0.1-0.2-1.6-2-1.6-2l-1,1.2c-0.8,0.9-0.6,2.3-0.7,3.4c0.1,0.8,4.1,1.4,4.3,0.6 c0-0.3,0-0.6-0.1-0.9C464.8,400,464.5,399.2,464.1,398.5z`,
        6: `M471.8,398.3c-0.2-0.2-2-1.6-2-1.6c-0.2,0.5-0.5,0.9-0.7,1.4c-0.3,0.5-0.3,1.1-0.2,1.7 c-0.3-0.5-0.7-1-1.1-1.5c-0.2-0.2-2-1.6-2-1.6c-0.2,0.5-0.5,0.9-0.7,1.4c-0.5,1.1,0,2.4,0.2,3.5c0.2,0.6,3,0.5,4,0c0,0,0,0,0,0 c0.3,0.7,4.3,0.5,4.3-0.4c0-0.3-0.1-0.6-0.3-0.8C472.9,399.6,472.4,398.9,471.8,398.3z`,
        7: `M531.4,378.8c-0.4-0.3-0.9-0.4-1.3-0.1c-0.9,0.3-1.2,0.3-1.5,1.6c-0.2,0.9-0.3,1.9-0.4,2.9 c-0.1,1-0.1,2.6,0.6,3.2c0.1,0.1,0.2,0.1,0.2,0.2c0.9,0.4,1.7-0.7,2.3-1.1l1.6-1.1c0.1-0.1,0.3-0.2,0.3-0.4 C533.5,383.3,532,379.2,531.4,378.8z`,
        8: `M525.9,381.9c-0.5,0-0.9,0.1-1.4,0.3l-1.4,5.6c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.7,0.2,0.9,1.2,0.8 c1.4-0.3,2.6-0.9,3.6-1.9c-0.3-1.5-0.4-3.7-1.2-5C526.5,382.2,526.4,382,525.9,381.9z`,
        9: `M521.8,384.2c-0.5-0.1-0.9-0.1-1.4,0l-2.6,5.1c-0.1,0.3-0.3,0.6-0.4,0.9c-0.2,0.6,0,0.9,1,1 c1.4,0.1,2.8-0.3,4-1c0-1.5,0.4-3.7,0-5.1C522.2,384.7,522.2,384.4,521.8,384.2z`,
        10: `M514.6,386.7c-1.3,0.1-1.8-0.1-2.6,0.9c-0.6,0.7-1.1,1.4-1.6,2.2c-0.5,0.8-1,2-0.4,2.7 c0.1,0.1,0.2,0.1,0.3,0.2c1,0.5,2.4-0.2,3.4-0.4l2.6-0.5c0.2,0,0.4-0.1,0.6-0.2c0.5-0.5,0-4.1-0.5-4.5 C515.8,386.7,515.2,386.6,514.6,386.7z`,
        11: `M507.6,391c-1.1-0.4-2,0.3-3,1c-0.2,0.2-0.4,0.3-0.6,0.6c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.4,0,0.7,0,1.1 c-0.6-0.7-1.4-1.2-2.2-1.5c-1.1-0.4-2,0.3-3,1c-0.2,0.2-0.4,0.3-0.6,0.6c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.4,0,0.7,0,1.1 c-0.6-0.7-1.4-1.2-2.2-1.5c-1.1-0.4-2,0.3-3,1c-0.2,0.2-0.4,0.3-0.6,0.6c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.4,0,0.9,0,1.3 c0,0.2,0.1,0.5,0.1,0.7c0-0.1,4.2-2,6-2.2c0,0,0,0.1,0,0.2c0-0.1,4.2-2,6-2.2c0,0,0,0.1,0,0.2c0-0.1,4.6-2.2,6.2-2.2 c0,0,0.1,0,0.1,0c0.1-0.1,0.1-0.2,0-0.2C509.6,392.1,508.6,391.4,507.6,391z`,
        12: `M439.4,395.6c-0.6-1-0.9-0.8-1.8-0.9c-0.4-0.1-0.9,0.1-1.2,0.4c-0.4,0.5-0.8,4.1-0.4,4.5 c0.1,0.1,0.3,0.2,0.4,0.2l1.8,0.5c0.7,0.2,1.7,0.9,2.4,0.4c0.1-0.1,0.1-0.1,0.2-0.2c0.5-0.7,0.1-2-0.3-2.7 C440.2,397.1,439.8,396.3,439.4,395.6z`,
        13: `M476.1,398.5c-0.1-0.2-1.6-2-1.6-2l-1,1.2c-0.8,0.9-0.6,2.3-0.7,3.4 c0.1,0.8,4.1,1.4,4.3,0.6c0-0.3,0-0.6-0.1-0.9C476.8,400,476.5,399.2,476.1,398.5z`,
        14: `M480.1,398.5c-0.1-0.2-1.6-2-1.6-2l-1,1.2c-0.8,0.9-0.6,2.3-0.7,3.4 c0.1,0.8,4.1,1.4,4.3,0.6c0-0.3,0-0.6-0.1-0.9C480.8,400,480.5,399.2,480.1,398.5z`,
        15: `M484.1,398.5c-0.1-0.2-1.6-2-1.6-2l-1,1.2c-0.8,0.9-0.6,2.3-0.7,3.4 c0.1,0.8,4.1,1.4,4.3,0.6c0-0.3,0-0.6-0.1-0.9C484.8,400,484.5,399.2,484.1,398.5z`,
        16: `M488.1,398.5c-0.1-0.2-1.6-2-1.6-2l-1,1.2c-0.8,0.9-0.6,2.3-0.7,3.4 c0.1,0.8,4.1,1.4,4.3,0.6c0-0.3,0-0.6-0.1-0.9C488.8,400,488.5,399.2,488.1,398.5z`,
        17: `M490.8,395.5l-2.2,1.2c-0.8,0.9,0.1,2.1,0,3.3c1.2,0.7,3.5,1.6,3.7,0.8 c0-0.3,0-0.6-0.1-0.9C491.9,399,490.8,395.5,490.8,395.5z`,
      },
    },
    noSmile: `M448.5,401.7c7.5,0.3,80.5-11.7,72.7-11.2C515.5,390.9,447.8,401.7,448.5,401.7z`,
  };

  // Determine the fill colors for the mouth.
  const primary = type === 'none' ? '' : (
    fill?.primary ??
    defaultMouthFills[type as keyof typeof defaultMouthFills].primary ??
    ''
  ).toString();
  const secondary = type === 'none' ? '' : (
    fill?.secondary ??
    defaultMouthFills[type as keyof typeof defaultMouthFills].secondary ??
    ''
  ).toString();

  /**
   * Constructs a mouth element with the specified path data.
   *
   * @param {string} pathFill - Parameters for constructing mouth elements.
   * @returns {Element} - An SVG element representing the mouth.
   */
  const constructMouth = (d: string, pathFill: 'lip' | 'tooth' | 'shadow'): Element => {
    return {
      type: 'path',
      props: {
        fill:
          pathFill === 'lip'
            ? primary
            : pathFill === 'tooth'
            ? secondary
            : defaultColors.black,
        style: pathFill === 'lip' ? fillCursor(state) : {},
        onClick: () => {
          if (state === STATE.COLOR && pathFill === 'lip') colorAction('primary');
        },
        d,
      },
    };
  };

  // Generate and return mouth elements based on the mouth type.
  switch (type) {
    case 'closedSmile':
      return [
        constructMouth(d.closed.shadow, 'shadow'),
        constructMouth(d.closed.lips, 'lip'),
      ];

    case 'fullSmile':
      return [
        constructMouth(d.smile.shadow, 'shadow'),
        constructMouth(d.smile.teeth[1], 'tooth'),
        constructMouth(d.smile.teeth[2], 'tooth'),
        constructMouth(d.smile.teeth[3], 'tooth'),
        constructMouth(d.smile.teeth[4], 'tooth'),
        constructMouth(d.smile.teeth[5], 'tooth'),
        constructMouth(d.smile.teeth[6], 'tooth'),
        constructMouth(d.smile.teeth[7], 'tooth'),
        constructMouth(d.smile.teeth[8], 'tooth'),
        constructMouth(d.smile.teeth[9], 'tooth'),
        constructMouth(d.smile.teeth[10], 'tooth'),
        constructMouth(d.smile.teeth[11], 'tooth'),
        constructMouth(d.smile.teeth[12], 'tooth'),
        constructMouth(d.smile.teeth[13], 'tooth'),
        constructMouth(d.smile.teeth[14], 'tooth'),
        constructMouth(d.smile.teeth[15], 'tooth'),
        constructMouth(d.smile.teeth[16], 'tooth'),
        constructMouth(d.smile.teeth[17], 'tooth'),
        constructMouth(d.smile.lips, 'lip'),
      ];

    case 'halfSmile':
      return [
        constructMouth(d.smile.shadow, 'shadow'),
        constructMouth(d.smile.teeth[1], 'tooth'),
        constructMouth(d.smile.teeth[2], 'tooth'),
        constructMouth(d.smile.teeth[3], 'tooth'),
        constructMouth(d.smile.teeth[4], 'tooth'),
        constructMouth(d.smile.teeth[5], 'tooth'),
        constructMouth(d.smile.teeth[6], 'tooth'),
        constructMouth(d.smile.teeth[7], 'tooth'),
        constructMouth(d.smile.teeth[8], 'tooth'),
        constructMouth(d.smile.teeth[9], 'tooth'),
        constructMouth(d.smile.teeth[10], 'tooth'),
        constructMouth(d.smile.teeth[11], 'tooth'),
        constructMouth(d.smile.teeth[12], 'tooth'),
        constructMouth(d.smile.lips, 'lip'),
      ];

    case 'noSmile':
      return [constructMouth(d.noSmile, 'shadow')];

    case 'none':
      return []; // Return an empty array for no mouth.
  }
};
