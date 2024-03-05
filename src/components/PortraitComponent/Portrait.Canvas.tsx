import { type ReactNode } from 'react';

/**
 * Canvas component for rendering SVG content.
 *
 * @param {object} props - The properties for the Canvas component.
 * @param {ReactNode} props.children - The SVG content to be rendered within the canvas.
 * @returns {JSX.Element} A Canvas component.
 */
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
