import type { DOMAttributes } from 'react';
import type { CSSProp, css as cssImport } from 'styled-components';
import styledImport from 'styled-components';
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

// Create a custom function that wraps the styled function and handles motion components with any HTML element type
function styledWithMotion<E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
  element: E
) {
  return function (
    ...args: Parameters<typeof styledImport> // Pass through the parameters of the original styled function
  ) {
    const styledComponent = styledImport(...args); // Call the original styled function
    return styledComponent as any; // Cast the styled component to any to avoid type errors
  };
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
