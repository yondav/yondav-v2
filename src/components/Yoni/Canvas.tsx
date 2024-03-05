import { type ReactNode } from 'react';
import tw from 'twin.macro';

export default function Canvas({ children }: { children: ReactNode }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      viewBox='0 0 1000 1000'
    >
      {children}
    </svg>
  );
}
