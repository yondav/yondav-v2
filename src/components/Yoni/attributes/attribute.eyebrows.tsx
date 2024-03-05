import { createElement, type SVGProps, useMemo } from 'react';

import {
  constructElement,
  DEFAULTCOLOR,
  EYEBROWTYPE,
  type ELEMENTTYPE,
  type YoniAttributeProps,
} from '../../../contexts';

export default function Eyebrows({ type, fill }: YoniAttributeProps<EYEBROWTYPE>) {
  const elementId = useMemo(() => `eyebrows${type ? `-${type}` : ''}`, [type]);

  const elements: {
    type: ELEMENTTYPE;
    props: SVGProps<SVGElement>;
  }[] = useMemo(() => {
    if (!type) return [];

    const browFill = fill?.primary ?? DEFAULTCOLOR.EYEBROWS;

    const eyebrowProps = (props: { fill?: string; d: string }) => ({
      fill: props?.fill ?? browFill,
      d: props.d,
    });

    const brows = {
      straight: {
        right: eyebrowProps({
          d: `M443.3,259.9c-0.4-0.2-0.9-0.4-1.3-0.6c-0.6-0.1-1.1-0.2-1.7-0.1c-4,0-8,0-12,0 c-6.8-0.1-13.6-0.1-20.4,0.1c-5.7,0.2-11.1,1.3-16.8,2.3c-5.2,0.9-7.7,4.9-12.1,7.4c-1.3,0.6-2.5,1.4-3.6,2.3l-0.1,0.1 c-1.2,1.1-5.1,5.6-3.2,7.4c0.5,0.4,1.2,0.5,1.8,0.5c3.3,0,6.6,0,9.9,0c2.8,0,6,0.6,8.3-1.2c6.1-4.7,15.7-6.1,23.2-6.5 c8.7-0.4,17.4,0.9,25.9,2.2c2.7,0.6,5.5-0.2,7.5-2.1c3.4-2.4,4.2-4.1,1.2-7.1C447.9,262.7,445.7,261.2,443.3,259.9z`,
        }),
        left: eyebrowProps({
          d: `M563.4,247.8c-0.2-0.4-0.4-0.7-0.8-1c-0.5-0.4-1.1-0.6-1.7-0.8c-13-3.8-28.3-6.7-41.8-4.6 c-11.3,1.8-22,6.4-31.2,13.2c-2.5,1.8-5.6,3.6-7.5,5.9c4.4,3.1,10.2,3.7,15.1,1.5c10.8-4.6,22.2-7.8,33.8-9.5 c7-0.8,14.2-1.1,21.2-0.8c3.2,0.1,7.6,1.1,10.7,0.3c1.9-0.5,1.7,0.4,2.5-1.4C563.9,249.8,563.8,248.7,563.4,247.8z`,
        }),
      },
      raised: {
        right: eyebrowProps({
          d: `M406.7,246.3c-3.7,1.4-11.3,5.1-16.1,11.4c-7.1,9.5-14.6,13.1-15.2,13.6l-0.1,0.1 c-1.2,1.1-5.1,5.6-3.2,7.4c0.5,0.4,1.2,0.5,1.8,0.5c3.3,0,11.1-1.8,13.4-3.6c6.1-4.7,9.2-13,23.6-15c8.6-1.2,21.7,11.8,30.3,13.1 c2.7,0.6,5.5-0.2,7.5-2.1c3.4-2.4,5.2-5.6,1.2-7.1C432.3,258.4,413.1,243.9,406.7,246.3z`,
        }),
        left: eyebrowProps({
          d: `M563.4,247.8c-0.2-0.4-0.4-0.7-0.8-1c-0.5-0.4-1.1-0.6-1.7-0.8c-13-3.8-24.4-18.7-37.8-16.6 c-11.3,1.8-26,18.4-35.2,25.3c-2.5,1.8-5.6,3.6-7.5,5.9c4.4,3.1,10.2,3.7,15.1,1.5c10.8-4.6,19.2-16.9,30.9-18.6 c7-0.8,17.1,8,24.2,8.4c3.2,0.1,7.6,1.1,10.7,0.3c1.9-0.5,1.7,0.4,2.5-1.4C563.9,249.8,563.8,248.7,563.4,247.8z`,
        }),
      },
      uni: eyebrowProps({
        d: `M438.9,259.3c-3.2,0-7.9,0-10.5,0c-6.8-0.1-13.6-0.1-20.4,0.1c-5.7,0.2-11.1,1.3-16.8,2.3 c-5,0.9-7.5,4.6-11.6,7.1c-0.3,0.2-0.7,0.4-1,0.6c-1.1,0.6-2.1,1.3-3.1,2l-0.1,0.1c-1.2,1.1-5.1,5.6-3.2,7.4 c0.5,0.4,1.2,0.5,1.8,0.5c3.3,0,6.6,0,9.9,0c2.8,0,6,0.6,8.3-1.2c6.1-4.7,15.7-6.1,23.2-6.5c8.7-0.4,24.8-1.7,35-2.3 c2.1-0.1,11.7-0.7,16.7-0.9c9.7-0.5,24.1-4.4,28.5-6.2c10.9-4.4,22.2-7.8,33.8-9.5c7-0.8,14.2-1.1,21.2-0.8 c3.2,0.1,7.6,1.1,10.7,0.3c1.9-0.5,1.7,0.4,2.5-1.4c0.3-1,0.2-2-0.3-3c-0.2-0.4-0.4-0.7-0.8-1c-0.5-0.4-1.1-0.6-1.7-0.8 c-13-3.8-28.3-6.7-41.8-4.6c-10.6,1.7-26.7,10.1-48.2,15.8C453.9,261.7,441.4,259.3,438.9,259.3z`,
      }),
    };

    switch (type) {
      case EYEBROWTYPE.BUSHY:
        return [
          constructElement({ svgProps: brows.straight.right }),
          constructElement({ svgProps: brows.straight.left }),
        ];

      case EYEBROWTYPE.SURPRISED:
        return [
          constructElement({ svgProps: brows.raised.right }),
          constructElement({ svgProps: brows.raised.left }),
        ];

      case EYEBROWTYPE.SUSPICIOUS:
        return [
          constructElement({ svgProps: brows.straight.right }),
          constructElement({ svgProps: brows.raised.left }),
        ];

      case EYEBROWTYPE.UNI:
        return [constructElement({ svgProps: brows.uni })];

      default:
        return [];
    }
  }, [fill, type]);

  return (
    <g id={elementId} key={elementId}>
      {elements.map((element, i) =>
        createElement(element.type, { ...element.props, key: i })
      )}
    </g>
  );
}
