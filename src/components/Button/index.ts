import tw, { styled } from 'twin.macro';

/**
 * Button component with customizable variants.
 *
 * @param {string} variant - The button variant, which can be 'primary', 'secondary', or 'neutral'.
 * @returns {JSX.Element} A styled button component with the specified variant.
 */
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'neutral';
}

const Button = styled.button<ButtonProps>(({ variant }) => [
  tw`rounded transition-all ease-linear duration-100`,
  // Apply styles based on the selected variant
  variant === 'neutral' &&
    tw`text-neutral-900 shadow shadow-neutral-200 hover:(bg-neutral-100)`,
]);

export default Button;
