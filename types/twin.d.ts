import type { DOMAttributes } from 'react';
import type { CSSProp, css as cssImport } from 'styled-components';
import type styledImport from 'styled-components';
import 'twin.macro';

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
    tw?: string;
  }
}

// Augment styled components to accept motion components with any HTML element type
declare module 'styled-components' {
  export interface StyledComponent<
    // Define a generic for the HTML element type, allowing motion components with any HTML element type
    E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
    // Pass through the theme type
    T = {},
    // Specify any additional props
    O = {},
    // Specify the component's class key
    A extends string = never
  > extends React.Component<O, any, any> {
    // Override the `attrs` method to accept motion components with any HTML element type
    attrs<Props extends {}>(
      attrs: (Props & { as?: E }) | ((props: Props) => (Props & { as?: E }))
    ): StyledComponent<E, T, O & Props, A>;
  }
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
