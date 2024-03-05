/**
 * `ColorPicker` is a custom React component that provides color selection functionality.
 * It displays a color picker interface with options to choose and copy a color's hexadecimal value.
 *
 * @component
 * @param {InjectedColorProps} props - The color-related properties and event handlers passed to the component.
 * @returns {JSX.Element} A color picker UI element.
 */

import { useIsomorphicLayoutEffect } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import type { ColorResult, InjectedColorProps } from 'react-color';
import { CustomPicker } from 'react-color';
import { EditableInput, Hue, Saturation } from 'react-color/lib/components/common';
import type { EditableInputStyles } from 'react-color/lib/components/common/EditableInput';
import tw, { styled, theme } from 'twin.macro';

import { UiTheme } from '../../contexts';
import { useCopyToClipboard } from '../../hooks';
import type { Nullable } from '../../utils';

// Define the styled components used in the component's UI.
const ColorPickerContainer = styled.div(
  tw`w-full h-28 flex gap-2 p-2 rounded bg-neutral-50 text-neutral-900 border border-neutral-200 shadow ring ring-neutral-100 sm:w-2/3 md:(w-48 h-52 flex-col)`
);

const HueSaturationContainer = styled.div(tw`w-full flex flex-col gap-2.5`);

const HueSaturation = styled.div<{ variant: 'hue' | 'saturation' }>(({ variant }) => [
  tw`relative overflow-hidden`,
  variant === 'hue' ? tw`rounded-full h-2` : tw`rounded h-20 md:h-32`,
]);

const SelectedColorContainer = styled.div(tw`relative w-32 md:(h-20 w-44)`);

const CopyButton = styled.span<{
  luminance: number;
  status: Nullable<'success' | 'fail'>;
}>(({ luminance, status }) => [
  tw`absolute top-0 right-0 px-1 rounded rounded-br-none rounded-tl-none z-50 cursor-pointer text-[.5em] transition-all`,

  luminance > 0.5
    ? tw`bg-zinc-900/50 text-neutral-50`
    : tw`bg-zinc-50/50 text-neutral-900`,

  status &&
    (status === 'success'
      ? tw`text-green-300  bg-green-900`
      : tw`text-red-300 bg-red-900`),
]);

/**
 * The `ColorPicker` component displays a color picker interface with options to choose and copy a color's hexadecimal value.
 *
 * @param {InjectedColorProps} props - The color-related properties and event handlers passed to the component.
 * @returns {JSX.Element} A color picker UI element.
 */
function ColorPicker(props: InjectedColorProps) {
  const { contrast } = UiTheme.useThemeContext();
  const [, copy] = useCopyToClipboard();
  const [hexCopied, setHexCopied] = useState<Nullable<'success' | 'fail'>>(null);

  // Handler function to copy the hexadecimal value to the clipboard.
  const handleCopy = useCallback(async () => {
    const status = await copy(props.hex);

    setHexCopied(status ? 'success' : 'fail');
  }, [copy, props.hex]);

  // Handler function to reset the copy status after a delay.
  const handleCopyStatus = useCallback(() => {
    if (hexCopied)
      setTimeout(() => {
        setHexCopied(null);
      }, 3000);
  }, [hexCopied]);

  // Use an isomorphic effect hook to handle copy status changes.
  useIsomorphicLayoutEffect(() => {
    handleCopyStatus();
  }, [handleCopyStatus]);

  // Handler function to handle color changes.
  const handleChange = useCallback(
    (color: ColorResult) => (props.onChange ? props.onChange(color) : null),
    [props]
  );

  // Calculate the luminance of the selected color.
  const luminance = useMemo(
    () =>
      props.rgb
        ? (0.299 * props.rgb.r + 0.587 * props.rgb.g + 0.114 * props.rgb.b) / 255
        : 0.5,
    [props.rgb]
  );

  // Define styles for the editable input displaying the color code.
  const inputStyles: EditableInputStyles = useMemo(() => {
    const textColor = () => {
      if (luminance > 0.5) {
        if (contrast === UiTheme.CONTRASTTHEME.LIGHT) return theme`colors.neutral.900`;
        return theme`colors.neutral.50`;
      }

      if (contrast === UiTheme.CONTRASTTHEME.LIGHT) return theme`colors.neutral.50`;
      return theme`colors.neutral.900`;
    };
    return {
      wrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme`height.full`,
      },
      input: {
        border: 'none',
        backgroundColor: props.hex,
        color: textColor(),
        width: theme`width.full`,
        height: theme`height.full`,
        textAlign: 'center',
        padding: 0,
        borderRadius: theme`borderRadius.DEFAULT`,
        fontSize: theme`fontSize.helper`,
        pointerEvents: 'none',
      },
      label: {
        fontSize: theme`fontSize.helper`,
        color: theme`colors.neutral.400`,
      },
    };
  }, [contrast, luminance, props.hex]);

  return (
    <ColorPickerContainer>
      <HueSaturationContainer>
        <HueSaturation variant='saturation'>
          <Saturation {...props} color={props.hex} onChange={handleChange} />
        </HueSaturation>
        <HueSaturation variant='hue'>
          <Hue {...props} color={props.hex} onChange={handleChange} />
        </HueSaturation>
      </HueSaturationContainer>
      <SelectedColorContainer>
        <CopyButton luminance={luminance} status={hexCopied} onClick={handleCopy}>
          copy
        </CopyButton>
        <EditableInput value={props.hex} style={inputStyles} onChange={handleChange} />
      </SelectedColorContainer>
    </ColorPickerContainer>
  );
}

export default CustomPicker(ColorPicker);
