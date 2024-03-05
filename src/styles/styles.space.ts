import tw, { css } from 'twin.macro';

export const withGutters = () => [
  tw`mx-auto max-w-[1200px] w-[calc(100vw - 32px)] xl:w-[calc(100vw - 240px)]`,
  css`
    @media (min-width: 800px) {
      ${tw`w-[calc(100vw - 96px)]`}
    }
  `,
];
