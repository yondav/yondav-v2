import tw, { css, theme } from 'twin.macro';

import type { SCREENS } from './styles.constants';

export type FlexOrientations = 'column' | 'column-reverse' | 'row' | 'row-reverse';

export type FlexJustify =
  | 'space-between'
  | 'center'
  | 'flex-end'
  | 'space-evenly'
  | 'space-around'
  | 'flex-start';

export type FlexAlign = 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch';

export interface FlexStyles {
  orientation?: FlexOrientations;
  justify?: FlexJustify;
  align?: FlexAlign;
}

export const flex = ({ orientation, justify, align }: FlexStyles) => [
  tw`flex`,

  orientation &&
    css`
      flex-direction: ${orientation};
    `,
  justify &&
    css`
      justify-content: ${justify};
    `,
  align &&
    css`
      align-items: ${align};
    `,
];

export interface FlexBreakPoints {
  [SCREENS.BASE]?: FlexStyles;
  [SCREENS.SM]?: FlexStyles;
  [SCREENS.MD]?: FlexStyles;
  [SCREENS.LG]?: FlexStyles;
  [SCREENS.XL]?: FlexStyles;
}

export const flexBreakPoints = ({ baseline, sm, md, lg, xl }: FlexBreakPoints) => [
  baseline && flex(baseline),

  sm &&
    css`
      @media (min-width: ${theme`screens.sm`}) {
        ${flex(sm)}
      }
    `,

  md &&
    css`
      @media (min-width: ${theme`screens.md`}) {
        ${flex(md)}
      }
    `,

  lg &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${flex(lg)}
      }
    `,

  xl &&
    css`
      @media (min-width: ${theme`screens.xl`}) {
        ${flex(xl)}
      }
    `,
];
