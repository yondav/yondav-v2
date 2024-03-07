import { motion, type Transition, type Variants } from 'framer-motion';
import { useCallback, useState, type ButtonHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '../Button';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  copy?: string;
}
// Define the framer-motion variants for ui animations.
const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transition: Transition = {
  duration: 0.25,
  delayChildren: 0.15,
  staggerChildren: 0.1,
};

// Define the styled components used in the component's UI.
const StyledButton = styled(Button).attrs({ variant: 'neutral' })(
  tw`relative w-14 h-14 flex flex-col items-center justify-center`
);

const StyledCopy = styled(motion.div).attrs({
  variants,
  transition,
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
})(tw`text-helper w-full flex justify-center items-center`);

/**
 * ActionButton component for creating interactive buttons with optional text animation.
 *
 * @component
 * @param {object} props - The properties for the ActionButton component.
 * @param {string} [props.copy] - The text to be displayed with animation on button hover.
 * @param {ReactNode} props.children - The content to be displayed inside the button.
 * @returns {JSX.Element} An ActionButton component.
 */
export default function ActionButton({ copy, children, ...rest }: ButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <button
      css={tw`relative w-14 h-14 flex flex-col items-center justify-center text-neutral-900 shadow shadow-neutral-200 hover:(bg-neutral-200) transition-all ease-linear duration-100 outline-0`}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {copy && isHovered && (
        <StyledCopy>
          {copy.split('').map((char, i) => (
            <motion.span key={i} variants={variants} transition={{ ease: 'easeInOut' }}>
              {char}
            </motion.span>
          ))}
        </StyledCopy>
      )}
    </button>
  );
}
