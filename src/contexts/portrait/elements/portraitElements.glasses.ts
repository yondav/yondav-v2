/**
 * This module defines a function for constructing glasses elements for a portrait generator.
 * It includes configurations for different glasses types and fills.
 */

import type { SVGProps } from 'react';

import { fillCursor } from '../../../styles';
import {
  defaultColors,
  defaultGlassesFills,
  defaultOpacities,
} from '../portrait.constants';
import {
  type GlassesType,
  type CreateElements,
  type Element,
  STATE,
} from '../portrait.types';

/**
 * Constructs glasses elements based on the specified glasses type, fill, and stroke.
 *
 * @param {Object} params - Parameters for constructing glasses elements.
 * @param {GlassesType} params.type - The type of glasses (e.g., 'versace', 'shore').
 * @param {AttributeFills} params.fill - The fill colors for the glasses.
 * @param {boolean | undefined} params.stroke - Whether to apply a stroke color to the glasses.
 * @returns {Element[]} - An array of SVG elements representing the glasses.
 */
export const glasses: CreateElements<GlassesType> = ({
  type = 'versace',
  fill,
  stroke,
  state = STATE.DEFAULT,
  colorAction,
}) => {
  // SVG path data for different glasses shapes.
  const d = {
    cyclopse: {
      rightArm: `M351.4,277.2l14.6,9.1c0.4,0.2,0.8,0.3,1.2,0.2l13.5-2.5c1.1-0.2,2.1,0.6,2.1,1.7V302 c0,1.1-0.9,1.9-2,1.7l-10-1.3c-0.4-0.1-0.8-0.2-1-0.5l-20.6-21.9c-0.3-0.3-0.5-0.7-0.5-1.2l0,0 C348.7,277.3,350.2,276.5,351.4,277.2z`,
      leftArm: `M598.4,240.5l-23.3,14.8c-1.9,1.2-4,1.8-6.2,1.7l-3.4-0.1l3.1,22.4l30.6-32.6 C600.9,244.9,600.5,241.9,598.4,240.5L598.4,240.5z`,
      lens: `M396.3,271.1L543,254.2l24-2.3 c3.6-0.4,6.8,2.4,6.9,6.1l1.1,37c1,14.8-196.7,44.1-198.5,30.1l-3.8-43.1c-0.4-4.4,2.8-8.3,7.1-8.9L396.3,271.1z`,
      glare: `M380.8,303.7l-1.3-18.6c-0.2-3.3,2.3-6.2,5.6-6.4l15.7-1.8`,
    },
    elton: {
      leftArm: `M598.4,240.5L598.4,240.5l-23.3,14.8c-1.5,0.9-8.1,4-10.6,5.2c3.1,2.1,4.4,6.5,2,10.1 l-5.7,8.5l38.3-32.2C600.9,244.9,600.5,241.9,598.4,240.5z`,
      bridge: `M493.5,301.3L482,294c-2.8-0.2-6.1-0.2-9.9-0.1c-6.6,0.3-11.5,0.9-15,1.7l-6.8,8.4 c3.5-0.5,15.3-2,22.8-2.5c6-0.4,15.4-0.3,20.4-0.1C493.6,301.3,493.6,301.3,493.5,301.3z`,
      rightArm: `M370.4,300c-4.2-3.2-3.6-9.4,0.6-12l-3.8-1.5c-0.4,0.1-0.9,0-1.2-0.2l-14.6-9.1 c-1.2-0.7-2.7,0.1-2.7,1.5c0,0.4,0.2,0.9,0.5,1.2l20.6,21.9c0.3,0.3,0.6,0.5,1,0.5l3.3,0.4L370.4,300z`,
      leftLens: `M519.3,241.2l13.2,16.7 c1.5,1.9,3.8,2.9,6.2,2.7l21.3-1.4c6-0.4,9.8,6.3,6.5,11.3l-11.8,17.7c-1.3,2-1.6,4.5-0.7,6.7l7.9,19.8c2.2,5.6-2.9,11.3-8.7,9.7 l-20.5-5.8c-2.3-0.6-4.8-0.1-6.6,1.4l-16.4,13.6c-4.6,3.8-11.6,0.7-11.9-5.3l-0.8-21.3c-0.1-2.4-1.4-4.6-3.4-5.8l-18-11.4 c-5.1-3.2-4.3-10.8,1.4-12.9l20-7.4c2.2-0.8,3.9-2.7,4.5-5l5.3-20.7C508.1,238.1,515.6,236.5,519.3,241.2z`,
      rightLens: `M418.3,255.3l11.7,17.8c1.3,2,3.5,3.2,5.9,3.3 l21.3,0.5c6,0.1,9.2,7.1,5.5,11.8l-13.3,16.6c-1.5,1.9-2,4.3-1.3,6.6l6.1,20.4c1.7,5.8-3.9,11-9.5,8.9l-19.9-7.5 c-2.2-0.8-4.7-0.5-6.7,0.8l-17.5,12.1c-4.9,3.4-11.7-0.3-11.4-6.3l1-21.3c0.1-2.4-1-4.7-2.8-6.1l-17-12.9 c-4.8-3.6-3.3-11.2,2.5-12.8l20.6-5.6c2.3-0.6,4.1-2.3,4.9-4.6l7-20.1C407.4,251.2,415,250.3,418.3,255.3z`,
      leftGlare: `M521.5,313.6c-10.3,10.2-16.4,12-15.2-2.3c1.2-14.2-9.8-20.8-16.9-25.1 c-4.4-2.7,3.4-6.1,10.1-8.3c4.8-1.6,8.6-5.6,9.9-10.5c2.6-9.9,7.9-23,14.9-2.6`,
      rightGlare: `M413.3,326.4c-17.7,14.3-10.6-4.2-10-12.9c0.6-8.8-26.6-16.1-14-17.5 c13-1.5,20-16.6,20-16.6s4.5-23.5,14-0.4`,
    },
    shore: {
      rightArm: `M351.4,277.2l14.6,9.1c0.4,0.2,0.8,0.3,1.2,0.2l13.5-2.5c1.1-0.2,2.1,0.6,2.1,1.7V302 c0,1.1-0.9,1.9-2,1.7l-10-1.3c-0.4-0.1-0.8-0.2-1-0.5l-20.6-21.9c-0.3-0.3-0.5-0.7-0.5-1.2l0,0 C348.7,277.3,350.2,276.5,351.4,277.2z`,
      leftArm: `M598.4,240.5l-23.3,14.8c-1.9,1.2-4,1.8-6.2,1.7l-3.4-0.1l3.1,22.4l30.6-32.6 C600.9,244.9,600.5,241.9,598.4,240.5L598.4,240.5z`,
      lens: `M396.3,266.1L543,249.2c15.7-1.8,29.7,9.9,30.8,25.7 l3,45.4c1,14.8-9.9,27.7-24.6,29.3l-11.9,1.3c-8,0.9-16-1.8-21.9-7.3L496,322.9c-12-11.2-31.2-9.5-41,3.7l-18.1,24.2 c-5.1,6.8-13,10.9-21.5,11.1l-9.9,0.3c-14.2,0.4-26.3-10-28.2-24.1l-5.3-40.9C370,281.8,381,267.8,396.3,266.1z`,
      frame: `M404.8,358.1c-11.9,0-21.9-8.9-23.5-20.6l-5.3-40.9 c-0.8-6.3,0.9-12.6,4.8-17.6s9.6-8.2,16-8.9l146.7-16.8c0.9-0.1,1.8-0.2,2.7-0.2c12.4,0,22.8,9.7,23.6,22.1l3,45.4 c0.8,12.7-8.4,23.7-21.1,25.1l-11.9,1.3c-0.8,0.1-1.7,0.1-2.5,0.1c-6,0-11.8-2.3-16.2-6.4l-22.3-20.8c-5.9-5.5-13.6-8.5-21.6-8.5 c-10.1,0-19.3,4.6-25.4,12.7l-18.1,24.2c-4.4,5.8-11.1,9.3-18.4,9.5l-9.9,0.3C405.2,358.1,405,358.1,404.8,358.1z`,
      glare: `M427.9,271.2c-51.1,6.5-42.4,37.5-42.4,37.5l2.8,18.6`,
    },
    versaceShades: {
      bridge: `M483.1,269.3c-1.2-1.5-4.3-1.9-6-2.3 c-3.2-0.6-6.5-0.9-9.7-0.9c-5.9,0-11,2.4-16,5.4c-0.3,0.2-0.6,0.3-0.8,0.6c-0.2,0.2-0.4,0.5-0.6,0.7c-1.5,2.7,1.2,6.8,2.3,9.3l1,2 c0-3.1-1-7.9-1-11l4-2c3.8-1.9,8-2.9,12.2-2.7c2.1,0.1,4,0.6,6.1,0.7c2.2,0,6.2-0.1,7.3,2.3c0.4,1.1,0.6,2.3,0.5,3.5l-0.1,7.7 c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.1,0,0.1-0.1l1.7-2.8c0,0,0,0,0-0.1c0.5-3.1-0.2-6.5-0.8-9.5C483.5,270,483.3,269.6,483.1,269.3z`,
      rightHinge: `M368.3,283.1c-0.3-0.6-0.9-0.8-1.5-0.5l-1.4,0.7 h-0.1l-3.5,1c-1.3,0.5-2.7,0.9-4.1,1.1c-0.8,0.1-1.4,0.7-1.5,1.4l-0.1,0.7c0,0.1,0,0.2,0,0.3c0,0.9,0.8,1.6,1.7,1.5h0.7h7.3 c0.3,0,0.5-0.2,0.7-0.4c0.4-0.9,0.8-2.5,1.1-3.3c0.3-0.5,0.5-1.1,0.7-1.7c0-0.2,0-0.4,0-0.5C368.3,283.3,368.3,283.2,368.3,283.1z`,
      leftHinge: `M578.4,257.9c0-0.8-0.3-1.5-0.8-2.1 c-0.8-0.5-1.9-0.5-2.7,0c-0.8,0.5-1.7,1-2.6,1.3c-0.5,0.1-1.1,0.1-1.6,0.1c-1.7-0.2-3.5-0.3-5.2-0.2c0.9,1.7,2.4,3.1,4.2,3.9 c1.9,0.6,3.9,0.7,5.8,0.3c1,0,1.9-0.4,2.6-1.1C578.4,259.5,578.5,258.7,578.4,257.9z`,
      rightMount: `M454.8,283.9c-1.1,1.8-0.8,5.8-1,7.9l-1.1,9.6 c-0.3,3-0.7,5.9-0.9,8.9c-0.1,0.3,0,0.7,0.2,0.9v0c0.1,0.1,0.3,0.2,0.5,0.3c3.8,0.8,5.8-23.1,5.9-26.4c0.1-0.7-0.1-1.3-0.4-1.9 C457.1,282.3,455.4,282.8,454.8,283.9z`,
      leftMount: `M491,302.3c-3.1-5.1-3.4-10-4.6-15.6 c-0.1-1-0.5-1.9-1.1-2.6c-0.7-0.7-1.6-1.3-2.6-1.7l-2-0.9c-0.2-0.1-0.4-0.1-0.5-0.1c-0.2,0.1-0.3,0.2-0.4,0.3 c-2.4,3.2,0.2,7.4,1.5,10.5c0.4,1,0.8,1.9,1.2,2.9c1.3,3.1,3.2,5.9,5.4,8.3c0.2,0.3,0.4,0.5,0.7,0.8c0.5,0.5,1.3,0.6,1.9,0.2 C491.3,303.9,491.5,303,491,302.3z`,
      rightLens: `M443.7,269c-1.6-1.1-3.4-2-5.3-2.6 c-11-3.9-22.7-5.3-34.2-4.2c-13.7,1.4-28.1,7.3-34.9,20c-0.8,1.4-1.4,2.9-2,4.5c-7,19.6,7.9,42.1,25.4,50.3 c6.3,2.9,16.6,6.2,23.6,4.3c5.1-1.4,10-2.2,14.4-5.5c9.8-7.4,19.4-17.5,22.4-29.7c2.8-11.3,0.8-23.9-6.1-33.4 C446.1,271.2,445,270,443.7,269z`,
      leftLens: `M571.6,270c-0.1-3.3-1.3-6.4-3.2-9 c-8-13.1-27.4-16.6-41.6-15.6c-5.5,0.4-11.6,2.7-17,4.4c-5.4,1.8-10.8,4.2-14.9,8.2c-2.7,2.6-6,6.7-7.4,10.2 c-1,2.3-1.8,4.7-2.6,7.1c-0.5,1.6-0.8,3.3-1.1,4.9c-0.5,3.9-0.8,7.8,0.2,11.6c2.5,9.5,11.8,19.1,19.4,24.8 c8.6,6.4,19.2,10.4,30,8.8c5.9-1,11.6-3.2,16.7-6.4c9.9-6.3,17.7-16.4,20.3-27.8C571.8,284.2,572.2,277.1,571.6,270z`,
      rightArm: `M352.6,280.9c-0.5-0.7-1.2-2.4-2.2-2.3 c-0.2,1.4,0,2.9,0.7,4.2c0.5,1.6,1.4,3.1,2.4,4.5c0.5,0.4,1.1,0.7,1.7,1c0.1,0.1,0.3,0.1,0.4,0.1c0.5,0,0.8-0.3,0.8-0.8 c0.1-1.1-0.1-2.1-0.8-3C354.5,283.4,353.5,282.2,352.6,280.9z`,
      leftArm: `M597.5,240.5c0,0.1,0,0.7-0.1,0.7l-3,2 c-4,2.5-8,5.2-12.1,7.6c-1.9,1.1-3.6,2.4-5.1,3.9c-0.1,0.2-0.3,0.4-0.3,0.6c-0.2,0.7,0.4,0.2,1.1,1.2c0.2,0.3-0.4,0.7-0.1,0.8 c0.3,0-0.4,1.9-0.1,1.7c4-2.3,9.8-7,13.4-9.9C592.8,247.9,601.2,242.8,597.5,240.5z`,
      rightGlare: `M371.6,293c0,0,4-21.7,26.2-23.7`,
      leftGlare: `M514.2,255.4c0,0-25.9,4.2-25.9,28.8`,
    },
  };

  // Determine the fill colors for the glasses.
  const primary = type === 'none' ? '' : (
    fill?.primary ??
    defaultGlassesFills[type as keyof typeof defaultGlassesFills].primary ??
    ''
  ).toString();
  const secondary = type === 'none' ? '' : (
    fill?.secondary ??
    defaultGlassesFills[type as keyof typeof defaultGlassesFills].secondary ??
    ''
  ).toString();
  const tertiary = type === 'none' ? '' : (
    fill?.tertiary ??
    defaultGlassesFills[type as keyof typeof defaultGlassesFills].tertiary ??
    ''
  ).toString();

  /**
   * Constructs a glasses element with the specified path data.
   *
   * @param {Element} config - Parameters for constructing glasses elements.
   * @returns {Element} - An SVG element representing the glasses.
   */
  const constructGlasses = (config: Partial<Element>): Element => {
    const style = config.props
      ? config.props.fill === primary ||
        config.props.fill === secondary ||
        config.props.fill === tertiary ||
        config.props.stroke === primary ||
        config.props.stroke === secondary ||
        config.props.stroke === tertiary
        ? fillCursor(state)
        : config.props.style
      : {};

    const onClick = () => {
      if (!config.props) return null;
      if (
        state === STATE.COLOR &&
        (config.props.fill === primary || config.props.stroke === primary)
      )
        colorAction('primary');
      if (
        state === STATE.COLOR &&
        (config.props.fill === secondary || config.props.stroke === secondary)
      )
        colorAction('secondary');
      if (
        state === STATE.COLOR &&
        (config.props.fill === tertiary || config.props.stroke === tertiary)
      )
        colorAction('tertiary');
    };

    return {
      type: config?.type ?? 'path',
      props: { ...config?.props, style, onClick } ?? {},
    };
  };

  // Generate and return glasses elements based on the glasses type.
  switch (type) {
    case 'cyclops':
      return [
        constructGlasses({
          props: {
            fill: secondary,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.cyclopse.rightArm,
          },
        }),
        constructGlasses({
          props: {
            fill: secondary,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.cyclopse.leftArm,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: primary,
            strokeWidth: '3',
            d: d.cyclopse.lens,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.white,
            opacity: defaultOpacities.lighter,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.cyclopse.glare,
          },
        }),
      ];

    case 'elton':
      const eltonJewels = ({
        cx,
        cy,
        r,
      }: Pick<SVGProps<SVGElement>, 'cx' | 'cy' | 'r'>) =>
        constructGlasses({
          type: 'circle',
          props: { fill: defaultColors.white, cx, cy, r },
        });
      return [
        constructGlasses({
          props: {
            fill: primary,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.elton.leftArm,
          },
        }),
        constructGlasses({
          props: {
            fill: primary,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.elton.bridge,
          },
        }),
        constructGlasses({
          props: {
            fill: primary,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.elton.rightArm,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: primary,
            strokeWidth: '6',
            d: d.elton.leftLens,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: primary,
            strokeWidth: '6',
            d: d.elton.rightLens,
          },
        }),
        eltonJewels({ cx: '363.8', cy: '289.9', r: '1.5' }),
        eltonJewels({ cx: '359.8', cy: '286.9', r: '1.5' }),
        eltonJewels({ cx: '356.8', cy: '284.5', r: '1.2' }),
        eltonJewels({ cx: '354.3', cy: '282.5', r: '1' }),
        eltonJewels({ cx: '352.3', cy: '280.5', r: '0.8' }),
        eltonJewels({ cx: '574.9', cy: '260.3', r: '1.5' }),
        eltonJewels({ cx: '579.9', cy: '257.3', r: '1.5' }),
        eltonJewels({ cx: '584.9', cy: '254.3', r: '1.5' }),
        eltonJewels({ cx: '589.7', cy: '250.7', r: '1.5' }),
        eltonJewels({ cx: '593.7', cy: '247.7', r: '1.2' }),
        eltonJewels({ cx: '597.1', cy: '245', r: '1' }),
        eltonJewels({ cx: '367.8', cy: '292.9', r: '1.5' }),
        eltonJewels({ cx: '369.8', cy: '298.9', r: '1.5' }),
        eltonJewels({ cx: '374.8', cy: '302.9', r: '1.5' }),
        eltonJewels({ cx: '379.8', cy: '306.9', r: '1.5' }),
        eltonJewels({ cx: '384.8', cy: '310.9', r: '1.5' }),
        eltonJewels({ cx: '389.8', cy: '315.9', r: '1.5' }),
        eltonJewels({ cx: '389.8', cy: '322.9', r: '1.5' }),
        eltonJewels({ cx: '389.8', cy: '329.9', r: '1.5' }),
        eltonJewels({ cx: '389.8', cy: '336.9', r: '1.5' }),
        eltonJewels({ cx: '389.8', cy: '343.9', r: '1.5' }),
        eltonJewels({ cx: '394.8', cy: '347.9', r: '1.5' }),
        eltonJewels({ cx: '401.8', cy: '345.9', r: '1.5' }),
        eltonJewels({ cx: '407.8', cy: '341.9', r: '1.5' }),
        eltonJewels({ cx: '413.8', cy: '337.9', r: '1.5' }),
        eltonJewels({ cx: '419.8', cy: '333.9', r: '1.5' }),
        eltonJewels({ cx: '425.8', cy: '333.9', r: '1.5' }),
        eltonJewels({ cx: '431.8', cy: '336.9', r: '1.5' }),
        eltonJewels({ cx: '437.8', cy: '338.9', r: '1.5' }),
        eltonJewels({ cx: '443.8', cy: '340.9', r: '1.5' }),
        eltonJewels({ cx: '449.8', cy: '341.9', r: '1.5' }),
        eltonJewels({ cx: '453.8', cy: '337.9', r: '1.5' }),
        eltonJewels({ cx: '453.8', cy: '330.9', r: '1.5' }),
        eltonJewels({ cx: '451.8', cy: '324.9', r: '1.5' }),
        eltonJewels({ cx: '449.8', cy: '318.9', r: '1.5' }),
        eltonJewels({ cx: '448.8', cy: '312.9', r: '1.5' }),
        eltonJewels({ cx: '448.8', cy: '306.9', r: '1.5' }),
        eltonJewels({ cx: '451.8', cy: '301.9', r: '1.5' }),
        eltonJewels({ cx: '455.8', cy: '297.9', r: '1.5' }),
        eltonJewels({ cx: '461.8', cy: '297.9', r: '1.5' }),
        eltonJewels({ cx: '467.8', cy: '297.9', r: '1.5' }),
        eltonJewels({ cx: '473.8', cy: '297.9', r: '1.5' }),
        eltonJewels({ cx: '479.8', cy: '297.9', r: '1.5' }),
        eltonJewels({ cx: '459.8', cy: '292.9', r: '1.5' }),
        eltonJewels({ cx: '462.8', cy: '287.9', r: '1.5' }),
        eltonJewels({ cx: '463.8', cy: '282.9', r: '1.5' }),
        eltonJewels({ cx: '460.8', cy: '277.9', r: '1.5' }),
        eltonJewels({ cx: '454.8', cy: '276.9', r: '1.5' }),
        eltonJewels({ cx: '448.8', cy: '276.9', r: '1.5' }),
        eltonJewels({ cx: '442.8', cy: '276.9', r: '1.5' }),
        eltonJewels({ cx: '436.8', cy: '276.9', r: '1.5' }),
        eltonJewels({ cx: '431.8', cy: '274.9', r: '1.5' }),
        eltonJewels({ cx: '427.8', cy: '270.9', r: '1.5' }),
        eltonJewels({ cx: '424.8', cy: '265.9', r: '1.5' }),
        eltonJewels({ cx: '421.8', cy: '260.9', r: '1.5' }),
        eltonJewels({ cx: '418.8', cy: '256.9', r: '1.5' }),
        eltonJewels({ cx: '414.8', cy: '252.9', r: '1.5' }),
        eltonJewels({ cx: '408.8', cy: '252.9', r: '1.5' }),
        eltonJewels({ cx: '404.8', cy: '256.9', r: '1.5' }),
        eltonJewels({ cx: '402.8', cy: '262.9', r: '1.5' }),
        eltonJewels({ cx: '400.8', cy: '268.9', r: '1.5' }),
        eltonJewels({ cx: '398.8', cy: '274.9', r: '1.5' }),
        eltonJewels({ cx: '395.8', cy: '279.9', r: '1.5' }),
        eltonJewels({ cx: '390.8', cy: '281.9', r: '1.5' }),
        eltonJewels({ cx: '385.8', cy: '283.9', r: '1.5' }),
        eltonJewels({ cx: '380.8', cy: '284.9', r: '1.5' }),
        eltonJewels({ cx: '375.8', cy: '285.9', r: '1.5' }),
        eltonJewels({ cx: '370.8', cy: '287.9', r: '1.5' }),
        eltonJewels({ cx: '472.3', cy: '283.1', r: '1.5' }),
        eltonJewels({ cx: '474.9', cy: '288.9', r: '1.5' }),
        eltonJewels({ cx: '480.2', cy: '292.4', r: '1.5' }),
        eltonJewels({ cx: '485.5', cy: '296', r: '1.5' }),
        eltonJewels({ cx: '490.8', cy: '299.5', r: '1.5' }),
        eltonJewels({ cx: '496.3', cy: '304.1', r: '1.5' }),
        eltonJewels({ cx: '496.9', cy: '311.1', r: '1.5' }),
        eltonJewels({ cx: '497.5', cy: '318', r: '1.5' }),
        eltonJewels({ cx: '498.1', cy: '325', r: '1.5' }),
        eltonJewels({ cx: '498.7', cy: '332', r: '1.5' }),
        eltonJewels({ cx: '504', cy: '335.5', r: '1.5' }),
        eltonJewels({ cx: '510.8', cy: '332.9', r: '1.5' }),
        eltonJewels({ cx: '516.5', cy: '328.4', r: '1.5' }),
        eltonJewels({ cx: '522.1', cy: '323.9', r: '1.5' }),
        eltonJewels({ cx: '527.7', cy: '319.4', r: '1.5' }),
        eltonJewels({ cx: '533.7', cy: '318.9', r: '1.5' }),
        eltonJewels({ cx: '539.9', cy: '321.4', r: '1.5' }),
        eltonJewels({ cx: '546.1', cy: '322.8', r: '1.5' }),
        eltonJewels({ cx: '552.2', cy: '324.3', r: '1.5' }),
        eltonJewels({ cx: '558.3', cy: '324.8', r: '1.5' }),
        eltonJewels({ cx: '561.9', cy: '320.4', r: '1.5' }),
        eltonJewels({ cx: '561.3', cy: '313.5', r: '1.5' }),
        eltonJewels({ cx: '558.8', cy: '307.7', r: '1.5' }),
        eltonJewels({ cx: '556.3', cy: '301.9', r: '1.5' }),
        eltonJewels({ cx: '554.8', cy: '296', r: '1.5' }),
        eltonJewels({ cx: '554.2', cy: '290', r: '1.5' }),
        eltonJewels({ cx: '556.8', cy: '284.7', r: '1.5' }),
        eltonJewels({ cx: '560.4', cy: '280.4', r: '1.5' }),
        eltonJewels({ cx: '564', cy: '275.1', r: '1.5' }),
        eltonJewels({ cx: '566.5', cy: '269.8', r: '1.5' }),
        eltonJewels({ cx: '567.1', cy: '264.8', r: '1.5' }),
        eltonJewels({ cx: '563.7', cy: '260', r: '1.5' }),
        eltonJewels({ cx: '557.6', cy: '259.6', r: '1.5' }),
        eltonJewels({ cx: '551.6', cy: '260.1', r: '1.5' }),
        eltonJewels({ cx: '545.7', cy: '260.6', r: '1.5' }),
        eltonJewels({ cx: '539.7', cy: '261.1', r: '1.5' }),
        eltonJewels({ cx: '534.5', cy: '259.6', r: '1.5' }),
        eltonJewels({ cx: '530.2', cy: '256', r: '1.5' }),
        eltonJewels({ cx: '526.8', cy: '251.2', r: '1.5' }),
        eltonJewels({ cx: '523.3', cy: '246.5', r: '1.5' }),
        eltonJewels({ cx: '520', cy: '242.8', r: '1.5' }),
        eltonJewels({ cx: '515.7', cy: '239.2', r: '1.5' }),
        eltonJewels({ cx: '509.7', cy: '239.7', r: '1.5' }),
        eltonJewels({ cx: '506.1', cy: '244', r: '1.5' }),
        eltonJewels({ cx: '504.6', cy: '250.2', r: '1.5' }),
        eltonJewels({ cx: '503.1', cy: '256.3', r: '1.5' }),
        eltonJewels({ cx: '501.6', cy: '262.5', r: '1.5' }),
        eltonJewels({ cx: '499.1', cy: '267.7', r: '1.5' }),
        eltonJewels({ cx: '494.3', cy: '270.1', r: '1.5' }),
        eltonJewels({ cx: '489.5', cy: '272.6', r: '1.5' }),
        eltonJewels({ cx: '484.6', cy: '274', r: '1.5' }),
        eltonJewels({ cx: '479.7', cy: '275.4', r: '1.5' }),
        eltonJewels({ cx: '474.9', cy: '277.9', r: '1.5' }),
        eltonJewels({ cx: '570.9', cy: '262.3', r: '1.5' }),
        constructGlasses({
          props: {
            fill: defaultColors.white,
            opacity: defaultOpacities.lightest,
            d: d.elton.leftGlare,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.white,
            opacity: defaultOpacities.lightest,
            d: d.elton.rightGlare,
          },
        }),
      ];

    case 'shades':
      return [
        constructGlasses({
          props: {
            fill: primary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.bridge,
          },
        }),
        constructGlasses({
          props: {
            fill: primary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.rightHinge,
          },
        }),
        constructGlasses({
          props: {
            fill: primary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.leftHinge,
          },
        }),
        constructGlasses({
          props: {
            fill: tertiary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.rightMount,
          },
        }),
        constructGlasses({
          props: {
            fill: tertiary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.leftMount,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: primary,
            d: d.versaceShades.rightLens,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: primary,
            d: d.versaceShades.leftLens,
          },
        }),
        constructGlasses({
          props: {
            fill: secondary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.rightArm,
          },
        }),
        constructGlasses({
          props: {
            fill: secondary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.leftArm,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.white,
            stroke: stroke ? defaultColors.neutral[300] : '',
            opacity: defaultOpacities.lighter,
            d: d.versaceShades.rightGlare,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.white,
            stroke: stroke ? defaultColors.neutral[300] : '',
            opacity: defaultOpacities.lighter,
            d: d.versaceShades.leftGlare,
          },
        }),
      ];

    case 'shore':
      return [
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.shore.rightArm,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: stroke ? defaultColors.neutral[300] : '',
            d: d.shore.leftArm,
          },
        }),
        constructGlasses({
          props: {
            fill: defaultColors.black,
            stroke: primary,
            strokeWidth: '3',
            d: d.shore.lens,
          },
        }),
        constructGlasses({ props: { fill: '', stroke: primary, d: d.shore.frame } }),
        constructGlasses({
          props: {
            fill: defaultColors.white,
            opacity: defaultOpacities.lighter,
            d: d.shore.glare,
          },
        }),
      ];

    case 'versace':
      return [
        constructGlasses({
          props: {
            fill: secondary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.bridge,
          },
        }),
        constructGlasses({
          props: {
            fill: secondary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.rightHinge,
          },
        }),
        constructGlasses({
          props: {
            fill: secondary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.leftHinge,
          },
        }),
        constructGlasses({
          props: {
            fill: tertiary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.rightMount,
          },
        }),
        constructGlasses({
          props: {
            fill: tertiary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.leftMount,
          },
        }),
        constructGlasses({
          props: {
            fill: 'none',
            stroke: primary,
            strokeWidth: '2',
            d: d.versaceShades.rightLens,
          },
        }),
        constructGlasses({
          props: {
            fill: 'none',
            stroke: primary,
            strokeWidth: '2',
            d: d.versaceShades.leftLens,
          },
        }),
        constructGlasses({
          props: {
            fill: primary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.rightArm,
          },
        }),
        constructGlasses({
          props: {
            fill: primary,
            stroke: defaultColors.neutral[300],
            d: d.versaceShades.leftArm,
          },
        }),
      ];

    case 'none':
      return []; // Return an empty array for no glasses.
  }
};
