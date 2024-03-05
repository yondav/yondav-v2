import { css, theme } from 'twin.macro';

import type { SCREENS } from './styles.constants';
import type { GridCols, GridRows } from './styles.grid';

export interface GridCellStyles {
  colSpan?: GridCols;
  rowSpan?: GridRows;
  colStart?: GridCols | 13;
  colEnd?: GridCols | 13;
  rowStart?: GridRows;
  rowEnd?: GridRows;
}

export const cell = ({
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
}: GridCellStyles) => [
  colSpan &&
    css`
      grid-column: span ${colSpan} / span ${colSpan};
    `,
  rowSpan &&
    css`
      grid-column: span ${rowSpan} / span ${rowSpan};
    `,
  colStart &&
    css`
      grid-column-start: ${colStart};
    `,
  colEnd &&
    css`
      grid-column-end: ${colEnd};
    `,
  rowStart &&
    css`
      grid-row-start: ${rowStart};
    `,
  rowEnd &&
    css`
      grid-row-end: ${rowEnd};
    `,
];

export interface GridCellBreakPoints {
  [SCREENS.BASE]: GridCellStyles;
  [SCREENS.SM]?: GridCellStyles;
  [SCREENS.MD]?: GridCellStyles;
  [SCREENS.LG]?: GridCellStyles;
  [SCREENS.XL]?: GridCellStyles;
}

export const gridCell = ({ baseline, sm, md, lg, xl }: GridCellBreakPoints) => [
  cell(baseline),
  sm &&
    css`
      @media (min-width: ${theme`screens.sm`}) {
        ${cell(sm)}
      }
    `,

  md &&
    css`
      @media (min-width: ${theme`screens.md`}) {
        ${cell(md)}
      }
    `,

  lg &&
    css`
      @media (min-width: ${theme`screens.lg`}) {
        ${cell(lg)}
      }
    `,

  xl &&
    css`
      @media (min-width: ${theme`screens.xl`}) {
        ${cell(xl)}
      }
    `,
];
