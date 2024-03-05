import { createElement, type SVGProps, useMemo } from 'react';

import {
  constructElement,
  DEFAULTCOLOR,
  ELEMENTOPACITY,
  HAIRTYPE,
  type ELEMENTTYPE,
  type YoniAttributeProps,
} from '../../../contexts';

export default function Hair({ type, fill }: YoniAttributeProps<HAIRTYPE>) {
  const elementId = useMemo(() => `hair${type ? `-${type}` : ''}`, [type]);

  const elements: {
    type: ELEMENTTYPE;
    props: SVGProps<SVGElement>;
  }[] = useMemo(() => {
    if (!type) return [];

    const hairFill = fill?.primary ?? DEFAULTCOLOR.STROKE;

    switch (type) {
      case HAIRTYPE.BALDING:
        return [
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M559.8,185.2c0.5,0.5,5,15.4,5.5,23c0,0.7,0.1,1.4,0.3,2.1c0.5,1.6,2,2.7,3.3,3.8 c4.6,3.9,7.7,9.4,9.6,15.1c5.5,16.3,7.1,33.5,9.4,50.5c2.6,19,11.6,35.4,15,54c0.1,0.4,0.1,1,0.2,1.7c0.2,0,0.3-0.1,0.3-0.1 c1.8-17-2.7-33-6.2-49.4c-1.8-8.3-3.3-17.6-1.3-26c1.6-7,6.8-12.8,7.8-20.2c0.5-3.4,0.5-6.8,0.2-10.2c-0.9-8.4,0.4-15,0-23.3 c-0.5-11.1-2.3-14.5-6.1-21.8c-0.6-1.4-10.3-11.8-11.4-14.3c-8-17.4-9.9-24.4-24.4-32.9L559.8,185.2z`,
            },
          }),
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M350.1,161.8c-18.1,22.4-11.8,37-12.8,39.2c-4.4,9.6-4.4,19.7-0.8,29.6 c3.8,10.2,5.1,25.4,6.1,35.9c0.2,1.3,1.5,2.5,2,3.7c6.8,19.6,16,41.5,12.6,62.7c-1,6,0.8,12,1.2,18c0.4,5.7,0.5,11.5,0.7,17.2 c-0.1,2.6,0.3,5.2,1,7.7c1.3,3.1,3.3,5.9,5.9,8.1l0.2,0.2c0.3-0.4,0.7-0.8,1-1.2c0,0,0,0,0,0c-4.2-7.1-3-25-3.6-29.2 c-1.2-8-3.3-15.9-4-23.9c-1.5-16.3-1.3-32.6-1.3-48.9c0.1-13.3-1-26.6,0.8-39.9c1.5-11.8-3-25.4,3-35.8L350.1,161.8z`,
            },
          }),
        ];

      case HAIRTYPE.BUSHY:
        return [
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M595.9,259.8c1.6-7,6.8-12.8,7.8-20.2c0.5-3.4,0.5-6.8,0.2-10.2c-0.9-8.4,0.4-15,0-23.3 c-0.5-11.1-2.3-14.5-6.1-21.8c-0.6-1.4-6.5-12.1-8.2-14.2c-12.6-14.7-14.9-33.4-29.3-42c-2.8-1.7-23.9-12.9-27-14.2 c-15.5-6.1-37.4-10.7-53.8-8.8c-13.7,1.5-32.5,2.9-45.9,5.8c-18.7,4.2-40.2,6.3-54.6,19.3c-2.6,2.3-23.8,25.3-28.9,31.5 c-18.1,22.4-11.8,37-12.8,39.2c-4.4,9.6-4.4,19.7-0.8,29.6c3.8,10.2,6.1,25.4,7.1,35.9c0.2,1.3,0.5,2.5,1,3.7 c6.8,19.6,16,41.5,12.6,62.7c-1,6,0.8,12,1.2,18c0.4,5.7,0.5,11.5,0.7,17.2c-0.1,2.6,0.3,5.2,1,7.7c1.3,3.1,3.3,5.9,5.9,8.1 l0.2,0.2c0.3-0.4,0.7-0.8,1-1.2c0,0,0,0,0,0c-4.2-7.1-3-25-3.6-29.2c-1.2-8-3.3-15.9-4-23.9c-1.5-16.3-1.3-32.6-1.3-48.9 c0.1-13.3-1-26.6,0.8-39.9c1.5-11.8,3,24.6,9,14.2c3.8-6.6,8.8-62.5,13.8-68.3c8.1-9.5,101.8,59.2,178.6,53.6 c7-0.5,14.1-4.3,16.5-12.6c0.3-1,1.8-1,2,0.1c0.1,0.8-2-3-0.6,1.3c5.5,16.3,7.1,33.5,9.4,50.5c2.6,19,11.6,35.4,15,54 c0.1,0.4,0.1,1,0.2,1.7c0.2,0,0.3-0.1,0.3-0.1c1.8-17-2.7-33-6.2-49.4C595.5,277.5,594,268.1,595.9,259.8z`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M394.3,174.6c0,0,140.5,59.9,164.1,59.9`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M391.4,160.7c0,0,145.1,65.4,167,69.6`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M394.3,142.6c0,0,139,79.4,171,85.8`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M377.1,163.1c0,0-4.5,49.1-8.2,64.1`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M375,151.7c0,0-8.1,71.3-12,80.2`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M364.1,155.4c0,0-20.7,42.9-20.7,65.5`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M350.1,161.8c0,0-5.5,12.3-6.8,26.4`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M571.4,160.7c0,0,24.3,23,26.5,40.5`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M423.1,126.1c0,0,142.6,100.5,148.3,101.1`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M456.6,119.3c0,0,103.5,97.1,114.8,101.6`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M582.7,191.8c0,0,13.9,32.9,13.9,42.7`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M502.9,115.9c0,0,64.4,94.9,70,99.8`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M542.4,129.5c0,0,40.5,76.8,42.3,89.6`,
            },
          }),
        ];

      case HAIRTYPE.FLAT:
        return [
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M586.1,159.4c-2.4-6.1-9.2-20.5-17-29C558.8,119,550.3,94,493,103.5c-44.9,7.4-104.4,15.3-115.5,27.6 c-12.9,14.4-42.5,43.5-42,71.2c0.3,19.1,11.1,64.7,14.7,75c6.7,17.7,10,36.9,7,55.6c-1,6,0.8,12,1.2,18c0.4,5.7,0.5,11.5,0.7,17.2 c-0.1,2.6,0.3,5.2,1,7.7c1.3,3.1,3.3,5.9,5.9,8.1l0.2,0.2c0.3-0.4,0.7-0.8,1-1.2c0,0,0,0,0,0c-4.2-7.1-3-25-3.6-29.2 c-1.2-8-3.3-15.9-4-23.9c-1.5-16.3-1.3-32.6-1.3-48.9c0.1-13.3-1-26.6,0.8-39.9c1.5-11.8,3-25.4,9-35.8c3.8-6.6,8.8-12.5,13.8-18.3 c8.1-9.5,15.5-16,28.6-16.4c8.5-0.2,101.1-19.7,122-11.8c13.4,5,5.8,6.4,13.7,19.7c0.5,1,1.2,1.9,2,2.6c0.8,0.5,1.6,0.9,2.5,1.2 l7.5,2.4c0.6,0.1,1.1,0.4,1.6,0.8c0.5,0.5,0.9,1.1,1.2,1.8c3.1,7,3.8,13.6,4.3,21.2c0,0.7,0.1,1.4,0.3,2.1c0.5,1.6,2,2.7,3.3,3.8 c4.6,3.9,7.7,9.4,9.6,15.1c5.5,16.3,7.1,33.5,9.4,50.5c2.6,19,11.6,35.4,15,54c0.1,0.4,0.1,1,0.2,1.7c0.2,0,0.3-0.1,0.3-0.1 c1.8-17-2.7-33-6.2-49.4c-1.8-8.3-3.3-17.6-1.3-26c1.6-6.8,6.4-12.3,7.6-19.3c0.2,1.1,4.8-12.1-0.4-29.1 C597.9,193.8,592.6,175.8,586.1,159.4z`,
            },
          }),
        ];

      case HAIRTYPE.LONG:
        return [
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M597.3,285.8c-1.8-8.3-3.3-17.6-1.3-26c1.6-7,6.8-12.8,7.8-20.2c0.5-3.4,0.5-6.8,0.2-10.2 c-0.9-8.4,0.4-15,0-23.3c-0.5-11.1-2.3-14.5-6.1-21.8c-0.6-1.4-9.1-13.7-10.2-16.2c-7.7-17.2-12.9-31.4-27.3-40 c-2.8-1.7-23.9-12.9-27-14.2c-15.5-6.1-37.4-10.7-53.8-8.8c-13.7,1.5-32.5,2.9-45.9,5.8c-18.7,4.2-40.2,6.3-54.6,19.3 c-2.6,2.3-23.7,25.4-28.9,31.5c-18.1,21.7-14.2,34-14.8,39.2c-1.3,11.3-2.4,19.7,1.2,29.6c3.8,10.2,6.1,25.4,7.1,35.9 c0.2,1.3,1.5,10.5,2,11.7c6.8,19.6,15,33.5,11.6,54.7c-1,6,0.8,12,1.2,18c0.4,5.7,0.5,11.5,0.7,17.2c-0.1,2.6,0.3,5.2,1,7.7 c1.3,3.1,3.3,5.9,5.9,8.1l0.2,0.2c0.3-0.4,0.7-0.8,1-1.2c0,0,0,0,0,0c-4.2-7.1-3-25-3.6-29.2c-1.2-8-3.3-15.9-4-23.9 c-1.5-16.3-1.3-32.6-1.3-48.9c0.1-13.3-1-26.6,0.8-39.9c1.5-11.8,3-25.4,9-35.8c3.8-6.6,8.8-12.5,13.8-18.3 c8.1-9.5,15.5-16,28.6-16.4c8.5-0.2,16.9,1.7,25.3,3c1.2,0.2,2.3,0.3,3.5,0.1c1.6-0.4,3-1.1,4.3-2.1c18.1-12,48-20.7,68.9-12.9 c13.4,5,25.8,6.4,33.7,19.7c0.5,1,1.2,1.9,2,2.6c0.8,0.5,1.6,0.9,2.5,1.2l7.5,2.4c0.6,0.1,1.1,0.4,1.6,0.8 c0.5,0.5,0.9,1.1,1.2,1.8c3.1,7,3.8,13.6,4.3,21.2c0,0.7,0.1,1.4,0.3,2.1c0.5,1.6,2,2.7,3.3,3.8c4.6,3.9,7.7,9.4,9.6,15.1 c5.5,16.3,7.1,33.5,9.4,50.5c2.6,19,11.6,35.4,15,54c0.1,0.4,0.1,1,0.2,1.7c0.2,0,0.3-0.1,0.3-0.1 C605.3,318.2,600.7,302.2,597.3,285.8z`,
            },
          }),
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M634.3,389.8c-16.6-8.8-27.9-33.3-28.6-39.3c-0.2-1.9-0.5-4.1-0.8-6.2c-0.8-1.5-0.9-3.8-0.8-5.7 c-0.3-2-0.5-3.3-0.5-3.3l-0.1,0.5l0,2.9c0,0.8,0,1.5,0,2.1l0,1.3c0.4,13.6,0.1,26.5-2.2,39.6c-2.4,13.6-8,26.5-13.4,39.1l-0.2,0.6 c-0.7,1.5-1.4,3-2,4.6c-0.1,4.8,0,10,0.3,15.3c0,0,3.4,4.5,13.2,5.6c9.8,1.1,24.1-3.3,27.1-5.6c3-2.3-3-4.2-3-4.2s6.4,0.8,12.8,0 c6.4-0.8,13.2-16.3,15.1-19.3C652.7,414.8,650.8,398.6,634.3,389.8z`,
            },
          }),
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M358.3,455.5c2.2,1.1,10.8-6.3,14.2-6c2.3,0.2,4.1-2.9,5.9-4.7c1.6-1.6,3.5-1.7,6.5-0.7 c4.4,1.5,7-4.2,7.1-4.4c-0.8-1.2-1.6-2.3-2.5-3.5c-1.8-2.3-3.4-4.7-4.7-7.3c-0.9-1.9-1.8-3.7-2.6-5.6c-5.2-10.9-10.5-22.1-14.3-34 c-0.1-0.5-0.3-1-0.5-1.6c-0.3-0.8-0.6-1.7-0.9-2.6l-0.6-1.2C366,383.9,350.4,451.3,358.3,455.5z`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M439.2,170.7c0,0,1.6-57.2,29.9-64.5`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M444.6,167.6c0,0,22.9-56.7,37-59.6`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M451.7,165c0,0,31.6-57.2,46-58.8`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M461,160.8c0,0,35.2-54.4,54.9-52.3`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M470.7,159.1c0,0,40.8-51.4,69.9-41.5`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M488.4,155.8c0,0,53.4-34.1,62.6-30.9`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M504.6,155.8c0,0,44.7-26.6,62.1-22.1`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M515.8,159.7c0,0,41.4-17.9,58-12.5`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M533.7,165c0,0,36.7-6,49.9-2.3`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M540.6,171.2c0,0,36,1.6,53.7,10`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M559.8,185.2c0,0,33.8,4.9,42.4,13.7`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M563.8,192.9c0,0,28.7,11.3,39.9,25.4`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M565.6,210.3c0,0,25.6,7.3,38.3,19.1`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M577,225.3c0,0,13.9,5.1,25.2,17.1`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M435.8,173.4c0,0-15.2-56.5-39.5-53.3`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M435.8,147.4c0,0-9.2-31.9-19.8-32.8`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M443.1,130c0,0-5.9-16.1-15.9-17.7`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M450.7,117c0,0-0.3-5.3-9-7.3`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M410.5,170.4c0,0-6.9-18.2-49.2-14.6`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M411.8,155.8c0,0-24.4-19.1-38-20.2`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M381.9,186.8c0,0-21.3-19.8-41.6-5.5`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M368.1,205c0,0-9.4-6.8-30.9,0.6`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M361.1,222.6c0,0-8.7-5.1-21.7,19.8`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M607.4,368.1c0,0,8.6,22.2,23.9,32.9`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M601,381.7c0,0,20.6,36.4,38.1,36.1`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M601,402.3c0,0,17.8,19.2,30.2,23.6`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M594.3,414.1c0,0,10.7,21,28.6,22.9`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M589.6,431.6c0,0,10.2,10.7,17.7,10.2`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M368.1,396.7c0,0-6.7,38.2-2.5,42.8`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M374,419.7c0,0-3.4,14.3-2.4,22`,
            },
          }),
          constructElement({
            svgProps: {
              fill: DEFAULTCOLOR.HIGHLIGHT,
              opacity: ELEMENTOPACITY.LIGHTEST,
              d: `M378.4,430.7c0,0,6.1-1.4,6.3,5.9`,
            },
          }),
        ];

      case HAIRTYPE.MOHAWK:
        return [
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M479.5,95.1c-13.7,1.5-32.5,2.9-45.9,5.8c-18.7,4.2,11.5,90,24.7,89.6 C466.8,190.3,495.9,93.3,479.5,95.1z`,
            },
          }),
        ];

      case HAIRTYPE.SHORT:
        return [
          constructElement({
            svgProps: {
              fill: hairFill,
              d: `M595.9,259.8c1.6-7,6.8-12.8,7.8-20.2c0.5-3.4,0.5-6.8,0.2-10.2c-0.9-8.4,0.4-15,0-23.3 c-0.5-11.1-2.3-14.5-6.1-21.8c-0.6-1.4-6.5-12.1-8.2-14.2c-12.6-14.7-14.9-33.4-29.3-42c-2.8-1.7-23.9-12.9-27-14.2 c-15.5-6.1-37.4-10.7-53.8-8.8c-13.7,1.5-32.5,2.9-45.9,5.8c-18.7,4.2-40.2,6.3-54.6,19.3c-2.6,2.3-23.8,25.3-28.9,31.5 c-18.1,22.4-11.8,37-12.8,39.2c-4.4,9.6-4.4,19.7-0.8,29.6c3.8,10.2,6.1,25.4,7.1,35.9c0.2,1.3,0.5,2.5,1,3.7 c6.8,19.6,16,41.5,12.6,62.7c-1,6,0.8,12,1.2,18c0.4,5.7,0.5,11.5,0.7,17.2c-0.1,2.6,0.3,5.2,1,7.7c1.3,3.1,3.3,5.9,5.9,8.1 l0.2,0.2c0.3-0.4,0.7-0.8,1-1.2c0,0,0,0,0,0c-4.2-7.1-3-25-3.6-29.2c-1.2-8-3.3-15.9-4-23.9c-1.5-16.3-1.3-32.6-1.3-48.9 c0.1-13.3-1-26.6,0.8-39.9c1.5-11.8,3-25.4,9-35.8c3.8-6.6,8.8-12.5,13.8-18.3c8.1-9.5,15.5-16,28.6-16.4c8.5-0.2,16.9,1.7,25.3,3 c1.2,0.2,2.3,0.3,3.5,0.1c1.6-0.4,3-1.1,4.3-2.1c18.1-12,48-20.7,68.9-12.9c13.4,5,25.8,6.4,33.7,19.7c0.5,1,1.2,1.9,2,2.6 c0.8,0.5,1.6,0.9,2.5,1.2l7.5,2.4c0.6,0.1,1.1,0.4,1.6,0.8c0.5,0.5,0.9,1.1,1.2,1.8c3.1,7,3.8,13.6,4.3,21.2c0,0.7,0.1,1.4,0.3,2.1 c0.5,1.6,2,2.7,3.3,3.8c4.6,3.9,7.7,9.4,9.6,15.1c5.5,16.3,7.1,33.5,9.4,50.5c2.6,19,11.6,35.4,15,54c0.1,0.4,0.1,1,0.2,1.7 c0.2,0,0.3-0.1,0.3-0.1c1.8-17-2.7-33-6.2-49.4C595.5,277.5,594,268.1,595.9,259.8z`,
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
