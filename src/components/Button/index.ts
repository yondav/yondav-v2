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
  tw`p-2.5 px-4 rounded transition-all ease-linear duration-100 outline-0`,
  // Apply styles based on the selected variant
  variant === 'neutral' &&
    tw`text-neutral-900 shadow shadow-neutral-200 hover:(bg-neutral-100)`,

  variant === 'primary' &&
  {
    ...tw`border-2 border-neutral-600 text-neutral-600 uppercase font-bold hover:(text-fg [box-shadow: .25rem .25rem 0 theme(colors.accent.primary.600), -.25rem -.25rem 0 theme(colors.secondary.200)] bg-primary-400 border-primary-400)`,
    // boxShadow: '.5rem .5rem 0 #CE9D4D, -.5rem -.5rem 0 #8A3A38',
}
]);

export default Button;
