import tw, { css, theme } from 'twin.macro';

import type { SCREENS } from './styles.constants';

export type GridRows =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19;

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridFlow = 'column' | 'column dense' | 'dense' | 'row' | 'row dense';

export interface GridStyles {
  rows?: GridRows;
  cols?: GridCols;
  flow?: GridFlow;
}

export const grid = ({ rows, cols, flow }: GridStyles) => [
  tw`grid`,

  rows &&
    css`
      grid-template-rows: repeat(${rows}, minmax(0, 1fr));
    `,

  cols &&
    css`
      grid-template-columns: repeat(${cols}, minmax(0, 1fr));
    `,

  flow &&
    css`
      grid-auto-flow: ${flow};
    `,
];

export interface GridBreakPoints {
  [SCREENS.BASE]?: GridStyles;
  [SCREENS.SM]?: GridStyles;
  [SCREENS.MD]?: GridStyles;
  [SCREENS.LG]?: GridStyles;
  [SCREENS.XL]?: GridStyles;
}

export const gridBreakPoints = ({ baseline, sm, md, lg, xl }: GridBreakPoints) => [
  baseline && grid(baseline),

  sm &&
    css`
      @media (min-width: ${theme`screens.sm`}) {
        ${grid(sm)}
      }
    `,

  md &&
    css`
      @media (min-width: ${theme`screens.md`}) {
        ${grid(md)}
      }
    `,

  lg &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${grid(lg)}
      }
    `,

  xl &&
    css`
      @media (min-width: ${theme`screens.xl`}) {
        ${grid(xl)}
      }
    `,
];
