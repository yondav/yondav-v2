import React, { createElement, useCallback, useMemo } from 'react';

import { Portrait } from '../../contexts';

/**
 * Attribute component for rendering portrait attributes based on the specified attribute key.
 *
 * @component
 * @param {object} props - The properties for the Attribute component.
 * @param {string} props.attribute - The attribute key specifying which portrait attribute to render.
 * @returns {JSX.Element} An Attribute component that renders portrait attributes.
 */
interface AttributeProps {
  attribute: keyof Portrait.Portrait;
}

export default function Attribute({ attribute }: AttributeProps) {
  const {
    dispatch,
    portrait: { attributes, state, selectedColor },
  } = Portrait.usePortraitContext();
  const { type, fill } = attributes[attribute];

  const colorAction = useCallback(
    (key: keyof Portrait.AttributeFills) => {
      dispatch({
        type: Portrait.ACTIONTYPE.PORTRAIT,
        payload: {
          [attribute]: {
            type: attributes[attribute].type,
            fill: { ...attributes[attribute].fill, [key]: selectedColor },
          },
        },
      } as Exclude<Portrait.PortraitActions, Portrait.ColorAction | Portrait.DefaultAction | Portrait.EmptyAction | Portrait.StateAction>);
    },
    [attribute, attributes, dispatch, selectedColor]
  );

  // Construct id and key for given attribute.
  const elementId = useMemo(
    () => `${attribute}${type ? `-${type}` : ''}`,
    [attribute, type]
  );

  // Call function to return elements with casting for type safety.
  const elements = useMemo(() => {
    const constructElements = Portrait.elements[attribute] as Portrait.CreateElements<
      Portrait.AttributeTypeAssociation<typeof attribute>
    >;
    return constructElements({ type, fill, state, colorAction });
  }, [attribute, colorAction, fill, state, type]);

  return (
    <g id={elementId} key={elementId}>
      {elements.map((element, i) =>
        createElement(element.type, {
          ...element.props,
          key: i,
        })
      )}
    </g>
  );
}
