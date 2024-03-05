import { type ReactNode, useCallback, useMemo, useState, useRef } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import tw, { css, styled, theme } from 'twin.macro';

import {
  useIsomorphicLayoutEffect,
  useMediaQuery,
  useOnClickOutside,
} from '../../../hooks';
import { toTitleCase, type Nullable } from '../../../utils';

// Define the styled components used in the component's UI.
const SelectContainer = styled.div(tw`m-0 md:relative`);

const SelectLabelButton = styled.button(
  tw`z-10 py-2 px-2.5 min-w-[8rem] text-o-sm bg-neutral-50 rounded text-neutral-900 items-center justify-between border border-neutral-200 shadow transition-all ease-linear duration-100 hover:(bg-neutral-100 ring ring-neutral-100)`
);

const SelectDropDownMenu = styled.div<{ isVisible?: boolean }>(({ isVisible }) => [
  tw`z-20 fixed top-0 left-0 h-full w-full py-12 md:(absolute p-0 max-h-40 min-w-[8rem] h-auto w-auto rounded) flex flex-col items-center bg-neutral-50 border border-neutral-100 ring-neutral-200 transition-all ease-linear overflow-scroll`,
  !isVisible && tw`max-h-8 hidden`,
]);

const SelectDropDownItem = styled.div<{ active?: boolean }>(({ active }) => [
  tw`flex items-center justify-center w-full my-1 py-2 md:(w-11/12 my-0.5 py-1.5 px-2) text-o-lg md:text-o-sm text-neutral-500 rounded cursor-pointer`,
  !active &&
    css`
      &:hover,
      :focus,
      :focus:hover {
        ${tw`bg-neutral-200 outline-0`}
      }
    `,
  active && tw`border-b border-dashed border-neutral-500 font-semibold`,
]);

type SelectValueType = string | number;

export interface SelectProps {
  defaultValue?: Nullable<SelectValueType>;
  label: SelectValueType;
  values: Array<{ value: Nullable<SelectValueType>; copy: SelectValueType | ReactNode }>;
  onChange?: any;
  isOpen?: boolean;
}

/**
 * Select component for choosing from a list of options.
 *
 * @param {object} props - The properties for the Select component.
 * @param {SelectValueType} props.defaultValue - The default selected value.
 * @param {SelectValueType} props.label - The label for the Select component.
 * @param {Array<{ value: SelectValueType, copy: SelectValueType | ReactNode }>} props.values - The array of selectable values.
 * @param {Function} props.onChange - A callback function called when the selected value changes.
 * @param {boolean} props.isOpen - Indicates whether the Select component should be initially open.
 * @returns {JSX.Element} A Select component.
 */
export default function Select({
  defaultValue,
  label,
  values,
  onChange,
  isOpen = false,
}: SelectProps) {
  const ref = useRef(null);

  const [open, setOpen] = useState(isOpen);
  const [currentValue, setCurrentValue] = useState<Nullable<SelectValueType>>(
    defaultValue ?? ''
  );

  // Determine screen size.
  const isMobile = useMediaQuery(`(max-width: ${theme`screens.md`})`);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleValueChange = useCallback(
    (value: Nullable<SelectValueType>) => {
      setCurrentValue(!value ? 'none' : value);
      handleClose();
    },
    [handleClose]
  );

  const handleChange = useCallback(
    (value: Nullable<SelectValueType>) => {
      handleValueChange(value);
      // call method, if it exists
      if (typeof onChange === 'function') onChange(value);
      // close, after all tasks are finished
      handleClose();
    },
    [handleClose, handleValueChange, onChange]
  );

  const memoizedValues = useMemo(() => {
    const currentValueExists = values.find(value => value.value === currentValue);

    if (!currentValueExists) return values;

    const indexOfCurrentValue = values.map(value => value.value).indexOf(currentValue);

    return [
      values[indexOfCurrentValue],
      ...values.filter(value => value !== values[indexOfCurrentValue]),
    ];
  }, [currentValue, values]);

  const memoizedLabel = useMemo(
    () => currentValue ?? defaultValue ?? '-- select --',
    [currentValue, defaultValue]
  );

  useIsomorphicLayoutEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  const handleClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  useOnClickOutside(ref, handleClickOutside);

  return (
    <SelectContainer>
      {open && isMobile && (
        <div
          css={{ ...tw`z-30 fixed top-4 left-4 cursor-pointer` }}
          onClick={handleClose}
        >
          <IoChevronBackOutline size='1.5rem' />
        </div>
      )}
      <h3>{toTitleCase(label.toString())}</h3>
      <SelectLabelButton onClick={handleOpen}>{memoizedLabel}</SelectLabelButton>
      <SelectDropDownMenu isVisible={open} ref={ref}>
        {memoizedValues.map((value, index) => (
          <SelectDropDownItem
            onClick={() => handleChange(value.value)}
            active={value.value === currentValue}
            key={index}
          >
            {value.copy}
          </SelectDropDownItem>
        ))}
      </SelectDropDownMenu>
    </SelectContainer>
  );
}
