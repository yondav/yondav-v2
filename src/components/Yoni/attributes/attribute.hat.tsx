import { createElement, type SVGProps, useMemo } from 'react';

import {
  constructElement,
  DEFAULTCOLOR,
  ELEMENTOPACITY,
  HATTYPE,
  type ELEMENTTYPE,
  type YoniAttributeProps,
} from '../../../contexts';

export default function Hat({ type, fill }: YoniAttributeProps<HATTYPE>) {
  const elementId = useMemo(() => `hat${type ? `-${type}` : ''}`, [type]);

  const elements: {
    type: ELEMENTTYPE;
    props: SVGProps<SVGElement>;
  }[] = useMemo(() => {
    if (!type) return [];

    let hatShadow = DEFAULTCOLOR.STROKE;
    let hatPrimary = fill?.primary;
    let hatSecondary = fill?.secondary;

    const beanieShades = {
      1: {
        fill: 'none',
        stroke: DEFAULTCOLOR.STROKE,
        strokeWidth: '0.5',
        opacity: ELEMENTOPACITY.LIGHT,
      },
      2: { fill: DEFAULTCOLOR.STROKE, opacity: ELEMENTOPACITY.LIGHT },
    };

    const cowboyShades = {
      1: {
        fill: DEFAULTCOLOR.SHADOW,
        opacity: ELEMENTOPACITY.LIGHT,
      },
    };

    const hatProps = (props?: {
      fill?: string;
      stroke?: string;
      opacity?: number;
      strokeWidth?: string;
      strokeMiterlimit?: string;
    }) => ({
      fill: props?.fill ?? hatShadow,
      stroke: props?.stroke ?? 'none',
      opacity: props?.opacity ?? ELEMENTOPACITY.LIGHT,
      strokeWidth: props?.strokeWidth ?? '',
      strokeMiterlimit: props?.strokeMiterlimit ?? '',
    });

    switch (type) {
      case HATTYPE.BASEBALLCAP:
        hatPrimary = fill?.primary ?? DEFAULTCOLOR.HATBASEBALLCAP1;
        hatSecondary = fill?.secondary ?? DEFAULTCOLOR.HATBASEBALLCAP2;

        return [
          constructElement({
            svgProps: {
              ...hatProps({ fill: hatPrimary, opacity: 1 }),
              d: `M438.6,85.3c2.1,0.8,3.8,2.4,5.7,3.7c11.8,8.2,26-1.4,39,2.1c2.7,0.7,5.3,1.8,8,2.1 c2.7,0.1,5.4-0.2,8-0.8c14.7-2.8,29.9-0.5,43.2,6.5c15.1,8,29.6,28.9,37.3,43.8c8.7,16.8,18.5,34.5,23.3,52.8 c2.3,9,1.2,18.1,2.5,27.4c0.4,3-0.3,14.3-2.1,16.8c-1.8-5.1-3-18.4-5.1-23.5l-4.5-12.7c-0.3-0.9-0.7-1.7-1.2-2.5l-6.3-10.8l-2-6 l-3-4l1-4c1.4-5.6-1.2-13.9-4.7-18c-2.7-3-5.9-5.6-9.3-7.8c-69.3-46-168.7-42.1-228.4,10.3c-1.2,1.3-2.3,2.7-3.5,4 c-1.9-6.6,3.4-14,8.5-18.6c8-7.3,16.7-13.8,25.8-19.7c7.5-4.8,16.5-8.4,22-15.7c2.1-2.7,3.4-5.9,5.4-8.7 c7.2-10.4,20.5-14.1,32.8-16.7c2.3-0.5,4.6-1,6.9-0.4C438,85.1,438.3,85.2,438.6,85.3z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps({ fill: hatSecondary, opacity: 1 }),
              d: `M582.3,176.2c0.2-0.7,0.3-1.5,0.3-2.3c0-0.2,0-0.4,0-0.6c-0.3-4.8-1.6-9.6-4.3-13.6 c-1.8-2.6-4.1-4.9-6.6-6.8c-0.2-0.1-0.4-0.3-0.6-0.4c-0.1-0.1-0.3-0.2-0.4-0.3c-0.8-0.6-1.6-1.1-2.5-1.6c-2.2-1.4-4.3-2.8-6.5-4.1 c-1.2-0.7-2.3-1.4-3.5-2C489.7,105,396.9,110.8,340,160.6c-0.1,0.1-0.3,0.2-0.4,0.4c-1.3,1.3-3.7,3.5-3.8,3.6 c-11.1,12.8-20.2,29.7-24.5,46.2c-2.8,10.5-3,23.1,4.9,30.5c4.5,4.2,10.8,5.7,16.9,6.5c3,0.4,6.3,0.5,8.8-1.3 c3.6-2.7,5.6-9.7,7.4-13.7c2.5-5.7,4.6-11.6,6.7-17.5c4.7-13.4,9-28,18.2-39.2c7.6-9.2,17.5-16.2,28.1-21.5 c21.9-10.8,46.9-14.6,71-15.3c2.3-0.1,4.5-0.1,6.8-0.1c13.1-0.1,26.6-0.5,39.2,3.6c12.6,4.2,23.6,11.9,32.8,21.3 c7.1,7.2,14.8,13.9,24.7,15.7C579.3,180.1,581.7,178.6,582.3,176.2L582.3,176.2z`,
            },
          }),
        ];

      case HATTYPE.BEANIE:
        hatPrimary = fill?.primary ?? DEFAULTCOLOR.HATBEANIE1;

        return [
          constructElement({
            svgProps: {
              ...hatProps({ fill: hatPrimary, opacity: 1 }),
              d: `M604,202.5c-1.3-15.7-5.2-26.1-8.1-32c-1.6-11.3-4.5-25.4-9.4-31.4 c-8.9-10.9-7.5-5.4-10.1-7.7c-3.9-3.4-3.2-16.7-7.5-20.8c-3.7-3.6-15.9-13.4-24.6-18.3c-8.7-4.9-28.7-28.9-49.9-24.7 c-21.2,4.2-25.1-8.5-39.2-8.5s-38.6,9.3-43.8,23.7s-14.6,15.2-23,24.6s-13.9,0.8-24.3,12.3c-10.4,11.6-27.3,32.7-31.7,42.8 c-2.3,5.3-1.1,17.6,0.2,28.5c-0.4,0.4-0.6,0.9-0.6,1.4l0,17c0,3.4,10.6,65.5,13.5,63.9c15.5-8.4,53-59.9,112.9-68.8 c62-9.1,127.4,24.9,146.9,36.2C608.4,242.5,604.3,206.1,604,202.5z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M385.9,114.2c0,0,27.4-5.6,35.3,2c7.9,7.6,15,10.4,15,10.4`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M393.8,123.2c0,0,28,3.4,36.7,9.3`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M337.6,176.3c0,0,28-14.4,35.3-14.7`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M348,161.6c0,0,19.2-11.6,24.8-10.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M355.2,146.7c0,0,5.3-9,16.4-14.1c11.1-5.1,14.2-9.3,14.2-9.3`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M409,146.7c0,0,36.3-10.4,55.3-8.5c19,2,39.9-0.2,39.9-0.2`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M464.3,67.6c0,0,2.6,11,16,15.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M430.5,80.9c0,0-10.2,2.8-10.2,13s-1.4,9.6-1.4,9.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M583.8,149.2c0,0-1.7-10.4-11.9-12.7`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M556.7,108.6c0,0,9.3,7.1,9.3,15.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[2]),
              d: `M548.5,103.5c0,0-37.3,18.3-34.4,11c2.8-7.3,13.8-26.8,11.9-28.5`,
            },
          }),
          constructElement({
            svgProps: { ...hatProps(beanieShades[1]), d: `M587.7,167c0,0,14,51.9,14,67` },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M585.2,166c0,0,14.7,48.4,14.7,67.6`,
            },
          }),
          constructElement({
            svgProps: { ...hatProps(beanieShades[1]), d: `M589.7,168c0,0,14,53.9,14,69` },
          }),
          constructElement({
            svgProps: { ...hatProps(beanieShades[1]), d: `M591.7,169c0,0,11,37.2,13,63` },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M583.2,167c0,0,14.7,46.4,14.7,65.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M580.2,165c0,0,15.7,47.4,15.7,66.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M593.8,171c0,0,8,28.8,8.2,34.5`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M578.2,165c0,0,14.7,45.4,14.7,64.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M574.2,164c0,0,14.7,44.4,14.7,63.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M572.2,163c0,0,13.7,43.4,13.7,62.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M570.2,163c0,0,13.7,43.4,13.7,62.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M581.8,224.5c0-19.2-13.7-62.6-13.7-62.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M579.8,223.5c0-19.2-13.7-62.6-13.7-62.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M564.2,161c0,0,13.7,42.4,13.7,61.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M562.2,161c0,0,13.7,40.4,13.7,59.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M560.2,161c0,0,13.7,39.4,13.7,58.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M558.2,160c0,0,13.7,40.4,13.7,59.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M556.2,159c0,0,13.7,40.4,13.7,59.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M554.2,159c0,0,13.7,39.4,13.7,58.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M552.2,159c0,0,13.7,38.4,13.7,57.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M550.2,159c0,0,13.7,37.4,13.7,56.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M548.2,158c0,0,13.7,37.4,13.7,56.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M546.2,157c0,0,13.7,36.4,13.7,55.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M544.2,157c0,0,13.7,35.4,13.7,54.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M542.2,157c0,0,13.7,35.4,13.7,54.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M540.2,157c0,0,13.7,35.4,13.7,54.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M538.2,157c0,0,12.7,33.4,12.7,52.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M536.2,156c0,0,12.7,33.4,12.7,52.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M534.9,156.3c0,0,11,32,11,51.2`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M533.2,156c0,0,10.7,31.4,10.7,50.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M531.2,156c0,0,9.7,30.4,9.7,49.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M529.2,156c0,0,9.7,29.4,9.7,48.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M527.2,156c0,0,9.7,29.4,9.7,48.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M525.2,155c0,0,9.7,29.4,9.7,48.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M523.2,155c0,0,8.7,28.4,8.7,47.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M521.2,155c0,0,8.7,27.4,8.7,46.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M519.2,155c0,0,8.7,27.4,8.7,46.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M517.2,155c0,0,8.7,26.4,8.7,45.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M515.2,154c0,0,8.7,27.4,8.7,46.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M513.2,155c0,0,8.7,25.4,8.7,44.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M511.2,154c0,0,8.7,25.4,8.7,44.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M509.2,154c5.2,25.4,8.7,25.3,8.7,44.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M507.2,154c0,0,7.6,24.2,8.7,43.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M505.2,154c0,0,7.8,24.7,8.7,43.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M502.2,154c0,0,7.7,23.5,9.7,42.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M499.2,154c0,0,6,24,10.7,41.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M334.8,191.4c0,0-0.8,21.7,2.3,38.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M336.4,189.8c0,0,1.3,59.8,7.3,78.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M338.3,189.2c0,0,1,57.8,7,76.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M340.2,188.6c0,0,1,58.8,7,77.1`,
            },
          }),
          constructElement({
            svgProps: { ...hatProps(beanieShades[1]), d: `M342.1,187c0,0,0,57.8,6,76.1` },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M344,186.3c0,0-0.3,56.6,5.6,74.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M345.6,184.8c0,0-0.3,57.6,5.6,75.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M346.9,184.7c0,0-0.1,56.8,5.8,75`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M348.4,183.8c0,0-0.1,57.1,5.9,75.3`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M350.3,183.2c0,0-0.1,55.8,5.8,74`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M352.2,181.6c0,0-0.4,55.8,5.5,74.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M354.1,181c0,0-0.7,54.9,5.2,73.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M355.7,180.4c0,0-1.4,53.8,4.5,72.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M357.6,179.8c0,0-1.8,52.5,4.2,70.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M359.5,178.2c0,0-2.1,51.6,3.9,69.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M361.4,177.6c0,0-2.1,51.6,3.9,69.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M363.4,176.9c0,0-2.1,50.6,3.9,68.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M364.9,176.4c0,0-1.1,49.6,4.9,67.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M367.2,174.7c0,0-1.7,47.7,4.2,65.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M368.7,174.1c0,0-1.4,46.6,4.5,64.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M370.6,173.5 c-0.9,24.3-1.4,46.6,4.5,64.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M372.6,172.9c0,0-0.4,45.2,4.5,63.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M374.5,172.3c0,0-0.8,44.7,4.2,62.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M376,171.7c0,0-0.9,43.4,4.5,61.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M377.9,171.1c0,0,0.3,42.4,4.5,60.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M379.3,171.2c0,0,0.3,41.6,4.8,60`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M381.2,170.6c0,0,0.2,40,4.5,58.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M383.1,169c0,0,0.5,41.3,4.2,59.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M384.7,168.4c0,0,1.7,40,4.5,58.1`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M386.6,167.8c0,0,1.4,40.2,4.2,57.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M388.5,167.2c0,0,2.3,39.9,3.9,56.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M391.4,166.6c0,0,0.3,36.9,2.9,54.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M393.4,165.9c0,0,0.6,36.9,2.9,53.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M395.9,164.4c0,0-2.2,36.3,1.9,53.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M398.2,163.7c0,0-2.6,35.9,1.2,53.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M399.7,163.1c0,0-3.2,35.7,1.5,53.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M400.6,163.5c1.8,24.6-1.8,36.2,2.5,52.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M403.6,162.9c0,0-2.3,33.4,1.5,51.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M404.5,162.3c0,0,2.7,35.5,1.2,52.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M406,161.7c0,0,1.1,32.1,2.5,49.9`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(beanieShades[1]),
              d: `M407.9,161.1c0,0,2.5,30.1,2.5,48.9`,
            },
          }),
        ];

      case HATTYPE.COWBOY:
        hatShadow = DEFAULTCOLOR.SHADOW;
        hatPrimary = fill?.primary ?? DEFAULTCOLOR.HATCOWBOY1;
        hatSecondary = fill?.secondary ?? DEFAULTCOLOR.HATCOWBOY2;

        return [
          constructElement({
            svgProps: {
              ...hatProps({ fill: hatPrimary, opacity: 1 }),
              d: `M351.4,162.3l-53-20.5c-25.9-8.7-38.1,12.6-45,25.8c-5.1,9.8-0.8,21.6,3.9,36.8 c1.6,5.1,3.2,10.5,4.5,16.4c5.2,23.5,22.1,47.6,39.3,55.3c16.1,7.2,39.9,4.5,42.7,4.2c0.2,0,0.3-0.1,0.3-0.3l0.7-2.7 c0.1-0.3,0.1-0.6,0.2-1l0.9-5.5c0.7-2.8-1.4-11.9-2.2-15.4c-1.2-5.3-3.1-8.4,2.3-13.9c6.8-7,38.9-12.9,61.6-11.5 c22.7,1.4,90.1,13.1,154.3,16.4s87.5-14.4,104.6-29.4c11.8-10.3,14.7-32,15.4-44.7c0.5-8.9-1.5-17.8-6-25.5 c-4.1-6.9-10.5-13.4-20-13.2c-20.2,0.4-37.9,25.4-37.9,25.4l-17.9,30l-2.9-5.7l-5.5-8.2l-9.2-29.9l-22.4-40c0,0-5.2-6.5-10-19.8 s-8.3-21-10.8-22.7c-2.5-1.7-44.2-2.1-44.2-2.1l-32.8-2.9c0,0-21.2,3.1-37.4,14.2c-16.2,11.1-36.7,18.1-42.8,29.9 s-25.9,36.8-26.9,42.5C354.3,149.8,351.4,162.3,351.4,162.3z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps({
                fill: hatSecondary,
                stroke: DEFAULTCOLOR.STROKE,
                opacity: 1,
              }),
              d: `M493.2,513.3C493.2,513.3,493.2,513.3,493.2,513.3c0.7,0,1.3-0.1,2-0.2 C494.6,513.2,493.9,513.3,493.2,513.3z M521.4,505.6c1.6-0.8,3.2-1.7,4.8-2.7C524.6,503.8,523,504.7,521.4,505.6z M744.4,693.6 L744.4,693.6C744.4,693.6,744.4,693.6,744.4,693.6L744.4,693.6z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps({
                fill: hatSecondary,
                stroke: DEFAULTCOLOR.STROKE,
                opacity: 1,
              }),
              d: `M493.2,513.3C493.2,513.3,493.2,513.3,493.2,513.3c0.7,0,1.3-0.1,2-0.2 C494.6,513.2,493.9,513.3,493.2,513.3z M521.4,505.6c1.6-0.8,3.2-1.7,4.8-2.7C524.6,503.8,523,504.7,521.4,505.6z M744.4,693.6 L744.4,693.6C744.4,693.6,744.4,693.6,744.4,693.6L744.4,693.6z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M520.6,241.5l-84.3-22.1c-12.4-3.3-24.4-8-35.6-14c-31.6-17.1-85.7-48.5-112.1-50.7 c-16.9-1.4-25.1,8-29,17.9c-3.8,9.4-2.8,18.4-0.7,29.5l2.9,18.9c5.2,23.5,22.1,47.6,39.3,55.3c16.1,7.2,39.9,4.5,42.7,4.2 c0.2,0,0.3-0.1,0.3-0.3l0.7-2.7c0.1-0.3,0.1-0.6,0.2-1l0.9-5.5c0.7-2.8-1.4-11.9-2.2-15.4c0,0-3.1-8.4,2.3-13.9 c6.8-7,38.9-12.9,61.6-11.5c22.7,1.4,90.1,13.1,154.3,16.4l-27.7-2.5C529.6,243.4,525.1,242.6,520.6,241.5z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps({ ...cowboyShades[1], opacity: ELEMENTOPACITY.MID }),
              d: `M394,185.1c0.1,0.1,0.2,0.1,0.3,0.2c68.2,36.1,66.8,30.7,83.9,35.6h112.9c3.6,0,6.4-3.2,5.9-6.8l-1.9-14.4 c0-0.1,0-0.3,0-0.4c0.1-1.2,5.1-10.2,5-10.4l-2.9-5.7l-5.5-8.2l-215-0.7v0C386.2,179.6,393,184.3,394,185.1z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps({
                fill: DEFAULTCOLOR.HIGHLIGHT,
                opacity: ELEMENTOPACITY.LIGHTEST,
              }),
              d: `M681.9,163.6c-1.1-12.1-8.8-21.2-8.8-21.2s-3.2-4.1-7.8-6.6 c-3.3-1.8-7.4-2.3-11.1-2c-3.2,0.2-7,1.1-10.2,2.6c-6.4,3-11.8,7.4-12.7,8c-0.1,0.1-0.1,0.1-0.2,0.2l-10.5,10.6 c-0.2,0.2-0.3,0.3-0.4,0.5l-11.1,17.9l-11.7,19.8c-0.1,0.1-0.1,0.2-0.2,0.3l-2,4.5c-0.2,0.4-0.3,0.9-0.2,1.4l0.9,6.6l27.6-41.9 c0.1-0.2,0.3-0.4,0.5-0.6c2-1.8,14.1-12.5,23.9-14.9c10.7-2.6,19.9-1.1,22.9,7s5.6,15.3,3.1,26.1s-7.9,28.5-19.8,37.8 c-11.9,9.3-26.6,20.7-71.4,18.1c-44.9-2.6-86.8-11.7-104.2-16.9c-0.1,0-0.3-0.1-0.4-0.1l0,0c-6.3-1.8-10.1-2.2-15.8-3.9 c0,0,0,0,0,0c-0.2-0.1-0.4-0.1-0.7-0.2c0,0,0,0-0.1,0c-0.2-0.1-0.4-0.1-0.7-0.2c0,0-0.1,0-0.1,0c-0.2-0.1-0.4-0.1-0.7-0.2 c0,0-0.1,0-0.1,0c-0.2-0.1-0.4-0.1-0.7-0.2c-0.1,0-0.1,0-0.2-0.1c-0.2-0.1-0.4-0.1-0.7-0.2c-0.1,0-0.1,0-0.2-0.1 c-0.2-0.1-0.4-0.1-0.7-0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.2-0.1-0.4-0.2-0.7-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.5-0.2-0.7-0.2 c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.5-0.2-0.7-0.3c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.2-0.7-0.3c-0.1,0-0.2-0.1-0.4-0.1 c-0.2-0.1-0.5-0.2-0.7-0.3c-0.1,0-0.3-0.1-0.4-0.1c-0.2-0.1-0.5-0.2-0.7-0.3c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2-0.1-0.5-0.2-0.7-0.3 c-0.1-0.1-0.3-0.1-0.4-0.2c-0.2-0.1-0.5-0.2-0.8-0.3c-0.1-0.1-0.3-0.1-0.4-0.2c-0.3-0.1-0.5-0.2-0.8-0.3c-0.2-0.1-0.3-0.1-0.5-0.2 c-0.3-0.1-0.5-0.2-0.8-0.3c-0.2-0.1-0.3-0.1-0.5-0.2c-0.3-0.1-0.5-0.2-0.8-0.4c-0.2-0.1-0.4-0.2-0.5-0.2c-0.3-0.1-0.6-0.2-0.9-0.4 c-0.2-0.1-0.4-0.2-0.6-0.2c-0.3-0.1-0.6-0.3-0.9-0.4c-0.2-0.1-0.4-0.2-0.6-0.3c-0.3-0.1-0.6-0.3-0.9-0.4c-0.2-0.1-0.4-0.2-0.7-0.3 c-0.3-0.1-0.6-0.3-0.9-0.4c-0.2-0.1-0.4-0.2-0.7-0.3c-0.3-0.1-0.6-0.3-1-0.4c-0.2-0.1-0.5-0.2-0.7-0.3c-0.3-0.1-0.6-0.3-0.9-0.4 c-0.3-0.1-0.5-0.2-0.8-0.4c-0.3-0.2-0.7-0.3-1-0.5c-0.3-0.1-0.5-0.2-0.8-0.4c-0.4-0.2-0.7-0.3-1.1-0.5c-0.3-0.1-0.5-0.3-0.8-0.4 c-0.4-0.2-0.7-0.4-1.1-0.5c-0.3-0.1-0.5-0.3-0.8-0.4c-0.4-0.2-0.7-0.4-1.1-0.5c-0.3-0.2-0.6-0.3-0.9-0.5c-0.3-0.2-0.7-0.3-1.1-0.5 c-0.3-0.2-0.7-0.3-1-0.5c-0.4-0.2-0.8-0.4-1.2-0.6c-0.3-0.2-0.6-0.3-0.9-0.5c-0.4-0.2-0.8-0.4-1.2-0.6c-0.3-0.2-0.7-0.3-1-0.5 c-0.4-0.2-0.9-0.4-1.3-0.7c-0.3-0.2-0.7-0.3-1-0.5c-0.5-0.2-0.9-0.5-1.4-0.7c-0.3-0.2-0.7-0.3-1-0.5c-0.5-0.2-0.9-0.5-1.4-0.7 c-0.4-0.2-0.7-0.4-1.1-0.6c-0.5-0.2-0.9-0.5-1.4-0.7c-0.4-0.2-0.8-0.4-1.2-0.6c-0.4-0.2-0.9-0.5-1.4-0.7c-0.4-0.2-0.9-0.5-1.3-0.7 c-0.5-0.3-1-0.5-1.5-0.8c-0.4-0.2-0.8-0.4-1.3-0.7c-0.6-0.3-1.2-0.6-1.7-0.9c-0.4-0.2-0.7-0.4-1.1-0.6c-0.5-0.3-1-0.5-1.5-0.8 c-0.5-0.2-0.9-0.5-1.4-0.7c-0.4-0.2-0.8-0.4-1.3-0.7c-0.6-0.3-1.2-0.6-1.8-0.9c-1-0.5-2.1-1.1-3.1-1.7c-0.1-0.1-0.2-0.1-0.3-0.2 c-0.1,0-0.1-0.1-0.2-0.2c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.1-0.1-0.2-0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.2-0.1-0.3-0.2 c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.1-0.4-0.2-0.5-0.4c-0.1,0-0.1-0.1-0.2-0.1 c-0.2-0.1-0.4-0.3-0.7-0.5c0,0-0.1-0.1-0.1-0.1c-0.3-0.2-0.6-0.4-0.9-0.6c0,0,0,0-0.1,0c-1-0.7-2.2-1.4-3.5-2.2c0,0-0.1,0-0.1,0 c-0.4-0.2-0.8-0.5-1.2-0.8c-0.1,0-0.1-0.1-0.2-0.1c-0.4-0.2-0.8-0.5-1.2-0.7c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.5-1.2-0.7 c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.8-0.5-1.2-0.7c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.3-0.9-0.5-1.4-0.8c-0.1-0.1-0.2-0.1-0.3-0.2 c-0.5-0.3-1.1-0.6-1.6-0.9c-7.4-4.2-16.4-8.7-25.5-12c-11-3.9-21.4-8.3-28.1-10.8c-19.5-7.5-36-14.4-45.6-10.1 c-9.6,4.3-17.8,14.6-20.3,19.1c-2.2,4-3.7,6.7-4,7.1c0,0,0,0.1-0.1,0.1c-5.1,9.8-0.8,21.6,3.9,36.8c1.6,5.1,3,9.8,4.3,15.7 l-1.5-9.9c0,0-4.1-22.7-3.2-26.8c0,0,1.1-12.2,6.5-18.2c5.4-6,8.6-9.2,16.4-10.3c7.7-1.1,15.9,0.4,22.5,2.6 c6.6,2.2,25.9,9.8,35,14.3c9.1,4.5,49.9,26.2,49.9,26.2s29,15.7,41.6,19.2c12.6,3.5,70.1,18.6,70.1,18.6l27.2,6.9 c0.2,0,0.3,0.1,0.5,0.1l45.9,3.9c0.1,0,0.2,0,0.3,0c1.9,0,23.8-0.3,42.6-3.5c8.8-1.5,16.8-4.6,21.9-7c0,0,14.7-6.9,26-16.6 c4.7-4.1,9.1-7.9,11.1-13.2C680.8,189.4,683,175.7,681.9,163.6z`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M394.4,144.5c31.2-1.2,41.4-18.5,41.8-36.1c0.5-21.4,4.9-43,4.9-43`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M390.6,154.4c0,0,30.7-6,58.9-2.5`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M527.3,85.3c0,0,1.3,43.1,17.1,53.2c15.7,10.2,29.1,22.6,29.1,22.6`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M458.3,111.4c0,0,18.5,26.1,38.4,32.7s31.7,15.8,31.7,15.8`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M648,167.8c-4.9-6.2-16.1,3.6-25.3,15.9c-5.4,7.1-9.6,15-11.8,23.7 c-1.6,6.6-0.3,16.4-2.9,21.4`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M651.1,156.4c0,0,17.5-1.7,17.2,17`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M282.4,221.8c0,0-16-60,25.5-43`,
            },
          }),
          constructElement({
            svgProps: {
              ...hatProps(cowboyShades[1]),
              d: `M332.4,187.3c0,0,33.4,15.2,50.2,27.9`,
            },
          }),
        ];

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
