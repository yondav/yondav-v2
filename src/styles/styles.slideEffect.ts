import { css } from 'styled-components';
import tw from 'twin.macro';

export interface SlideHoverProps {
  type: 'background' | 'underline';
  color:
    | 'cerise-100'
    | 'cerise-200'
    | 'cerise-300'
    | 'aegean-100'
    | 'aegean-200'
    | 'aegean-300'
    | 'lapis-100'
    | 'lapis-200'
    | 'lapis-300'
    | 'peony-100'
    | 'peony-200'
    | 'peony-300'
    | 'peony-400'
    | 'white'
    | 'black';
  to: 'top' | 'right' | 'bottom' | 'left';
}

export const slideStyles = ({ type, color, to }: SlideHoverProps) => {
  const colorVariant = `var(--brand-${color})`;
  return {
    inactive: css`
      ${tw`before:(pointer-events-none content-[''] absolute h-full transition-all duration-500)`}
      ${type === 'background' && tw`before:w-full`}
      ${type === 'underline' && tw`before:(w-1/2 border-b)`}
      &:before {
        background-color: ${type === 'background' ? colorVariant : 'transparent'};
        border-color: ${type === 'underline' ? colorVariant : 'transparent'};
        ${to === 'left' || to === 'right'
          ? 'top: 0px'
          : `left: ${type === 'underline' ? '25%' : '0px'}`};
        ${to === 'bottom' && 'bottom: 100%;'}
        ${to}: 100%;
      }
    `,
    active: css`
      color: ${type === 'underline' ? colorVariant : ''};
      &:before {
        ${(to === 'top' || to === 'bottom') &&
        `left: ${type === 'underline' ? '25%' : '0px'};`}
        ${to}: ${type === 'background' || to === 'bottom' || to === 'top' ? '0px' : '25%'}
      }
    `,
  };
};

export const slideHover = (props: SlideHoverProps) => [
  slideStyles(props).inactive,
  css`&:hover {
    ${slideStyles(props).active}}
  }`,
];
