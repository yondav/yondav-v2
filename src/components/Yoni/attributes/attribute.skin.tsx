import { createElement, type SVGProps, useMemo } from 'react';

import {
  constructElement,
  DEFAULTCOLOR,
  ELEMENTTYPE,
  ELEMENTOPACITY,
  type YoniAttributeProps,
} from '../../../contexts';

export default function Skin({ fill }: YoniAttributeProps<'skin'>) {
  const elements: {
    type: ELEMENTTYPE;
    props: SVGProps<SVGElement>;
  }[] = useMemo(() => {
    const skinFill = fill?.primary ?? DEFAULTCOLOR.SKIN;
    const skinStroke = DEFAULTCOLOR.STROKE;
    const skinShadow = DEFAULTCOLOR.SHADOW;

    const skinProps = (props?: { fill?: string; stroke?: string; opacity?: number }) => ({
      fill: props?.fill ?? 'none',
      stroke: props?.stroke ?? skinStroke,
      opacity: props?.opacity ?? 1,
    });

    return [
      constructElement({
        svgProps: {
          ...skinProps({ fill: skinFill }),
          d: `M885.4,989.3c2.2-28.2-4.2-59.8-7.7-87.8c-2.4-19.2-0.4-38.7-3.8-57.8 c-0.8-4.3-2.9-8.2-5.7-11.9c0,0,13.4-25.4,8.2-58s-12.3-47.5-7.6-87c4.7-39.5-42.3-132.2-51.8-147.1c-9.5-14.9-38.7-25.8-43.7-27.4 c0,0-44.9-9.9-77.5-19.5c-27.2-7.9-55.9-9.1-83.6-3.2c-6.7,1.4-14.1,3.1-22.1,5.2l-0.6,0.1c0.2-2.3,0.1-4.7,0-7 c-0.9-18.4-4.5-42.7-4.1-62c0.7-1.5,1.4-3,2-4.6l0.2-0.6c5.4-12.5,11-25.5,13.4-39.1c2.3-13.1,2.6-26,2.2-39.6l0-1.3 c0-0.6,0-1.4,0-2.1l0.1-17.3c0.4,5,0.6,10,0.6,15.2c0,3.8-1.3,13.2,8.9,7.4c10.6-6,7.2-20,6.3-29.7c-1.2-12.7,1-25.6,3.3-38 c0.5-2.4,0.8-4.9,0.8-7.4c-0.2-3.2-0.7-6.3-1.5-9.4l-3-12.9c-0.3-2-1.1-3.8-2.3-5.4c-1.5-1.7-3.9-2.4-6.1-1.8 c-2.5,0.8-4.8,2.4-6.3,4.5c0,0-8.5-53.5-18.5-73.7c-9.7-19.6-32.3-50.5-69.3-58.2c-33.2-6.8-99.5,2.5-130.8,20.3 c-26.9,15.3-35.7,30.2-45.2,50c-8.9,18.4,3.1,70.4,5,78.5c2.5,10.5-1.2,20.4-1.2,20.4c-1.6-1.8-4.1-0.6-5.9,0.5 c-1.5,0.9-5.2,4.5-3.6,7.1c0.6,0.9,0.2,0.4,0.4,0.6c0.9,1.4,1.3,3,1.3,4.6c-0.1,4.7,0.1,9.4,0.5,14.1c0,0.4,0.1,0.7,0.1,1.1 c0.2,1.6,0.8,3.2,1.5,4.6c0,0,0,0.1,0,0.1c1.2,2.3,2.4,4.6,3.5,7c0.5,1.3,0.8,2.6,1,3.9c0.5,2.2,0.9,4.5,1.3,6.7 c1.5,3.3,3.6,6.8,4.2,10.4c1,5.5,2.1,11,3.3,16.4c0.6,2.6,0.8,5.2-0.3,7.7c-1,2.3-1.2,5-0.5,7.4c0.7,3,2.2,5.8,4.4,8.1 c1.3,1.2,2.9,1.9,4.6,2.2c0.8,0.2,1.7,0.3,2.5,0.4l0,0c1.1,0.1,1.9-0.9,1.8-1.9c-0.3-2.2,0.1-5.2,0.1-5.2c0.1,0.7,0.3,1.4,0.4,2.2 c0.7,3.2,1.8,6.4,2.5,8.8c0.2,0.6,0.4,1.1,0.5,1.6c3.8,11.9,9.1,23.1,14.3,34c0.9,1.9,1.8,3.7,2.6,5.6c1.3,2.6,2.9,5,4.7,7.3 c1.3,1.7,2.5,3.5,3.7,5.3c3,5,3.5,6.1,6.8,10.8c0.1,0.1,0.1,0.3,0.1,0.4c-0.1,3.3-1.3,44.6-2.1,45.2c-4.4,3.2-12-3.4-23.2-2 c-56.5,7.5-142.6,41.6-142.6,41.6c-32.3,13.9-79.3,58.9-105.3,139.1S96.4,836.1,96.4,836.1c-0.2,0.4-5.4,24.1-6.8,34.9 c-1.6,12.5-2.5,25.1-1.2,37.7c0.6,5.9,1.7,11.8,2.3,17.8c1.2,11.2,0.9,22.5,0.6,33.7c-0.2,10.5,1.7,20.8,3.4,31.2 c1.3,8.3,7,6.8,13.6,6.8h88c-2.3-16.6-5.1-33.1-6.7-49.8c-1.4-14.1-3.1-29.7-0.1-43.7c1-4.5,1.9-8.9,2.9-13.4 c0,0,17.5-18.9,25.5-55.3c4-18,21.5-59.5,21.5-99c0,0,4,46.2,11.3,57.6c5.8,8.9,8.7,39.7,13.5,58.2c18,70.3,35.5,145.4,35.5,145.4 h433.8c0,0,11-34.1,10.5-122.8c-0.3-58.1-4.6-55.2,3.5-106.2l-2.2-55.5c1.5,30,4.8,63.5,8,80.9c5.6,30.5,22.9,51,22.9,51 c0.5,23.8,4.3,47.5,6.2,71.5c2,24.2,2.7,50,8.5,73.6l-4,8h59.7c11.4,0,24,1.5,35.3,0c3.9-0.5,5.8-0.4,6.9-1.2 C890,996.6,885,994.6,885.4,989.3z M493.2,513.3C493.2,513.3,493.2,513.3,493.2,513.3c0.7,0,1.3-0.1,2-0.2 C494.6,513.2,493.9,513.3,493.2,513.3z M521.4,505.6c1.6-0.8,3.2-1.7,4.8-2.7C524.6,503.8,523,504.7,521.4,505.6z M744.4,693.6 L744.4,693.6C744.4,693.6,744.4,693.6,744.4,693.6L744.4,693.6z`,
        },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M349.7,811.6c0,0,86.1-16.9,126.8-39' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M609.5,778.9c0,0,40.1,18.8,99.7,26' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M413.1,542c0,0,28.4,23.4,41.9,24.5' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M615.4,528.1c0,0-24.8,27.1-56.5,38.4' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M334.5,932.5c0,0,13.9,35,15.3,47.4' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M709.2,909.9c0,0-13.6,35-14.7,54.2' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M865,778.9c0,0-9,26-7.9,38.4' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M115.1,826.3c0,0-3.4,19.2-9,30.5' },
      }),
      constructElement({
        svgProps: {
          ...skinProps({ fill: skinFill }),
          d: 'M400.2,452.7c0,0,31.9,44.6,58.1,54c26.2,9.4,47,8.6,63.1-1.1c16.1-9.8,49.7-42,64-79.6',
        },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M765.4,532.3c0,0,24.7-2.7,32.3,10.3' },
      }),
      constructElement({
        svgProps: { ...skinProps(), d: 'M286.1,542.3c0,0-35.6,4.5-39,19.2' },
      }),
      constructElement({
        type: ELEMENTTYPE.POLYGON,
        svgProps: {
          ...skinProps({
            fill: skinShadow,
            stroke: 'none',
            opacity: ELEMENTOPACITY.LIGHTEST,
          }),
          points: '786.3,881.2 817.3,881.2 862.3,868.2',
        },
      }),
      constructElement({
        type: ELEMENTTYPE.POLYGON,
        svgProps: {
          ...skinProps({
            fill: skinShadow,
            stroke: 'none',
            opacity: ELEMENTOPACITY.LIGHTEST,
          }),
          points: '175.8,929.7 151.8,927.7 144.7,928.9 177.8,932.7',
        },
      }),
      constructElement({
        type: ELEMENTTYPE.POLYGON,
        svgProps: {
          ...skinProps({
            fill: skinShadow,
            stroke: 'none',
            opacity: ELEMENTOPACITY.LIGHTEST,
          }),
          points: '139.8,929.7 144.7,928.9 116.8,925.7',
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps({
            fill: skinShadow,
            stroke: 'none',
            opacity: ELEMENTOPACITY.LIGHTEST,
          }),
          d: `M342.3,290c-0.2-0.1-0.4-0.2-0.7-0.2c-0.7,0-1.3,0.6-1.3,1.4l6,15v-8c0-1,0-1.9-0.2-2.9 C345.7,293.1,344.3,291.1,342.3,290z`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps({
            fill: skinShadow,
            stroke: 'none',
            opacity: ELEMENTOPACITY.LIGHTEST,
          }),
          d: `M347.5,318.8l-0.7,5.9l6-9H351C349.2,315.7,347.7,317.1,347.5,318.8z`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps({
            fill: skinShadow,
            stroke: 'none',
            opacity: ELEMENTOPACITY.LIGHTEST,
          }),
          d: `M616.5,252.2c-0.3-2.6,0.5-8.5-3.9-5.2c-2.2,1.7-3.9,4.9-5.3,7.3l10.9,20c0.7-1.4,1.2-2.8,1.6-4.3 c0.6-2.9-0.7-5.8-1.4-8.5C617.6,258.3,616.9,255.2,616.5,252.2z`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '54.5217,54.5217',
          d: `M414.5,401.9c-3.6-2.5-2.9-7.8-2.1-12.1 c2.6-14.5,12.7-23.9,21.9-34.5`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '73.7411,73.7411',
          d: `M516.3,334.2c8.1,4.1,12.3,12,20.3,16.4 c3,1.5,5.8,3.4,8.3,5.6c4.6,4.2,7.2,10.2,8.5,16.4s1.1,12.4,0.8,18.7`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '117.2691,117.2691',
          d: `M496.2,324.3c2,3,4.9,5.2,8.2,6.6 c8.6,3.5-16.5,28.7-20.8,33.7c-4.8,5.5-10.8,3.9-15.8,0.2c-3.2-2.4-4.9-2.8-8.2-5c-3.8-2.5-5.3-3.9-8.4-6.6 c-1.7,1.8-4.7-0.4-4.9-2.8c-0.2-2-0.4-2.9,0.5-4.6c0.3-0.6,0.7-1.1,1.1-1.6l7.3-8`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '47.7468,47.7468',
          d: `M388.3,308.2c6.5,2.4,11.4,4.2,18.5,4 c10.4-0.3,18.4-2,27.5-7`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '29.6864,29.6864',
          d: `M394.3,315.2c6.2-0.1,12.4,0,18.6,0 c3.7,0,8-0.2,10.2-3.2`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '62.5474,62.5474',
          d: `M494.3,290.2c19.5,9,40.8,11.8,59.8-0.4`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '59.0472,59.0472',
          d: `M385.5,298.3l4.4-7.1c3.2-5.3,9-8,14.7-10.1 c8.5-3.1,16-4,24.8-1.9l7,2`,
        },
      }),
      constructElement({
        svgProps: {
          ...skinProps(),
          strokeDasharray: '57.8259,57.8259',
          d: `M499.3,268.2c4.5-3.4,8-5.4,13.6-6.6 c13.8-3,28.8,2.3,40.4,9.6`,
        },
      }),
    ];
  }, [fill]);

  return (
    <g id='skin' key='skin'>
      {elements.map((element, i) =>
        createElement(element.type, { ...element.props, key: i })
      )}
    </g>
  );
}
