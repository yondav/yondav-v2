import { useCallback, useMemo } from 'react';

import { Portrait } from '../../contexts';
import { toTitleCase } from '../../utils';
import { Select } from '../Form';

/**
 * AttributeSelect component for rendering a select input for portrait attributes.
 *
 * @component
 * @param {object} props - The properties for the AttributeSelect component.
 * @param {string} props.type - The type of portrait attribute to render the select input for.
 * @returns {JSX.Element} An AttributeSelect component that renders a select input for portrait attributes.
 */
export default function AttributeSelect({ type }: { type: Portrait.Attribute }) {
  const {
    dispatch,
    portrait: { attributes },
  } = Portrait.usePortraitContext();

  // Format all camelCased values for more readable display.
  const formatText = useCallback((text: string) => {
    return toTitleCase(text).toLowerCase();
  }, []);

  // Assemble array of options based on the passed attribute type.
  const values = useMemo(() => {
    const attributeGroup = Portrait.defaultAttributeFills[type];

    return [
      { value: 'none', copy: 'none' },
      ...Object.keys(attributeGroup).map(k => ({ value: k, copy: formatText(k) })),
    ];
  }, [formatText, type]);

  // Handle change event.
  const handleChange = useCallback(
    (value: keyof (typeof Portrait.defaultAttributeFills)[typeof type]) => {
      dispatch({
        type: Portrait.ACTIONTYPE.PORTRAIT,
        payload: {
          [type]: {
            type: value as Portrait.AttributeTypeAssociation<typeof type>, // Casting to attribute type union to ensure type safety of attribute type options.
            fill: Portrait.defaultAttributeFills[type][value] as Portrait.AttributeFills, // Casting to attribute fill object shape to ensure type safety of attribute fill.
          },
        },
      } as Exclude<Portrait.PortraitActions, Portrait.ColorAction | Portrait.DefaultAction | Portrait.EmptyAction | Portrait.StateAction>); // Casting to union of supported reducer action types
    },
    [dispatch, type]
  );

  const currentValue = useMemo(
    () => formatText(attributes[type]?.type) ?? 'None',
    [attributes, formatText, type]
  );

  return (
    <Select
      defaultValue={currentValue}
      label={formatText(type)}
      values={values}
      onChange={(value: keyof (typeof Portrait.defaultAttributeFills)[typeof type]) =>
        handleChange(value)
      }
    />
  );
}
