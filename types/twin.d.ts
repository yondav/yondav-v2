// import type { CSSProp, css as cssImport } from 'styled-components';
// import type styledImport from 'styled-components';
// import 'twin.macro';

// declare module 'twin.macro' {
//   // The styled and css imports
//   const styled: typeof styledImport;
//   const css: typeof cssImport;
// }

// declare module 'react' {
//   // The css prop
//   interface HTMLAttributes<T> extends DOMAttributes<T> {
//     css?: CSSProp;
//     tw?: string;
//   }
//   // The inline svg css prop
//   interface SVGProps<T> extends SVGProps<SVGSVGElement> {
//     css?: CSSProp;
//     tw?: string;
//   }
// }

// // The 'as' prop on styled components
// declare global {
//   namespace JSX {
//     interface IntrinsicAttributes<T> extends DOMAttributes<T> {
//       as?: string | Element;
//     }
//   }
// }

import type { DOMAttributes } from 'framer-motion';
import { motion } from 'framer-motion';
import type { JSXElementConstructor } from 'react';
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

// Create a custom function that wraps the styled function and handles motion components
function styledWithMotion<E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
  element: E
) {
  return function (
    ...args: Parameters<typeof styledImport> // Pass through the parameters of the original styled function
  ) {
    const StyledComponent = styledImport(element)(...args); // Call the original styled function with the specified element
    return motion(StyledComponent); // Wrap the styled component with framer-motion's motion HOC
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
