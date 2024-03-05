import { motion, type Transition, type Variants } from 'framer-motion';
import { useCallback, useState, type ButtonHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';

import Button from '../Button';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  copy?: string;
}

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

export default function ActionButton({ copy, children, ...rest }: ButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <StyledButton
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
    </StyledButton>
  );
}
